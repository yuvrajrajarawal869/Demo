import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Manage and Grow Your EV Charging Business</h1>
          <p>We are proud to present our state-of-the-art Electric Vehicle (EV) charging network, driven by a cutting-edge cloud-based Software as a Service (SaaS) platform. We bring you a holistic solution that embraces innovation, scalability, and environmental responsibility. Say goodbye to complex coding and hello to a seamless future of clean mobility.</p>
          <div className="cta-buttons">
            <a href="#learn-more" className="cta-button">Learn More</a>
            <a href="#get-started" className="cta-button">Get Started</a>
          </div>
          <div className="cta-buttons">
          <a href="#overview" className="cta-button">Overview</a>
            <a href="#features" className="cta-button">Features</a>
            <a href="#statistics" className="cta-button">Statistics</a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://blog.webhopers.com/wp-content/uploads/2022/06/Top-IT-Companies-in-Bhubaneswar.jpg" alt="EV Charging" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
