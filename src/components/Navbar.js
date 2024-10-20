// src/components/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS
import logo from '../assets/right2rise-logo.jpg'; // Use SVG for scalability; replace with .jpg/.png if necessary

const Navbar = () => {
  const location = useLocation();

  return (
    <header className="navbar-header">
      <div className="navbar-logo-container">
        <img src={logo} alt="Right2Rise Logo" className="navbar-logo" />
      </div>
      <nav className="navbar-nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
          About
        </Link>
        <Link to="/chat" className={`nav-link ${location.pathname === '/chat' ? 'active' : ''}`}>
          Chat
        </Link>
        <Link
          to="/incident-report"
          className={`nav-link ${location.pathname === '/incident-report' ? 'active' : ''}`}
        >
          Report Incident
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
