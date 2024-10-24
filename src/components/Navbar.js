import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/right2rise-logo.svg'; // SVG for scalability
import { AuthContext } from '../context/AuthContext'; // Import AuthContext

const Navbar = () => {
  const location = useLocation();
  const { authToken, user } = useContext(AuthContext);

  return (
    <header className="navbar-header">
      <div className="navbar-logo-container">
        <img src={logo} alt="Right2Rise Logo" className="navbar-logo" />
      </div>
      <nav className="navbar-nav">
        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        {authToken && user && (
          <>
            <span className="user-info">Hello, {user.name}</span>
            <Link
              to="/dashboard"
              className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
            >
              Dashboard
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
            <Link
              to="/resource-locator"
              className={`nav-link ${location.pathname === '/resource-locator' ? 'active' : ''}`}
            >
              Resource Locator
            </Link>
            {/* Logout Link */}
            <Link to="/logout" className="nav-link logout-link">
              Logout
            </Link>
          </>
        )}
        {!authToken && (
          <Link
            to="/login"
            className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
          >
            Login
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
