import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px 0', textAlign: 'center' }}>
      <div>
        {/* Instagram */}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} style={{ color: 'white', margin: '0 10px' }} />
        </a>

        {/* Facebook */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} style={{ color: 'white', margin: '0 10px' }} />
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/othi-raja-45176b255/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} style={{ color: 'white', margin: '0 10px' }} />
        </a>

        {/* GitHub */}
        <a href="https://github.com/Othi-Raja" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} style={{ color: 'white', margin: '0 10px' }} />
        </a>
      </div>

      {/* Copyright */}
      <p style={{ color: 'gray', margin: '10px 0' }}>Copyright © 2023 Othiraja</p>
    </footer>
  );
};

export default Footer;
