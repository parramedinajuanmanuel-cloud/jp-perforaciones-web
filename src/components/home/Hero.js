import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image Layer */}
      <div className="hero-bg">
        <Image 
          src="/hero-bg.png" 
          alt="Maquinaria de Geotecnia JP Perforaciones" 
          fill 
          priority
          className="object-cover"
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <h1 className="hero-title">
          Expertos en <span className="highlight">Geotecnia</span> y <span className="highlight">Pilotaje</span>
        </h1>
        <p className="hero-subtitle">
          Construyendo cimientos sólidos para los proyectos más exigentes del Ecuador. Soluciones de ingeniería avanzadas con maquinaria de alta precisión.
        </p>
        <div className="hero-actions">
          <Link href="#contacto" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Solicitar Cotización
          </Link>
          <Link href="#servicios" className="btn-secondary">
            Ver Servicios
          </Link>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          height: 85vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          color: var(--color-bg-white);
          overflow: hidden;
          background-color: var(--color-primary); /* Base color in case image fails */
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right, 
            rgba(27, 58, 107, 0.9) 0%, 
            rgba(27, 58, 107, 0.4) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 800px;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: var(--spacing-md);
          color: var(--color-bg-white);
          text-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .hero-title .highlight {
          color: var(--color-bg-light);
        }

        .hero-subtitle {
          font-family: var(--font-body);
          font-size: 1.25rem;
          line-height: 1.6;
          margin-bottom: var(--spacing-lg);
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          max-width: 650px;
        }

        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          align-items: center;
        }

        .btn-secondary {
          padding: 1rem 2.5rem;
          font-family: var(--font-heading);
          font-weight: 600;
          color: var(--color-bg-white);
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          background-color: rgba(255, 255, 255, 0.2);
          border-color: var(--color-bg-white);
        }

        @media (max-width: 768px) {
          .hero-overlay {
            background: rgba(27, 58, 107, 0.8);
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions > * {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

