import "bootstrap/dist/css/bootstrap.min.css";
import "./Figma.css";
import "w3-css";
import React, { useEffect } from "react";
import AOS from "aos";
import { Col, Container, Row } from "react-bootstrap";
import anime from 'animejs';
const Figma = () => {
  useEffect(() => {
    var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });
    AOS.init();
  }, []);
  return (
    <div>
      <Container className="figma_container">
        <h2 data-aos="" className="text-center py-4 ml12">My Designs in Figma</h2>
        <Row>
          <Col
            md={4}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="linear"
          >
            <div className="card">
              <div className="card-img card-img1 "></div>
              <h2 className="figma-title">
                Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                </svg>
              </h2>
            </div>
          </Col>
          <Col md={4}  data-aos="fade-up"
              data-aos-delay="600"
              data-aos-easing="linear">
            <div className="card">
              <div className="card-img card-img2"></div>
              <h2 className="figma-title">
                Login Page
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-link-45deg"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                </svg>
              </h2>
            </div>
          </Col>
          <Col md={4}  data-aos="fade-up"  data-aos-delay="800">
            <div className="card">
              <div className="card-img "></div>
              <h2 className="figma-title">Portfolio</h2>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Figma;
