import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
// We initialize resend only if we have an API key, to prevent crash on boot if env is missing
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Básico in-memory rate limiting (por IP)
const rateLimitMap = new Map();

function rateLimitCheck(ip) {
  const windowMs = 60 * 1000; // 1 minuto
  const maxRequests = 3; // Máximo 3 peticiones por minuto por IP

  const now = Date.now();
  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true; // allowed
  }

  const record = rateLimitMap.get(ip);
  if (now > record.resetTime) {
    record.count = 1;
    record.resetTime = now + windowMs;
    return true; // allowed
  }

  if (record.count >= maxRequests) {
    return false; // rate limited
  }

  record.count += 1;
  return true; // allowed
}

export async function POST(req) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    if (!rateLimitCheck(ip)) {
      return Response.json({ error: "Demasiadas peticiones desde tu inicio. Intenta de nuevo en 1 minuto." }, { status: 429 });
    }

    const { name, email, subject, message, token } = await req.json();

    // 2. reCAPTCHA v3 Verification
    if (!token) {
      return Response.json({ error: "Token de seguridad reCAPTCHA ausente." }, { status: 400 });
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe"; // Fallback to Google's test secret key for development
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    
    const recaptchaRes = await fetch(verifyUrl, { method: 'POST' });
    const recaptchaJson = await recaptchaRes.json();
    
    if (!recaptchaJson.success || recaptchaJson.score < 0.5) {
      console.warn("reCAPTCHA validation failed:", recaptchaJson);
      return Response.json({ error: "Rechazado por el sistema Anti-Spam (reCAPTCHA)." }, { status: 400 });
    }

    // 3. Send Email via Resend
    if (!resend) {
      // Si no hay API key (ej. desarrollo local), simulamos el envío exitoso
      console.log('--- SIMULACIÓN DE ENVÍO (Sin RESEND_API_KEY) ---');
      console.log(`De: ${name} <${email}>`);
      console.log(`Asunto: ${subject}`);
      console.log(`Mensaje: ${message}`);
      return Response.json({ success: true, simulado: true });
    }

    const { data, error } = await resend.emails.send({
      from: 'JP Perforaciones <web@jpperforaciones.com.ec>',
      to: ['contacto@jpperforaciones.com.ec'], // Dirección destino real
      subject: `NUEVA CONSULTA: ${subject.toUpperCase()} - ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #1B3A6B; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 20px;">JP PERFORACIONES</h1>
            <p style="margin: 5px 0 0; opacity: 0.8;">Notificación de Consulta Web</p>
          </div>
          <div style="padding: 30px;">
            <p style="color: #5A6A7A; font-size: 14px; margin-bottom: 20px;">Se ha recibido una nueva solicitud técnica a través del sitio web:</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0; width: 150px;"><strong>Cliente:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><strong>Tipo de Proyecto:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f0f0f0;"><span style="background-color: #2F5FA5; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${subject.toUpperCase()}</span></td>
              </tr>
            </table>

            <div style="margin-top: 30px;">
              <h3 style="color: #1B3A6B; font-size: 16px; margin-bottom: 10px;">Mensaje / Requerimiento:</h3>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border-left: 4px solid #1B3A6B; font-style: italic;">
                "${message}"
              </div>
            </div>
          </div>
          <div style="background-color: #f0f4f8; padding: 15px; text-align: center; color: #5A6A7A; font-size: 12px;">
            Este es un correo automático generado por el sitio web de JP Perforaciones.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error: "Error interno al enviar el correo." }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (err) {
    console.error("API error:", err);
    return Response.json({ error: "Error procesando la solicitud." }, { status: 500 });
  }
}
