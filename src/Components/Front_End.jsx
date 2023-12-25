import React, {useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Front_end.css";
import { Col, Container, Row } from "react-bootstrap";
 const  FrontEnd  =()=> {
   useEffect(()=> {
    let link = document.querySelector('.codezila');
    link.addEventListener('click',function(){
      var url="https://othi-raja.github.io/codezilla.org/";
      window.open(url,'_blank');
    })
    let link2 = document.querySelector('.instaclone');
    link2.addEventListener('click',function(){
      var url="https://othi-raja.github.io/clone-instagram/";
      window.open(url,'_blank');
    })
   })
  
    return (
      <div>
        <Container className="figma_container">
          <h2 className="text-center py-4">Frontend Works</h2>
          <Row>
            <Col
              md={4}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              {/* card--1 */}
              <div className="FE_card codezila ">
                <div className="FE_card-img FE_card-img1 "></div>
                <h2 className="FE_figma-title">
                  Codezilla
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
            <Col
              md={4}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              {/* card--1 */}
              <div className="FE_card instaclone">
                <div className="FE_card-img FE_card-img2 "></div>
                <h2 className="FE_figma-title">
                Instagram-clone
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
            <Col
              md={4}
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-easing="linear"
            >
              {/* card--1 */}
              <div className="FE_card">
                <div className="FE_card-img FE_card-img3 "></div>
                <h2 className="FE_figma-title">
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
          </Row>
        </Container>
      </div>
    );
  }
export default FrontEnd;
