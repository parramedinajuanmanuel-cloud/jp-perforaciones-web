import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-bg-white)' }}>
              JP
            </span>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '1rem', color: 'var(--color-bg-light)', marginLeft: '8px' }}>
              PERFORACIONES
            </span>
          </div>
          <p className="footer-desc">
            Empresa ecuatoriana especializada en estudio de suelos, perforaciones, pilotaje y geotecnia. Solidez y confianza técnica.
          </p>
        </div>

        {/* Links Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Servicios</h3>
          <ul className="footer-links">
            <li><Link href="#servicios">Estudio de Suelos</Link></li>
            <li><Link href="#servicios">Perforaciones Geotécnicas</Link></li>
            <li><Link href="#servicios">Pilotaje</Link></li>
            <li><Link href="#servicios">Ensayos SPT</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h3 className="footer-heading">Contacto</h3>
          <ul className="footer-links contact-footer-links">
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=Alborada+12,+Guayaquil,+Ecuador" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Ecuador - Guayaquil, Alborada 12
              </a>
            </li>
            <li>
              <a href="mailto:parramedinajuanmanuel@gmail.com" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="footer-icon gmail-footer-icon">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73l-6.545 4.91-6.545-4.91v9.272H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z"/>
                </svg>
                parramedinajuanmanuel@gmail.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/593995833099" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="footer-icon whatsapp-footer-icon">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                +593 995833099
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2019 JP Perforaciones. Todos los derechos reservados.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-primary);
          color: var(--color-bg-light);
          padding-top: var(--spacing-xl);
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: var(--spacing-lg);
          padding-bottom: var(--spacing-xl);
        }

        .footer-logo {
          margin-bottom: var(--spacing-md);
        }

        .footer-desc {
          opacity: 0.8;
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-heading {
          color: var(--color-bg-white);
          font-family: var(--font-heading);
          font-size: 1.1rem;
          margin-bottom: var(--spacing-md);
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .footer-links a, .footer-links li {
          color: var(--color-bg-light);
          opacity: 0.8;
          transition: opacity 0.2s ease;
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          opacity: 1;
          color: var(--color-bg-white);
          text-decoration: underline;
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none !important;
        }

        .footer-icon {
          flex-shrink: 0;
          opacity: 0.9;
        }

        .gmail-footer-icon {
          color: #ff4b2b; /* Subtle red for visibility but keeping footer look */
        }

        .whatsapp-footer-icon {
          color: #25d366;
        }

        .footer-bottom {
          background-color: #12284b; /* Even darker Navy */
          padding: var(--spacing-md) 0;
          text-align: center;
          font-size: 0.85rem;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
