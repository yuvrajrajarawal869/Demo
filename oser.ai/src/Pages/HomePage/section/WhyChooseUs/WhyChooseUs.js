import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us-content">
        <div className="content-left">
          <h2 className="section-heading">Why Choose Our EV Charging Network</h2>
          <p className="section-subheading">
            We're not just another EV charging network – we're your partner in driving change, innovation, and sustainability. Discover why choosing our EV charging network is a smart decision that goes beyond simply plugging in.
          </p>
          <div className="cta-buttons">
            <a href="#learn-more" className="cta-button">Learn More</a>
            <a href="#get-started" className="cta-button">Get Started</a>
          </div>
          <div className="benefits">
            <div className="benefit">
              <h3>Scalability</h3>
              <p>Expand your charging network effortlessly with our scalable SaaS platform.</p>
              <div className="benefit-icons">
                <span className="icon">🚀</span>
                <span className="icon">🌍</span>
                <span className="icon">🎨</span>
              </div>
            </div>
            <div className="benefit">
              <h3>Global Reach</h3>
              <p>Enable charging services around the world using our cloud infrastructure.</p>
              <div className="benefit-icons">
                <span className="icon">🚀</span>
                <span className="icon">🌍</span>
                <span className="icon">🎨</span>
              </div>
            </div>
            <div className="benefit">
              <h3>No Coding Required</h3>
              <p>Utilize our user-friendly interface with no coding knowledge necessary.</p>
              <div className="benefit-icons">
                <span className="icon">🚀</span>
                <span className="icon">🌍</span>
                <span className="icon">🎨</span>
              </div>
            </div>
          </div>
        </div>
        <div className="content-right">
          <img src="https://www.manufacturingtodayindia.com/cloud/2023/03/30/WoLUgzqc-electric-charging-station-with-many-electric-royalty-free-image-16448750..._1920x1080-1200x675.jpg" alt="Image" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
