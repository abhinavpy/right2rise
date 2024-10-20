// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css'; // Optional: For any layout-specific styling

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
