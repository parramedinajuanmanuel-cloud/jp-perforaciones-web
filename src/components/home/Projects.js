import React from 'react';

import { projectList } from '@/data/projects-content';

export default function Projects() {
  return (
    <section id="proyectos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Portafolio</span>
          <h2>Proyectos Destacados</h2>
          <p className="section-desc">Poniendo a prueba nuestra capacidad técnica en los desafíos más grandes del país.</p>
        </div>

        <div className="projects-grid">
          {projectList.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-tags">
                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-location">📍 {project.location}</p>
                </div>
              </div>
              <div className="project-info">
                <p className="project-scope"><strong>Alcance:</strong> {project.scope}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-bg-light);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-header .subtitle {
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

        .section-desc {
          color: var(--color-text-muted);
          font-size: 1rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--spacing-lg);
        }

        .project-card {
          background: var(--color-bg-white);
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-image-container {
          height: 250px;
          position: relative;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          background: linear-gradient(to top, rgba(27, 58, 107, 0.9), transparent);
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: var(--spacing-md);
          color: white;
        }

        .project-tags {
          display: flex;
          gap: 6px;
          margin-bottom: 8px;
        }

        .tag {
          background: var(--color-secondary);
          color: white;
          font-size: 0.7rem;
          padding: 2px 8px;
          border-radius: 10px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .project-overlay h3 {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 4px;
        }

        .project-location {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .project-info {
          padding: var(--spacing-md);
        }

        .project-scope {
          font-size: 0.9rem;
          color: var(--color-text-main);
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
