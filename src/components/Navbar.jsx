import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Kaps</div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-links">
          <li><div className="navbar-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div></li>
          <li className="navbar-link">Home</li>
          <li className="navbar-link">About</li>
          <li className="navbar-link">Services</li>
          <li className="navbar-link">Portfolio</li>
          <li className="navbar-link">Contact</li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
