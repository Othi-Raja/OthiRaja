import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";
import AOS from "aos"; // smart animation & transition
import "aos/dist/aos.css"; // smart animation & transition
import { Player } from "@lottiefiles/react-lottie-player";
import app from './FirebaseConfig';
import { getDatabase, ref, set, push } from 'firebase/database'
import { toast } from "react-toastify";
import formAnimation from '../icon/form_animation.json'
import "react-toastify/dist/ReactToastify.css"; //Toastify for notification
const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // To show  Form succes notification
  const notify_sucess = () =>
    toast.success(" Submited Successfully ", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        borderRadius: "15px", // Adjust the value to your desired curve
        color: "green",
        textAlign: "center",
        margin: '10px',
        fontWeight: "bolder",
        backgroundColor: "white"
      },
    });
  // To show error notification
  const notify_error = () => {
    toast.error("oops Something wrong", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        borderRadius: "15px", // Adjust the value to your desired curve
        color: "red",
        letterSpacing: "1px",
        fontSize: "16px",
        fontWeight: "bolder",
        backgroundColor: "white"
      },
    });
  };
  const field_alert = () => {
    toast.info("Fill All fields", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "white",
      style: {
        borderRadius: "15px", // Adjust the value to your desired curve
        color: "black",
        textAlign: "center",
        margin: '10px',
        fontWeight: "bolder",
        backgroundColor: "white",
        letterSpacing: "1px",
        fontSize: "16px"
      },
    });
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const formsubmit = async (e) => {
    const submitBtn = document.querySelector('#form-submit');
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = 'grey';
    e.preventDefault(); /// To stop window loading when Form submit
    let name = document.getElementById("formName").value
    let email = document.getElementById("formEmail").value
    let message = document.getElementById("formMessage").value
    //  reference id name 
    let refname = new Date();
    let date = refname.getDate();            // Day of the month (1-31)
    let month = refname.getMonth() + 1;       // Month (1-12, adding 1 to zero-based index)
    let year = refname.getFullYear();
    let hour = refname.getHours();
    let minute = refname.getMinutes();
    let refid = `${String(date).padStart(2, '0')}:${String(month).padStart(2, '0')}:${year}:${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
    console.log(refid);
    // Push data to Firebase
    const db = getDatabase(app);
    if (name && email && message) {
      const newProductRef = push(ref(db, String(refid + " "+ name)));
      try {
        await set(newProductRef, {
          time: new Date().toLocaleString(),
          name: name,
          email: email,
          message: message,
        });
        notify_sucess(); // Notify user of successful submission
        console.log("200")
        // Clear the form fields
        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        document.getElementById('formMessage').value = '';
      } catch (error) {
        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        document.getElementById('formMessage').value = '';
        console.error("Error adding document: ", error);
        notify_error(); // Notify user of error
      }
    }
    else {
      document.getElementById('formName').value = '';
      document.getElementById('formEmail').value = '';
      document.getElementById('formMessage').value = '';
      field_alert()
    }
    
    submitBtn.disabled = false; // Re-enable the submit button
    submitBtn.style.backgroundColor = '';
  };
  return (
    <div className="contact-form-container Contact">
      <Container className="form_glass">
        <h3 className="form-title" data-aos="fade-in">Get in Touch!</h3>
        <Row className="top_form">
          <Col lg={6} className="form-container">
            <Form>
              <Form.Group
                controlId="formName"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                {/* <Form.Label>Name:</Form.Label> */}
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="input"
                  pattern="^[A-Za-z]+$"
                  title="Please enter only letters"
                  value={formData.name}
                  onChange={(e) => {
                    const inputValue = e.target.value.replace(/[^A-Za-z]/g, ''); // Remove non-alphabetic characters
                    setFormData({ ...formData, name: inputValue });
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="formEmail"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                {/* <Form.Label>Email:</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                controlId="formMessage"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                {/* <Form.Label>Message:</Form.Label> */}
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your message"
                  required
                  className="input"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </Form.Group>
              <Button onClick={formsubmit} className="w-100 form-submit-btn" id="form-submit"  >submit</Button>
            </Form>
          </Col>
          <Col lg={6}>
            <Player
              className="css-0"
              autoplay
              loop
              controls={false}
              src={formAnimation}
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactForm;
