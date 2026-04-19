import { servicesData } from "@/data/services-content";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="service-detail-page">
      {/* Minimalist Hero */}
      <header className="service-hero">
        <div className="container">
          <Link href="/#servicios" className="back-link">← Volver a servicios</Link>
          <span className="service-category">Servicio Técnico Especializado</span>
          <h1>{service.title}</h1>
          <p className="service-subtitle">{service.subtitle}</p>
        </div>
      </header>

      <section className="service-body">
        <div className="container service-grid">
          {/* Main Content */}
          <div className="main-content">
            <section className="description-block">
              <h2>Descripción del Servicio</h2>
              <p>{service.detailedDescription}</p>
            </section>

            {service.subServices && service.subServices.length > 0 && (
              <section className="subservices-block">
                <h2>Componentes del Servicio</h2>
                <div className="subservices-grid">
                  {service.subServices.map((sub, index) => (
                    <div key={index} className="subservice-card premium-card">
                      <h3>{sub.title}</h3>
                      <p>{sub.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section className="methodology-block">
              <h2>Metodología de Trabajo</h2>
              <ul className="methodology-list">
                {service.methodology.map((step, index) => (
                  <li key={index}>
                    <span className="step-num">{index + 1}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar / Specs */}
          <aside className="sidebar">
            <div className="spec-card">
              <h3>Especificaciones Técnicas</h3>
              <p>{service.specs}</p>
            </div>

            <div className="machinery-card">
              <h3>Equipos Clave</h3>
              <ul>
                {service.machinery.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="cta-card">
              <h3>¿Necesita una cotización?</h3>
              <p>Nuestro equipo técnico evaluará su requerimiento en menos de 24 horas.</p>
              <Link href="/#contacto" className="btn-primary">Solicitar Información</Link>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .service-detail-page {
          background-color: var(--color-bg-white);
          min-height: 100vh;
          padding-bottom: var(--spacing-xl);
        }

        .service-hero {
          background-color: var(--color-primary);
          color: white;
          padding: 100px 0 60px 0;
          text-align: left;
        }

        .back-link {
          color: var(--color-bg-light);
          font-size: 0.9rem;
          display: block;
          margin-bottom: var(--spacing-md);
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .back-link:hover {
          opacity: 1;
        }

        .service-category {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          display: block;
          margin-bottom: 8px;
        }

        .service-hero h1 {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          color: white;
          margin-bottom: 12px;
        }

        .service-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          max-width: 600px;
        }

        .service-body {
          padding-top: var(--spacing-xl);
        }

        .service-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: var(--spacing-xl);
        }

        .main-content h2 {
          font-size: 1.8rem;
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }

        .description-block {
          margin-bottom: var(--spacing-xl);
        }

        .description-block p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-text-main);
          opacity: 0.9;
          text-align: justify;
        }

        .subservices-block {
          margin-bottom: var(--spacing-xl);
        }

        .subservices-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          margin-top: var(--spacing-md);
        }

        .premium-card {
          background: linear-gradient(135deg, var(--color-bg-light) 0%, rgba(232, 237, 242, 0.4) 100%);
          border-radius: var(--radius-lg);
          padding: 3rem 2.5rem;
          box-shadow: 0 10px 40px rgba(27, 58, 107, 0.04);
          position: relative;
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(27, 58, 107, 0.05);
          z-index: 1;
        }

        .premium-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 5px;
          background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
          border-top-left-radius: var(--radius-lg);
          border-top-right-radius: var(--radius-lg);
        }

        .premium-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(27, 58, 107, 0.12);
          border-color: rgba(69, 137, 245, 0.2);
        }

        .premium-card h3 {
          font-size: 1.4rem;
          color: var(--color-primary);
          margin-bottom: 1rem;
          font-family: var(--font-heading);
          line-height: 1.3;
        }

        .premium-card p {
          font-size: 1.05rem;
          color: var(--color-text-muted);
          line-height: 1.8;
          opacity: 0.9;
          text-align: justify;
        }

        .methodology-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .methodology-list li {
          display: flex;
          gap: var(--spacing-md);
          align-items: flex-start;
          padding: var(--spacing-md);
          background-color: var(--color-bg-light);
          border-radius: var(--radius-sm);
        }

        .step-num {
          background-color: var(--color-primary);
          color: white;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-weight: 700;
          font-size: 0.8rem;
        }

        /* Sidebar items */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .spec-card, .machinery-card, .cta-card {
          padding: var(--spacing-lg);
          border: 1px solid var(--color-bg-light);
          border-radius: var(--radius-md);
        }

        .sidebar h3 {
          font-size: 1.1rem;
          color: var(--color-primary);
          margin-bottom: var(--spacing-sm);
          font-family: var(--font-heading);
        }

        .spec-card p, .machinery-card ul {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        
        .spec-card p {
          text-align: justify;
        }

        .machinery-card ul {
          list-style: square;
          margin-left: 18px;
        }

        .cta-card {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          border: none;
          color: white;
        }

        .cta-card h3 { color: white; }
        .cta-card p { font-size: 0.9rem; margin-bottom: var(--spacing-md); opacity: 0.9; }

        .cta-card .btn-primary {
          background-color: white;
          color: var(--color-primary);
          display: block;
          text-align: center;
          width: 100%;
        }

        @media (max-width: 968px) {
          .service-grid {
            grid-template-columns: 1fr;
          }
          .service-hero h1 {
            font-size: 2.5rem;
          }
          .subservices-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
