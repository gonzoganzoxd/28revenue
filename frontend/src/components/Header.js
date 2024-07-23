import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/revenue.jpg" alt="Logo" />
      </div>
      <nav className="nav">
        <Link to="/about">Acerca de nosotros</Link>
        <div className="dropdown">
          <button id="serv">Servicios</button>
          <div className="dropdown-content">
            <a href="/con_int.html">Contabilidad Integral</a>
            <a href="/consul.html">Consultoría especializada</a>
            <a href="/auditoria.html">Auditoría financiera</a>
          </div>
        </div>
        <a href="/publications.html">Publicaciones</a>
      </nav>
      <div className="contact">
        <span className="tel">📞 771 200 3950</span>
        {}
        <a href="/sign_up.html" className="register">Ayuda?</a>
      </div>
    </header>
  );
};

export default Header;
