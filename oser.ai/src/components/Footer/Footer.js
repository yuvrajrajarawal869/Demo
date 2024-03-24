import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact">
          <h3>Contact Us</h3>
          <p>123 Main Street, City, Country</p>
          <p>+1 123-456-7890</p>
          <p>info@example.com</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon facebook"></a>
            <a href="#" className="icon twitter"></a>
            <a href="#" className="icon instagram"></a>
          </div>
        </div>
        <div className="newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-links">
      <a href="#">About</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">FAQs</a>
      </div>
      <div>
        <p>Copyright © 2023 All rights reserved - Fortitude Mobility Pvt Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
