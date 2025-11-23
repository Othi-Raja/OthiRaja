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
  // const sendEmail = async (formData) => {
  //   try {
  //     const response = await fetch('https://formsubmit.co/ajax/othiraja64@gmail.com', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     });
  //     if (!response.ok) throw new Error(`Error: ${response.statusText}`);
  //     console.log("Form submitted successfully:", await response.json());
  //   } catch (error) {
  //     console.error("Form submission failed:", error);
  //   }
  // };
  const formsubmit = async (e) => {
    e.preventDefault(); // Stop window reload on form submit
    const submitBtn = document.querySelector('#form-submit');
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = 'grey';
    // Collect form values
    const name = document.getElementById("formName").value.trim();
    const email = document.getElementById("formEmail").value.trim();
    const message = document.getElementById("formMessage").value.trim();
    const refname = name; // Use name as Firebase reference
    // Check required fields
    if (name && email && message) {
      // Prepare form data for FormSubmit API
      const formData = { name, email, message };
      try {
        // 1️⃣ Send Email via FormSubmit
        const response = await fetch("https://formsubmit.co/ajax/othiraja64@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (!response.ok) throw new Error(`FormSubmit Error: ${response.statusText}`);
        const emailResult = await response.json();
        console.log("✅ Email sent successfully:", emailResult);
        // 2️⃣ Push data to Firebase
        const db = getDatabase(app);
        const newProductRef = push(ref(db, refname));
        await set(newProductRef, {
          time: new Date().toLocaleString(),
          name,
          email,
          message,
        });
        console.log("✅ Data pushed to Firebase");
        notify_sucess(); // Show success notification
        // Clear form fields
        document.getElementById('formName').value = '';
        document.getElementById('formEmail').value = '';
        document.getElementById('formMessage').value = '';
      } catch (error) {
        console.error("❌ Submission failed:", error);
        notify_error(); // Show error notification
      }
    } else {
      console.warn("⚠️ Required fields missing");
      field_alert(); // Notify user about missing fields
    }
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = '';
  };
  return (
    <div className="contact-form-container Contact">
      <Container className="form_glass">
        <h3 className="form-title" data-aos="fade-in">Get in Touch!</h3>
        <Row className="top_form">
          <Col lg={6} className="form-container">
            <Form autoSave="off"  >
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
