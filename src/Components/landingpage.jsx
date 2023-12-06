import React, { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Col, Row, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'; // You can create this CSS file for styling
 
// import * as Icon from 'react-bootstrap-icons';

import { BarLoader } from 'react-spinners';
import { Player } from '@lottiefiles/react-lottie-player';
const LandingPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const downloadResume = () => {
    // Replace the URL with the actual URL of your resume file
    // const resumeUrl = '../icon/othiraja.pdf';
    // window.open(resumeUrl, '_blank');
     // Replace 'your_file_url.pdf' with the actual URL of your file
     const fileUrl = '../icon/othiraja.pdf';

     // Create a link element
     const link = document.createElement('a');
     link.href = fileUrl;
 
     // Set the download attribute with the desired file name
     link.download = '../icon/othiraja.pdf';
 
     // Append the link to the document
     document.body.appendChild(link);
 
     // Trigger the click event to start the download
     link.click();
 
     // Remove the link from the document
     document.body.removeChild(link);
   };
   const [loadingResume, setLoading] = useState(true);
   useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false); // Set to false after the delay
    }, 8);

    AOS.init();
  }, []);

//  useEffect(() => {
//   setLoading(true)
//   setTimeout(() =>{
//     setLoading(false)
//   },9000)

  
//  },[])
 
// useEffect(() => {
//   AOS.init();
// }, []);

  return (
    <div> 
      
    <Container>
      <Row style={{ marginTop: 20 }}>
        <Col sm={6} className='Home-font-bg' data-aos="fade-right"  data-aos-duration="1000"    data-aos-easing="ease-in-sine">
          <div className='Home-font'>
            <section>
              <span className='am'>AM</span>
              <span className='namee' > Othi Raja</span>
              <br /> a Creative web designer with a passion for crafting innovative and user-friendly digital experiences.
            </section>
            <Col>
              {/* <Button className='explore-btn'>Explore</Button> */}
            </Col>
          </div>
        </Col>

        <Col sm={6}  data-aos="fade-left"  data-aos-duration="1100">
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
             <Player   className="css-0" autoplay loop controls={false}  src="https://lottie.host/10d2016f-58fb-4b7c-a445-0a36f8f5bb9e/xK3hkVWbft.json" style={{ height: '100%', width: '100%' }}/>
        </Col>
      </Row>
      <div className='about'>
        <h4 data-aos="fade-up" > About</h4>
        <Row>
  
        </Row>
        <h3  data-aos="fade-up">UI<span className='ab-title'>/</span>Web Developer</h3>
        <Row>
          <Col sm={6}>
            <p className='ab-cont'  data-aos="fade-up">Passionate UI and web developer with a keen eye for elegant design and a knack for crafting seamless, user-centric digital experiences</p>
            <button className='button-50' onClick={openPopup}  data-aos="fade-up">Resume</button>
          </Col>
          <Col sm={6}>
            <div className='skill-btn'>
              <button className='button-50'  data-aos="zoom-in"  data-aos-duration="22000"  data-aos-easing="linear" >Python</button>
              <button className='button-50'  data-aos="zoom-in"   data-aos-duration="26000">Figma</button>
              <button className='button-50'  data-aos="zoom-in"  data-aos-duration="28000" >Front-End</button>
              <button className='button-50 button-ex'   data-aos="zoom-in"  data-aos-duration="3000" >Excel</button>
            </div>
          </Col>
        </Row>
      </div>
 
      <Modal show={showPopup} onHide={closePopup}>
        <Modal.Header closeButton>
          <Modal.Title> Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {
        loadingResume ? (
            <div className="text-center">
              <BarLoader color={'#36D7B7'} loading={loadingResume} />
            </div>):(
        <div style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '129.4118%',
      paddingBottom: 0,
      boxShadow: '0 2px 8px 0 rgba(63, 69, 81, 0.16)',
      marginTop: '1.6em',
      marginBottom: '0.9em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform',
    }}>
    <iframe title="UniqueTitleForIframe" style={{position: 'absolute',width: '100%',height: '100%',top: 0,left: 0,border: 'none',padding: 0,margin: 0,}}src="https://www.canva.com/design/DAF0cDxrFUo/view?embed"
allowFullScreen
        allow="fullscreen"/>
    </div>)}
         
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closePopup}>
            Close
          </Button>
          <Button variant="primary"  onClick={downloadResume}>
            Download Resume
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
    
  );
};
export default LandingPage;

