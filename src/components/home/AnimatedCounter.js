"use client";
import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { id: 1, label: "Años de Experiencia", target: 10, suffix: "" },
  { id: 2, label: "Proyectos Realizados", target: 83, suffix: "" },
  { id: 3, label: "Ingenieros Expertos", target: 6, suffix: "" }
];

export default function AnimatedCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="counter-section">
      <div className="container">
        <div className="counter-grid">
          {stats.map(stat => (
            <div key={stat.id} className="counter-item">
              <div className="counter-value">
                {isVisible ? <CountUp target={stat.target} /> : "0"}
                {stat.suffix}
              </div>
              <div className="counter-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .counter-section {
          background-color: var(--color-primary);
          padding: var(--spacing-xl) 0;
          color: var(--color-bg-white);
          position: relative;
        }

        .counter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-lg);
          text-align: center;
        }

        .counter-item {
          padding: var(--spacing-md);
        }

        .counter-value {
          font-family: var(--font-heading);
          font-size: 3rem;
          font-weight: 800;
          color: var(--color-bg-white);
          margin-bottom: var(--spacing-sm);
        }

        .counter-label {
          font-family: var(--font-body);
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-bg-light);
          opacity: 0.9;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      `}</style>
    </section>
  );
}

// Simple counter animation hook/component
function CountUp({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}
