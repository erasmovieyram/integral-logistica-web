import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Integral Logística</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">Quienes Somos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/services">Servicios</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Iniciar Sesión</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;