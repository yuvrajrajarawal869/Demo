// ProductPage.js
import React from 'react';
import './ProductsPage.css'; // Import your CSS file

const ProductPage = () => {
  return (
    <div className="products-and-services">
      <h2>Products and Services</h2>
      <p>Cloud-Powered EV Charging Solutions for a Sustainable Tomorrow</p>
      <p>
        At Oser.ai, we are proud to present our state-of-the-art Electric Vehicle (EV) charging network, driven by a cutting-edge cloud-based Software as a Service (SaaS) platform. We bring you a holistic solution that embraces innovation, scalability, and environmental responsibility. Say goodbye to complex coding and hello to a seamless future of clean mobility.
      </p>
      {/* ... (Rest of the content) */}
      <button className="cta-button">Contact Us</button>
    </div>
  );
};

export default ProductPage;
