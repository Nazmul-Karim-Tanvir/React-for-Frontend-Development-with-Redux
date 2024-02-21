import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const NavbarComponent = () => {
  const navbarStyle = {
    background: '#4486F4',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  };

  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert('Logged out successfully');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <span className="text-light">Sea View Hotel</span>
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
                <Link className="nav-link text-white rounded m-1" to="/rooms">Rooms and Suits</Link>
              </li>
              <li className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link className="nav-link text-white rounded m-1" to="/contact">Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              {isLoggedIn ? (
                <li>
                  <button className="btn btn-danger text-white rounded m-1" onClick={handleLogout}>
                    Log Out
                  </button>
                </li>
              ) : (
                <li className={`nav-item ${location.pathname === '/register' ? 'active' : ''}`}>
                  <Link className="btn btn-success text-white rounded m-1" to="/register">Log In</Link>
                </li>
              )}
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarComponent;
