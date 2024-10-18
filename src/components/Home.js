import React from 'react';
import './Home.css';
import logo from '../assets/right2rise-logo.jpg'; // Assuming you have your logo saved in the assets folder

const Home = () => {
  return (
    <div className="landing-page">
      {/* Logo Section */}
      <header className="logo-header">
        <img src={logo} alt="Right2Rise Logo" className="logo" />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Right2Rise</h1>
          <p>Your legal and economic empowerment starts here.</p>
          <a href="/signup" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h2>Legal Information</h2>
          <p>Access reliable information about your rights and workplace policies.</p>
        </div>
        <div className="feature">
          <h2>Financial Literacy</h2>
          <p>Improve your knowledge on managing finances and planning for the future.</p>
        </div>
        <div className="feature">
          <h2>Entrepreneurship</h2>
          <p>Learn how to start your own business with the best resources available.</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Right2Rise Today</h2>
        <p>Empower yourself with knowledge and opportunities.</p>
        <a href="/signup" className="cta-button">Join Now</a>
      </section>
    </div>
  );
};

export default Home;
