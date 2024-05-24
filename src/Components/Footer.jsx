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
const currentYear = new Date().getFullYear();
// console.log(currentYear);
const Footer = () => {
  return (
    <div className='yellow-bg'>
      <footer style={{ backgroundColor: '#183153', color: 'white', padding: '5px 0', textAlign: 'center' }}>
        <Container>
          <Row>
            <Col lg={4}>
              <div className='footer-logo'>
                Ôr
              </div>
            </Col >
            <Col lg={4}>
              {/* Social Media Icons */}
              <div>
                <FaInstagram
                  id='link-Hover'
                  size={25}
                  onClick={socialMediaLinks.instagram}
                />
                <FaFacebook
                  id='link-Hover'
                  size={25}
                  onClick={socialMediaLinks.facebook}
                />
                <FaLinkedin
                  id='link-Hover'
                  size={25}
                  onClick={socialMediaLinks.linkedin}
                />
                <FaGithub
                  id='link-Hover'
                  size={25}
                  onClick={socialMediaLinks.github}
                />
              </div>
            </Col>
            <Col lg={4}>
              {/* Copyright Text */}
              <p className='copyright'>Copyright © {currentYear} Othi Raja</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};
export default Footer;
