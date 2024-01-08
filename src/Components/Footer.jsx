import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import "./Footer.css";
import { Container } from "react-bootstrap";
const socialMediaLinks = {
  instagram: () => window.open('https://www.instagram.com/', '_blank'),
  facebook: () => window.open('https://www.facebook.com/', '_blank'),
  linkedin: () => window.open('https://www.linkedin.com/in/othi-raja-45176b255/', '_blank'),
  github: () => window.open('https://github.com/Othi-Raja', '_blank'),
  phone: () => window.open('tel:+91 8825722455', '_blank'),
};

const Footer = () => {
  return (

    <footer style={{ backgroundColor: 'white', color: 'white', padding: '20px 0', textAlign: 'center' }}>
      <Container>
      <div>
        {/* Instagram */}
        <FaInstagram
          id='linkedHover'
          size={30}
          style={{ color: 'black', margin: '20px 20px', cursor: 'pointer' }}
          onClick={socialMediaLinks.instagram}
        />

        {/* Facebook */}
        <FaFacebook
          id='linkedHover'
          size={30}
          style={{ color: 'black', margin: '20px 30px', cursor: 'pointer' }}
          onClick={socialMediaLinks.facebook}
        />

        {/* LinkedIn */}
        <FaLinkedin
          id='linkedHover'
          size={30}
          style={{ color: 'black', margin: '20px 30px', cursor: 'pointer' }}
          onClick={socialMediaLinks.linkedin}
        />

        {/* GitHub */}
        <FaGithub
          id='linkedHover'
          size={30}
          style={{ color: 'black', margin: '20px 30px', cursor: 'pointer' }}
          onClick={socialMediaLinks.github}
        />

        {/* Phone */}
        <FaPhone
          id='linkedHover'
          size={30}
          style={{ color: 'black', margin: '20px 30px', cursor: 'pointer' }}
          onClick={socialMediaLinks.phone}
        />
      </div>

      {/* Copyright */}
      <p style={{ color: 'gray', margin: '10px 0', fontSize: '10px' }}>Copyright © 2023 Othiraja</p>
      </Container>
    </footer>
  );
};

export default Footer;
