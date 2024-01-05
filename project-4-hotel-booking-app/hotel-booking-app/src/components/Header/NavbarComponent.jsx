import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarComponent = () => {
  const navbarStyle = {
    background: 'linear-gradient(to right, #9d00ff, #00b7ff)',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };

  const location = useLocation();

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <span className="text-light">Sea Pearl Hotel</span>
          </Link>

          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link text-white rounded m-1" to="/">Home</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link className="nav-link text-white rounded m-1" to="/about">About</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/rooms' ? 'active' : ''}`}>
                <Link className="nav-link text-white rounded m-1" to="/rooms">Rooms</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link className="nav-link text-white rounded m-1" to="/contact">Contact</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
