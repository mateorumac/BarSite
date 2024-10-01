import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 Mateo Rumac. All Rights Reserved.</p>
      <div className="iconContainer">
        <a 
          href="https://www.linkedin.com/in/mateo-rumac-170a0b304/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-icon"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a 
          href="https://github.com/mateorumac" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-icon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a 
          href="https://www.instagram.com/rooksoni/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
