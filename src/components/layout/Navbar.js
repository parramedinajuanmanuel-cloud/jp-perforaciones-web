"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo Area */}
        <div className="nav-logo">
          <Link href="/" onClick={closeMobileMenu}>
            <img 
              src="/logo.png" 
              alt="JP Perforaciones Logo" 
              className="logo-img"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links desktop-only">
          <li><Link href="/">INICIO</Link></li>
          <li><Link href="#servicios">SERVICIOS</Link></li>
          <li><Link href="#nosotros">NOSOTROS</Link></li>
          <li><Link href="#proyectos">PROYECTOS</Link></li>
        </ul>

        {/* CTA Contacto (Desktop) */}
        <div className="nav-cta desktop-only">
          <Link href="#contacto" className="btn-primary">
            CONTACTO
          </Link>
        </div>

        {/* Hamburger Menu Toggle (Mobile Only) */}
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Menú principal"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            <li><Link href="/" onClick={closeMobileMenu}>INICIO</Link></li>
            <li><Link href="#servicios" onClick={closeMobileMenu}>SERVICIOS</Link></li>
            <li><Link href="#nosotros" onClick={closeMobileMenu}>NOSOTROS</Link></li>
            <li><Link href="#proyectos" onClick={closeMobileMenu}>PROYECTOS</Link></li>
            <li><Link href="#contacto" onClick={closeMobileMenu} className="mobile-contact-btn">CONTACTO</Link></li>
          </ul>
        </div>
      )}

      <style>{`
        .navbar {
          background-color: var(--color-bg-white);
          border-bottom: 1px solid var(--color-bg-light);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
        }
        
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
        }

        .logo-img {
          height: 140px;
          width: auto;
          object-fit: contain;
          margin-top: -40px;
          margin-bottom: -40px;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        .nav-links a {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--color-primary);
        }

        .nav-cta a {
          font-size: 0.9rem;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: 8px;
        }

        .mobile-menu {
          display: hidden;
        }

        /* ===== RESPONSIVE MOBILE ===== */
        @media (max-width: 968px) {
          .nav-container {
            height: 70px;
            padding: 0 1rem;
          }

          .logo-img {
            height: 100px;
            margin-top: -15px;
            margin-bottom: -15px;
          }

          .desktop-only {
            display: none !important;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .mobile-menu {
            display: block;
            background-color: var(--color-bg-white);
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            border-bottom: 3px solid var(--color-secondary);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s ease forwards;
          }

          .mobile-nav-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            padding: 1rem 0;
          }

          .mobile-nav-links li {
            border-bottom: 1px solid var(--color-bg-light);
          }

          .mobile-nav-links li:last-child {
            border-bottom: none;
          }

          .mobile-nav-links a {
            display: block;
            padding: 1rem 1.5rem;
            font-family: var(--font-heading);
            font-weight: 600;
            color: var(--color-primary);
            text-decoration: none;
          }
          
          .mobile-contact-btn {
            color: var(--color-secondary) !important;
            font-weight: 800 !important;
          }

          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </nav>
  );
}
