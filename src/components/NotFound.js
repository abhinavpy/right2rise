import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Import the corresponding CSS
import { FaExclamationTriangle } from 'react-icons/fa'; // Optional: Icon for visual appeal

const NotFound = () => {
  return (
    <div className="notfound-container">
      <FaExclamationTriangle className="notfound-icon" />
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="cta-button">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
