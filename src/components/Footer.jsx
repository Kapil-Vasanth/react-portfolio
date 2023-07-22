import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Portfolio. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/kapil-balerao/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Kapil-Vasanth" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
