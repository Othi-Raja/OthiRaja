 import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';  
import AOS from 'aos';
import emailjs from '@emailjs/browser';

 
 
 const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  useEffect(() => {
    AOS.init();
  }, []);
 

  (function(){
    emailjs.init("VNTleMBW5RpUMxBDv");
 })();

  const mailSend = () =>{
  let  Detail ={
    name: document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value,

  }
  
  }
 

  return (
    <div className="contact-form-container">
    
    <Container className=" form_glass">
    {/* <h1 className='h1'>contact</h1> */}
      <Row className='top_form'>
        <Col md={{ span: 6, offset: 3 }}>
          {/* <h2>Contact Us</h2> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" data-aos-duration="20000" data-aos="fade-in"data-aos-easing="ease-in-back"data-aos-delay="600"data-aos-offset="0">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required className='input' />
            </Form.Group>

            <Form.Group controlId="formEmail" data-aos-duration="22500"  data-aos="fade-in"data-aos-easing="ease-in-back"data-aos-delay="600"data-aos-offset="0">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required className='input' />
            </Form.Group>

            <Form.Group controlId="formMessage" data-aos-duration="24500"  data-aos="fade-in"data-aos-easing="ease-in-back"data-aos-delay="600"data-aos-offset="0">
              <Form.Label>Message:</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message" required className='input' />
            </Form.Group>

            <Button type="submit" className='button_contact button-57' data-aos="fade-in">
            <span class="text" ><img width="20" height="20" src="https://img.icons8.com/glyph-neue/40/000000/submit-document.png" alt="submit-document"/></span><span>Submit</span>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactForm;
