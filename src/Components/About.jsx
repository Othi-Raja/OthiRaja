import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { FaReact, FaPython, FaBootstrap, FaFigma, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
// import { Audio } from 'react-loader-spinner'
// import { BarLoader } from "react-spinners";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Figma from "./Figma";
import FrontEnd from "./Front_End";
import Marquee from "react-fast-marquee";
// import Spline from '@splinetool/react-spline';
// import Skeleton from '@mui/material/Skeleton';
// import Box from '@mui/material/Box';
import Python from "./Python";
const About = () => {
  // const [loadingSpline, setLoadingSpline] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const openPopup = () => {
    setShowPopup(true);
  };
  const closePopup = () => {
    setShowPopup(false);
  };
  //   const downloadResume = () => {
  //     const pdfUrl = "Resume-othiraja.png";
  //     const link = document.createElement("a");
  //     link.href = pdfUrl;
  //     link.download = "Resume-othiraja.png"; // specify the filename
  //     link.rel = "noopener noreferrer"; // set rel attribute for security
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  // };
  // const [loadingResume, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // });
    // setTimeout(() => {
    //   setLoadingSpline(false);
    // }, 3000);
    AOS.init();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Container className="About" >
          <div className="about">
            <h4 data-aos="fade-up"> About</h4>
            <Row></Row>
            <h3 data-aos="fade-up">
              UI<span className="ab-title">/</span>Web Developer
            </h3>
            <Row>
              <Col sm={6}>
                <p className="ab-cont" data-aos="fade-up" style={{ textShadow: 'black 2px' }}>
                  Passionate UI and web developer with a keen eye for elegant
                  design and a knack for crafting seamless, user-centric digital
                  experiences
                </p>
                <button
                  className="button-56"
                  onClick={openPopup}
                  data-aos="fade-up"
                >
                  Resume
                </button>
              </Col>
              <Col sm={6}>
                <div className="skill-btn">
                  <Link to="/Python">
                    <button
                      className="button-50 gap"
                      data-aos="zoom-in"
                      data-aos-easing="linear"
                    >
                      Python
                    </button>
                  </Link>
                  <Link to="/Figma">
                    <button
                      className="button-50 gap"
                      data-aos="zoom-in"
                    >
                      Figma
                    </button>
                  </Link>
                  <Link to="/FrontEndwork">
                    <button
                      className="button-50 gap"
                      data-aos="zoom-in"
                    >
                      Front-End
                    </button>
                  </Link>
                  {/* <button
                    className="button-50 button-ex"
                    data-aos="zoom-in"
                    data-aos-duration="2900"
                  >
                    Excel
                  </button> */}
                </div>
              </Col>
            </Row>
            <Routes>
              <Route path="/Figma" element={<Figma />} />
              <Route path="/FrontEndwork" element={<FrontEnd />} />
              <Route path="/Python" element={<Python />} />
            </Routes>
          </div>
          <Modal show={showPopup} onHide={closePopup}>
            <Modal.Header closeButton>
              <Modal.Title> Resume</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "129.4118%",
                  paddingBottom: 0,
                  boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
                  marginTop: "1.6em",
                  marginBottom: "0.9em",
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform",
                }}
              >
                <iframe
                  title="UniqueTitleForIframe"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  src="https://www.canva.com/design/DAF0cDxrFUo/view?embed"
                  allow="fullscreen"
                />
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closePopup}>
                Close
              </Button>
              <a href="./Resume-othiraja.png" download="./Resume-othiraja.png">
                <Button variant="primary">
                  Download Resume
                </Button>
              </a>
            </Modal.Footer>
          </Modal>
          {/* 
          {loadingSpline ? (
            <Box sx={{ width: '100%', marginBottom: '30px' }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          ) : (
            <Spline
              className="spline-loader"
              id="Spline"
              scene="https://prod.spline.design/kQngrCjR7ZUwxw38/scene.splinecode"
              style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 20px rgba(73, 73, 73, 0.2)', marginBottom: '60px', backgroundColor: '#BED4D7' }} />
          )} */}
        </Container>
        <Row>
          <Marquee className="marquee" pauseOnHover pauseOnClick autoFill speed={10}>
            <span className="marqueeElement"><FaPython style={{ fontSize: '30px' }}></FaPython>&nbsp;Python</span>
            <span className="marqueeElement"><FaBootstrap></FaBootstrap>&nbsp;Bootstrap</span>
            <span className="marqueeElement"><FaFigma></FaFigma>&nbsp;Figma</span>
            <span className="marqueeElement"><FaNodeJs></FaNodeJs>&nbsp;Node.js</span>
            <span className="marqueeElement"> <FaReact></FaReact>&nbsp;React</span>
            <span className="marqueeElement"><FaHtml5></FaHtml5>&nbsp;HTML</span>
            <span className="marqueeElement"><FaCss3></FaCss3>&nbsp;CSS</span>
            <span className="marqueeElement"><FaJs></FaJs>&nbsp;JavaScript</span>
            <span className="marqueeElement">Spline 3D</span>
            <span className="marqueeElement">Firebase</span>
            <span className="marqueeElement">API</span>
            <span className="marqueeElement">API Testing</span>
          </Marquee>
        </Row>
      </BrowserRouter>
    </div>
  );
};
export default About;
