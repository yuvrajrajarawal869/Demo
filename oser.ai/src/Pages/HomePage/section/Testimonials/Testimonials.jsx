// Testimonials.jsx
import React from 'react';
import './Testimonials.css'; // You can create a CSS file for styling

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>John Doe</p>
        <p>The platform has transformed my charging business and increased my revenue significantly.</p>
        <p>I highly recommend the software to anyone looking to streamline their EV charging operations.</p>
      </div>
      <div className="testimonial">
        <p>Jane Smith</p>
        <p>The platform has helped me manage my EV charging stations effectively.</p>
        <p>It's user-friendly and has improved the overall customer experience.</p>
      </div>
      <div className="read-more">
        <p>Read testimonials from satisfied EV charging business owners.</p>
      </div>
      <div className="emoji">
        <span role="img" aria-label="Thumbs Up">
          👍
        </span>
        <span role="img" aria-label="Star">
          🌟
        </span>
        <span role="img" aria-label="Thumbs Up">
          👍
        </span>
        <span role="img" aria-label="Star">
          🌟
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
