// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Right2Rise. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
