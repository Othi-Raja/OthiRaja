import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import "./Footer.css";
import { Container, Col, Row } from "react-bootstrap";

const socialMediaLinks = {
  instagram: () => window.open('https://www.instagram.com/', '_blank'),
  facebook: () => window.open('https://www.facebook.com/', '_blank'),
  linkedin: () => window.open('https://www.linkedin.com/in/othi-raja-45176b255/', '_blank'),
  github: () => window.open('https://github.com/Othi-Raja', '_blank'),
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '5px 0',textAlign:'center'}}>
      <Container>
        <Row>
        <Col lg={6}>
          {/* Social Media Icons */}
          <div>
            <FaInstagram
              id='linkedHover'
              size={15}
              style={{ color: 'white', margin: '20px 20px', cursor: 'pointer' }}
              onClick={socialMediaLinks.instagram}
            />
            <FaFacebook
              id='linkedHover'
              size={15}
              style={{ color: 'white', margin: '20px 20px', cursor: 'pointer' }}
              onClick={socialMediaLinks.facebook}
            />
            <FaLinkedin
              id='linkedHover'
              size={15}
              style={{ color: 'white', margin: '20px 20px', cursor: 'pointer' }}
              onClick={socialMediaLinks.linkedin}
            />
            <FaGithub
              id='linkedHover'
              size={15}
              style={{ color: 'white ', margin: '20px 20px', cursor: 'pointer' }}
              onClick={socialMediaLinks.github}
            />
          </div>
        </Col>
        <Col lg={6}>
          {/* Copyright Text */}
          <p style={{ color: 'gray', margin: '10px 0', fontSize: '10px',paddingTop:'10px' }}>Copyright © 2023 Othiraja</p>
        </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
