"use client";
import React, { useState } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function ContactFormInner() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      setErrorMessage("reCAPTCHA no está disponible en este momento.");
      return;
    }
    
    setStatus('loading');
    setErrorMessage('');

    try {
      // 1. Obtener el token de reCAPTCHA
      const token = await executeRecaptcha("contact_submit");

      // 2. Enviar datos al endpoint protegido
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, token }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.error || 'Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="subtitle">Contacto</span>
          <h2>Inicia tu <span className="highlight-blue">Proyecto</span> con Nosotros</h2>
          <p className="contact-desc">
            Estamos listos para brindarte la mejor asesoría técnica en geotecnia y perforaciones en todo el Ecuador.
          </p>

          <div className="info-list">
            <a href="https://www.google.com/maps/search/?api=1&query=Alborada+12,+Guayaquil,+Ecuador" target="_blank" rel="noopener noreferrer" className="info-item functional-link">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h3>Ubicación</h3>
                <p>Ecuador - Guayaquil, Alborada 12</p>
              </div>
            </a>
            <a href="mailto:parramedinajuanmanuel@gmail.com" className="info-item functional-link">
              <div className="info-icon gmail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73l-6.545 4.91-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>Email (Gmail)</h3>
                <p>parramedinajuanmanuel@gmail.com</p>
              </div>
            </a>
            <a href="https://wa.me/593995833099" target="_blank" rel="noopener noreferrer" className="info-item functional-link">
              <div className="info-icon whatsapp-icon-bg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div className="info-text">
                <h3>WhatsApp</h3>
                <p>+593 995833099</p>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-wrapper">
          {status === 'success' ? (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <h3>¡Mensaje Enviado!</h3>
              <p>Gracias <strong>{formData.name}</strong>. Hemos recibido tu requerimiento técnico y nuestro equipo se contactará contigo en breve.</p>
              <button 
                className="btn-primary" 
                onClick={() => setStatus('idle')}
                style={{ marginTop: '20px' }}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ej. Juan Pérez"
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  placeholder="ejemplo@correo.com"
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Tipo de Proyecto</label>
                <select 
                  name="subject" 
                  id="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required
                  disabled={status === 'loading'}
                >
                  <option value="">Seleccione una opción</option>
                  <option value="suelos">Estudio de Suelos</option>
                  <option value="perforacion">Perforación Geotécnica</option>
                  <option value="pilotaje">Pilotaje</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  placeholder="Cuéntanos sobre tu requerimiento..."
                  disabled={status === 'loading'}
                ></textarea>
              </div>
              
              {status === 'error' && (
                <div className="error-notice">
                  ⚠️ {errorMessage || 'Hubo un problema al enviar. Intente de nuevo.'}
                </div>
              )}

              <button 
                type="submit" 
                className={`btn-primary form-submit ${status === 'loading' ? 'loading' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-bg-white);
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          align-items: flex-start;
        }

        .contact-info .subtitle {
          color: var(--color-secondary);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          display: block;
          margin-bottom: var(--spacing-sm);
        }

        .contact-info h2 {
          font-size: 2.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
          line-height: 1.2;
        }

        .contact-desc {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-lg);
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .info-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: center;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background-color: var(--color-bg-light);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-sm);
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .functional-link {
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .functional-link:hover {
          transform: translateX(10px);
        }

        .functional-link:hover .info-icon {
          background-color: var(--color-secondary);
          color: white;
        }

        .gmail-icon {
          color: #ea4335;
        }

        .whatsapp-icon-bg {
          color: #25d366;
        }
        
        .functional-link:hover .gmail-icon,
        .functional-link:hover .whatsapp-icon-bg {
          color: white;
        }

        .info-text h3 {
          font-size: 1rem;
          color: var(--color-primary);
          margin-bottom: 2px;
        }

        .info-text p {
          font-size: 0.9rem;
          color: var(--color-text-muted);
        }

        .contact-form-wrapper {
          background-color: var(--color-bg-light);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-primary);
        }

        .form-group input, .form-group select, .form-group textarea {
          padding: 12px;
          border: 1px solid rgba(27, 58, 107, 0.2);
          border-radius: var(--radius-sm);
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: border-color 0.2s ease;
        }

        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          outline: none;
          border-color: var(--color-secondary);
        }

        .form-submit {
          padding: 14px;
          font-size: 1rem;
          margin-top: 10px;
          position: relative;
          transition: all 0.3s ease;
        }

        .form-submit.loading {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: var(--spacing-lg) 0;
          animation: fadeIn 0.5s ease;
        }

        .success-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-md);
        }

        .success-message h3 {
          color: var(--color-primary);
          font-size: 1.8rem;
          margin-bottom: var(--spacing-sm);
        }

        .error-notice {
          background-color: #fff1f0;
          border: 1px solid #ffa39e;
          padding: 10px;
          border-radius: var(--radius-sm);
          color: #cf1322;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 968px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default function ContactForm() {
  // Configured to use process.env or fallback to Google test key to prevent development crashes
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  
  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
      <ContactFormInner />
    </GoogleReCaptchaProvider>
  );
}
