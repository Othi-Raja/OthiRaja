import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
// import { Audio } from 'react-loader-spinner'
import { BarLoader } from "react-spinners";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Figma from "./Figma";
import FrontEnd from "./Front_End";
import Spline from '@splinetool/react-spline';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

const About = () => {
  const [loadingSpline, setLoadingSpline] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const downloadResume = () => {
    const fileUrl = "../icon/othiraja.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;

    link.download = "../icon/othiraja.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };
  // const [loadingResume, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setLoading(false);
    // });
    setTimeout(() => {
      setLoadingSpline(false);
       
    }, 5000);

    AOS.init();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Container>
          <div className="about">
            <h4 data-aos="fade-up"> About</h4>
            <Row></Row>
            <h3 data-aos="fade-up">
              UI<span className="ab-title">/</span>Web Developer
            </h3>
            <Row>
              <Col sm={6}>
                <p className="ab-cont" data-aos="fade-up" style={{textShadow: 'black 2px'}}>
                  Passionate UI and web developer with a keen eye for elegant
                  design and a knack for crafting seamless, user-centric digital
                  experiences
                </p>
                <button
                  className="button-50"
                  onClick={openPopup}
                  data-aos="fade-up"
                >
                  Resume
                </button>
              </Col>
              <Col sm={6}>
                <div className="skill-btn">
                  <button
                    className="button-50"
                    data-aos="zoom-in"
                    data-aos-duration="22000"
                    data-aos-easing="linear"
                  >
                    Python
                  </button>
                  <Link to="/Figma">
                    <button
                      className="button-50"
                      data-aos="zoom-in"
                      data-aos-duration="26000"
                    >
                      Figma
                    </button>
                  </Link>

                  <Link to="/FrontEndwork">
                    <button
                      className="button-50"
                      data-aos="zoom-in"
                      data-aos-duration="28000"
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
                    allowFullScreen
                    allow="fullscreen"
                  />
                </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closePopup}>
                Close
              </Button>
              <Button variant="primary" onClick={downloadResume}download>
             
                Download Resume
              </Button>
            </Modal.Footer>
          </Modal>
        
          {loadingSpline ? (
            <Box sx={{ width:'100%' }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
            </Box>
          ) : (
            <Spline
              className="spline-loader"
              id="Spline"
              scene="https://prod.spline.design/kQngrCjR7ZUwxw38/scene.splinecode"
              style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 0 40px rgba(73, 73, 73, 0.5)'}}/>
          )}
          
        </Container>
      </BrowserRouter>
    </div>
  );
};
export default About;
