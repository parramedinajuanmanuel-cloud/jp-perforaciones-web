import React from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    title: "Estudio de Suelos",
    slug: "estudio-de-suelos",
    icon: (
      <img src="/images/services/estudio-suelos.png" alt="Máquina de perforación para estudio de suelos" className="service-photo" />
    ),
    subtitle: "Exploración Analítica & Ensayos SPT",
    description: "Análisis geotécnico integral. Integramos perforaciones profundas rotativas y pruebas de penetración estándar (SPT) in-situ para garantizar la absoluta seguridad de su cimentación."
  },
  {
    id: 2,
    title: "Pilotaje",
    slug: "pilotaje",
    icon: (
      <img src="/images/services/pilotaje.png" alt="Máquina de pilotaje para cimentaciones profundas" className="service-photo" />
    ),
    subtitle: "Cimentaciones Profundas Estructurales",
    description: "Diseño y ejecución especializada de micropilotes y pilotes preexcavados. Soluciones geotécnicas definitivas para transferir cargas pesadas a estratos competentes."
  }
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Nuestras Especialidades</span>
          <h2>Servicios</h2>
          <div className="header-line"></div>
        </div>

        <div className="services-grid dynamic-layout">
          {services.map(service => (
            <div key={service.id} className="service-card dynamic-card">
              <div className="service-icon">{service.icon}</div>
              <div className="service-subtitle">{service.subtitle}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <Link href={`/servicios/${service.slug}`} className="service-link btn-dynamic">
                Explorar Servicio <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-bg-light);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .subtitle {
          color: var(--color-secondary);
          font-family: var(--font-heading);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.85rem;
          display: block;
          margin-bottom: var(--spacing-sm);
        }

        .section-header h2 {
          font-size: 2.5rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-md);
        }

        .header-line {
          width: 60px;
          height: 4px;
          background-color: var(--color-secondary);
          margin: 0 auto;
          border-radius: 2px;
        }

        .services-grid.dynamic-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        /* Dynamic Premium Cards */
        .dynamic-card {
          position: relative;
          background: linear-gradient(145deg, #ffffff, #f0f4fa);
          border: 1px solid rgba(27, 58, 107, 0.1);
          border-radius: var(--radius-lg);
          padding: 3.5rem 3rem;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 15px 35px rgba(27, 58, 107, 0.08);
          z-index: 1;
          display: flex;
          flex-direction: column;
        }

        .dynamic-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 6px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          transition: height 0.4s ease, opacity 0.4s ease;
          z-index: -1;
        }

        .dynamic-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 55px rgba(27, 58, 107, 0.18);
          border-color: rgba(69, 137, 245, 0.3);
        }

        .dynamic-card:hover::before {
          height: 100%;
          opacity: 0.04;
        }

        .service-icon {
          margin-bottom: var(--spacing-md);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .service-photo {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        
        .dynamic-card:hover .service-photo {
          transform: scale(1.05);
        }

        .service-subtitle {
          color: var(--color-secondary);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
        }

        .service-title {
          font-size: 2.2rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
          font-family: var(--font-heading);
          line-height: 1.2;
        }

        .service-desc {
          color: var(--color-text-muted);
          line-height: 1.7;
          margin-bottom: var(--spacing-xl);
          font-size: 1.05rem;
          flex-grow: 1;
        }

        .btn-dynamic {
          align-self: flex-start;
          background: var(--color-primary);
          color: white !important;
          padding: 12px 24px;
          border-radius: 50px;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(27, 58, 107, 0.2);
        }

        .btn-dynamic span {
          transition: transform 0.3s ease;
        }

        .dynamic-card:hover .btn-dynamic {
          background: var(--color-secondary);
          box-shadow: 0 8px 20px rgba(69, 137, 245, 0.3);
        }

        .dynamic-card:hover .btn-dynamic span {
          transform: translateX(5px);
        }

        @media (max-width: 968px) {
          .services-grid.dynamic-layout {
            grid-template-columns: 1fr;
          }
          .dynamic-card {
            padding: 2.5rem 2rem;
          }
        }
      `}</style>
    </section>
  );
}
