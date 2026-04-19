import React from 'react';

export default function AboutUs() {
  return (
    <section id="nosotros" className="about-section">
      <div className="container about-container">
        <div className="about-image">
          <div className="image-wrapper single-premium-photo">
            <div className="accent-border"></div>
            <div className="photo-container main-photo">
              <img src="/images/bauer_rig.png" alt="Perforadora Hidráulica Moderna" />
            </div>
            <div className="experience-badge">
              <span className="years">10</span>
              <span className="text">Años de<br/>Trayectoria</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="subtitle">Sobre Nosotros</span>
          <h2>Compromiso con la <span className="highlight-blue">Excelencia Técnica</span></h2>
          <p className="about-description">
            En <strong>JP Perforaciones</strong>, nuestra trayectoria se define por la solidez y la precisión. Somos una empresa ecuatoriana líder en el sector de la geotecnia, dedicada a transformar el subsuelo en la base segura de grandes infraestructuras.
          </p>

          <div className="about-core">
            <div className="core-item">
              <div className="core-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21h18"></path>
                  <path d="M9 8h10"></path>
                  <path d="M9 12h10"></path>
                  <path d="M9 16h10"></path>
                  <path d="M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div className="core-text">
                <h3>Misión</h3>
                <p>Brindar soluciones integrales en estudio de suelos y pilotaje con los más altos estándares de calidad y seguridad.</p>
              </div>
            </div>
            <div className="core-item">
              <div className="core-icon">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <div className="core-text">
                <h3>Visión</h3>
                <p>Ser el referente tecnológico y técnico en ingeniería geotécnica a nivel nacional para el año 2030.</p>
              </div>
            </div>
          </div>

          <div className="about-stats-mini">
            <div className="mini-stat">
              <strong>Solidez</strong>
              <span>Equipos de última generación</span>
            </div>
            <div className="mini-stat">
              <strong>Confianza</strong>
              <span>Personal altamente certificado</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 100px 0;
          background-color: var(--color-bg-white);
          overflow: hidden;
        }

        .about-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .about-image {
          position: relative;
          padding: 20px;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .accent-border {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--color-secondary);
          z-index: 0;
          border-radius: var(--radius-md);
        }

        .photo-container {
          position: relative;
          z-index: 1;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          transition: transform 0.5s ease;
        }

        .photo-container:hover {
          transform: scale(1.02);
        }

        .photo-container img {
          width: 100%;
          height: auto;
          display: block;
        }

        .experience-badge {
          position: absolute;
          bottom: -30px;
          right: -30px;
          background-color: var(--color-primary);
          color: white;
          padding: 25px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 15px;
          z-index: 2;
          box-shadow: 0 10px 30px rgba(27, 58, 107, 0.3);
          border-left: 5px solid var(--color-secondary);
        }

        .about-content .subtitle {
          color: var(--color-secondary);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          display: block;
          margin-bottom: var(--spacing-sm);
        }

        .about-content h2 {
          font-size: 2.8rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
          line-height: 1.2;
        }

        .highlight-blue {
          color: var(--color-secondary);
        }

        .about-description {
          font-size: 1.1rem;
          color: var(--color-text-main);
          line-height: 1.7;
          margin-bottom: var(--spacing-lg);
          opacity: 0.9;
        }

        .about-core {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-lg);
        }

        .core-item {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
          padding: 12px;
          border-radius: var(--radius-md);
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid transparent;
        }

        .core-item:hover {
          background-color: var(--color-bg-white);
          border-color: rgba(69, 137, 245, 0.1);
          transform: translateX(8px);
          box-shadow: 0 5px 15px rgba(27, 58, 107, 0.05);
        }

        .core-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: var(--color-bg-light);
          color: var(--color-primary);
          border-radius: var(--radius-sm);
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .core-icon svg {
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .core-item:hover .core-icon {
          background: var(--color-primary);
          color: white;
          transform: scale(1.05) rotate(-5deg);
          box-shadow: 0 8px 20px rgba(69, 137, 245, 0.25);
        }

        .core-item:hover .core-icon svg {
          transform: scale(1.15) rotate(5deg);
        }

        .core-item h3 {
          font-size: 1.2rem;
          margin-bottom: 4px;
        }

        .core-item p {
          font-size: 0.95rem;
          color: var(--color-text-muted);
        }

        .about-stats-mini {
          display: flex;
          gap: var(--spacing-lg);
          border-top: 1px solid var(--color-bg-light);
          padding-top: var(--spacing-md);
        }

        .mini-stat strong {
          display: block;
          color: var(--color-primary);
          font-size: 1.1rem;
        }

        .mini-stat span {
          font-size: 0.85rem;
          color: var(--color-text-muted);
        }

        @media (max-width: 968px) {
          .about-container {
            grid-template-columns: 1fr;
          }
          .about-image {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
