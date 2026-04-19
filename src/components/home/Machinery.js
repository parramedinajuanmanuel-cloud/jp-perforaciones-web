"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { machineryData } from '@/data/machinery-content';

export default function Machinery() {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...new Set(machineryData.map(item => item.category))];

  const filteredMachinery = filter === 'Todos' 
    ? machineryData 
    : machineryData.filter(item => item.category === filter);

  return (
    <section id="maquinaria" className="machinery-section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Infraestructura</span>
          <h2>Poder Operativo</h2>
          <p className="section-desc">Contamos con tecnología de vanguardia y maquinaria propia para garantizar la autonomía técnica en cada proyecto.</p>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="machinery-grid">
          {filteredMachinery.map(item => (
            <div key={item.id} className="machine-card">
              <div className="machine-visual">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
                <div className="machine-label">{item.category}</div>
              </div>
              <div className="machine-info">
                <h3>{item.name}</h3>
                <p className="machine-desc">{item.description}</p>
                
                <div className="specs-table">
                  {Object.entries(item.specs).map(([key, value]) => (
                    <div key={key} className="spec-row">
                      <span className="spec-key">{key}:</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="machine-features">
                  {item.features.slice(0, 2).map((f, i) => (
                    <span key={i} className="feature-pill">{f}</span>
                  ))}
                </div>

                <a 
                  href={item.pdfUrl} 
                  download={`Ficha_Tecnica_JP_${item.name.replace(/\s+/g, '_')}.txt`}
                  className="btn-outline download-btn"
                  style={{ textAlign: 'center', display: 'block', textDecoration: 'none' }}
                >
                  📄 Ficha Técnica (PDF)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .machinery-section {
          padding: var(--spacing-xl) 0;
          background-color: var(--color-bg-white);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-lg);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .section-desc {
          color: var(--color-text-muted);
          margin-top: 10px;
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: var(--spacing-xl);
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 8px 20px;
          border-radius: 20px;
          border: 1px solid var(--color-bg-light);
          background: white;
          color: var(--color-text-muted);
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .filter-btn.active {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .machinery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--spacing-lg);
        }

        .machine-card {
          border: 1px solid var(--color-bg-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .machine-card:hover {
          border-color: var(--color-secondary);
          transform: translateY(-5px);
        }

        .machine-visual {
          height: 200px;
          background-color: var(--color-bg-light);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .machine-label {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--color-secondary);
          color: white;
          padding: 2px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .visual-placeholder {
          font-family: var(--font-heading);
          color: var(--color-primary);
          font-weight: 800;
          opacity: 0.2;
          font-size: 1.5rem;
          text-align: center;
        }

        .machine-info {
          padding: var(--spacing-lg);
        }

        .machine-info h3 {
          color: var(--color-primary);
          margin-bottom: 8px;
          font-size: 1.4rem;
        }

        .machine-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: var(--spacing-md);
          line-height: 1.5;
        }

        .specs-table {
          margin-bottom: var(--spacing-md);
          border-top: 1px solid var(--color-bg-light);
          padding-top: 10px;
        }

        .spec-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          padding: 3px 0;
        }

        .spec-key {
          text-transform: capitalize;
          color: var(--color-text-muted);
        }

        .spec-value {
          font-weight: 700;
          color: var(--color-primary);
        }

        .machine-features {
          display: flex;
          gap: 6px;
          margin-bottom: var(--spacing-lg);
          flex-wrap: wrap;
        }

        .feature-pill {
          font-size: 0.7rem;
          background: #f0f7ff;
          color: var(--color-secondary);
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
        }

        .download-btn {
          width: 100%;
          font-size: 0.85rem;
          padding: 10px;
          border: 1px dashed var(--color-primary);
        }

        .download-btn:hover {
          background: var(--color-bg-light);
          border-style: solid;
        }

        @media (max-width: 768px) {
          .machinery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
