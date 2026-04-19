import React from 'react';

export default function Location() {
  return (
    <section className="location-section">
      <div className="container">
        <div className="location-wrapper">
          <div className="map-container">
            {/* Standard Google Maps Embed for Ecuador (Generic location for now) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0564551390467!2d-79.8973752!3d-2.1407222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d13ca893b0001%3A0xc48641a27a34e8!2sAlborada%2012%2C%20Guayaquil!5e0!3m2!1ses-419!2sec!4v1712610000000!5m2!1ses-419!2sec" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: 'var(--radius-md)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="location-details">
            <h3 className="footer-heading">Nuestra Oficina Central</h3>
            <p>Ecuador - Guayaquil, Alborada 12</p>
            <p><strong>Horarios de Atención:</strong></p>
            <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>

      <style>{`
        .location-section {
          padding-bottom: var(--spacing-xl);
          background-color: var(--color-bg-white);
        }

        .location-wrapper {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .map-container {
          width: 100%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border-radius: var(--radius-md);
          overflow: hidden;
        }

        .location-details {
          text-align: center;
          padding: var(--spacing-md);
        }

        .location-details h3 {
          margin-bottom: var(--spacing-sm);
          color: var(--color-primary);
        }

        .location-details p {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 4px;
        }

      `}</style>
    </section>
  );
}
