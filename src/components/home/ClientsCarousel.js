import React from 'react';

const clients = [
  "Constructora Integral",
  "Consorcio Vial EC",
  "Edificios S.A.",
  "MetroEcuador",
  "Ingeniería Sísmica",
  "Obras Públicas",
  "Constructora Integral", // Duplicate to simulate infinite scroll visually
  "Consorcio Vial EC"
];

export default function ClientsCarousel() {
  return (
    <section id="clientes" className="clients-section">
      <div className="container">
        <h3 className="clients-title">Empresas que confían en nuestra precisión</h3>
      </div>
      
      <div className="carousel-container">
        <div className="carousel-track">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-placeholder">
              {client}
            </div>
          ))}
          {/* Duplicate track for seamless infinite scrolling */}
          {clients.map((client, index) => (
            <div key={`dup-${index}`} className="client-logo-placeholder">
              {client}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .clients-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-bg-white);
          overflow: hidden;
        }

        .clients-title {
          text-align: center;
          font-family: var(--font-heading);
          color: var(--color-text-muted);
          font-size: 1.2rem;
          margin-bottom: var(--spacing-lg);
          font-weight: 600;
        }

        .carousel-container {
          width: 100%;
          position: relative;
          display: flex;
          overflow: hidden;
          padding: var(--spacing-sm) 0;
        }

        /* Fading mask edges for smooth entrance/exit */
        .carousel-container::before,
        .carousel-container::after {
          content: "";
          position: absolute;
          top: 0;
          width: 150px;
          height: 100%;
          z-index: 2;
        }

        .carousel-container::before {
          left: 0;
          background: linear-gradient(to right, var(--color-bg-white) 0%, transparent 100%);
        }

        .carousel-container::after {
          right: 0;
          background: linear-gradient(to left, var(--color-bg-white) 0%, transparent 100%);
        }

        .carousel-track {
          display: flex;
          gap: 4rem;
          align-items: center;
          animation: scroll 30s linear infinite;
        }

        .client-logo-placeholder {
          flex-shrink: 0;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--color-bg-light);
          text-transform: uppercase;
          /* text stroke effect for cool empty logo placeholder */
          -webkit-text-stroke: 1px var(--color-text-muted);
          opacity: 0.5;
          transition: opacity 0.3s ease;
          padding: 0 2rem;
        }

        .client-logo-placeholder:hover {
          opacity: 1;
          color: var(--color-primary);
          -webkit-text-stroke: 0px;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
