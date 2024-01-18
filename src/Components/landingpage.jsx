import AOS from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // You can create this CSS file for styling
import { Player } from "@lottiefiles/react-lottie-player";
const LandingPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Container id="home" className="home">
        <Row style={{ marginTop: 20 }}>
          <Col
            sm={6}
            className="Home-font-bg"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
          >
            <div className="Home-font">
              <section>
                <span className="am">AM</span>
                <span className="namee"> Othi Raja</span>
                <br /> a Creative web designer with a passion for crafting
                innovative and user-friendly digital experiences.
              </section>
              <Col>
                {/* <Button className='explore-btn'>Explore</Button> */}
              </Col>
            </div>
          </Col>
          <Col sm={6} data-aos="fade-in" data-aos-duration="1100">
            {/* <video
            src="https://cdn.sanity.io/files/599r6htc/localized/ab4fa4eb170518f551d82cad01557e91952840a1.mp4"
            autoPlay
            playsInline
            muted
            loop
            width="100%"
            height="auto"
            className="css-0"
            style={{ borderRadius: '20px', border: 'none' }}
          ></video> */}
            <Player
              className="css-0"
              autoplay
              loop
              controls={false}
              src="https://lottie.host/10d2016f-58fb-4b7c-a445-0a36f8f5bb9e/xK3hkVWbft.json"
              style={{ height: "100%", width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LandingPage;
