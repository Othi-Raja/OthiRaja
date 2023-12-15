 import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css';  
import AOS from 'aos';
import { BiEnvelopeArrowUp } from 'react-bootstrap-icons';

 
 
 const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  useEffect(() => {
    AOS.init();
  }, []);
 

 
 

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
            <span className="text" ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope-arrow-up" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z"/>
</svg></span><span>Submit</span>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default ContactForm;
