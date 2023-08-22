import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
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
          <li className="navbar-link" onClick={() => scrollToSection('about')}>About</li>
          <li className="navbar-link" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="navbar-link" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="navbar-link" onClick={() => scrollToSection('workexperience')}>Work</li>
          <li className="navbar-link" onClick={() => scrollToSection('education')}>Education</li>
          <li className="navbar-link" onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
