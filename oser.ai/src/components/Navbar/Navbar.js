import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://png.pngtree.com/templates/sm/20180611/sm_5b1edb6d03c39.jpg" alt="OSER.AI Logo" />
        <span>OSER.AI</span>
      </div>
      <div className="navbar-right">
        <ul className="nav-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Product and Service</Link></li>
          <li><Link to="/clients">Clients</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/supports">Supports</Link></li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search and press Enter" />
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

