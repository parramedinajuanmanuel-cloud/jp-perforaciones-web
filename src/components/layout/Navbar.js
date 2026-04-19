import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Logo Area */}
        <div className="nav-logo">
          <Link href="/">
            {/* Si ya has guardado la imagen en tu carpeta public/images, asegúrate de que el nombre coincida, por ejemplo /logo.png */}
            <img 
              src="/logo.png" 
              alt="JP Perforaciones Logo" 
              style={{ 
                height: '140px', 
                width: 'auto', 
                objectFit: 'contain', 
                marginTop: '-40px', 
                marginBottom: '-40px',
                display: 'block'
              }} 
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><Link href="/">INICIO</Link></li>
          <li><Link href="#servicios">SERVICIOS</Link></li>
          <li><Link href="#nosotros">NOSOTROS</Link></li>
          <li><Link href="#proyectos">PROYECTOS</Link></li>
        </ul>

        {/* CTA Contacto */}
        <div className="nav-cta">
          <Link href="#contacto" className="btn-primary">
            CONTACTO
          </Link>
        </div>
      </div>

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
      `}</style>
    </nav>
  );
}
