import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";
import AOS from "aos"; // smart animation & transition
import "aos/dist/aos.css"; // smart animation & transition
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; //Toastify for notification

const ContactForm = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  (function () {
    emailjs.init("VNTleMBW5RpUMxBDv");
  })();
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
      },
    });
  // To show error notification
  const notify_error = () => {
    toast.error("oops Something wrong", {
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
        color: "red",
      },
    });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formsubmit = (e) => {
    e.preventDefault(); /// To stop window loading  when Form submit
    const currentFormData = {
      name: document.getElementById("formName").value,
      email: document.getElementById("formEmail").value,
      message: document.getElementById("formMessage").value,
    };

    emailjs
      .send("service_1h6dhgl", "template_l30j0dj", currentFormData)
      .then((response) => {
        // console.log("Email sent successfully:");
        notify_sucess(); // Show success notification
        setFormSubmitted(true);
        // Clear the form data After Data Submited
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      //error handelling phase
      .catch((error) => {
        // console.error("Email sending failed:", error);
        notify_error(); // To show error notification
      });
  };

  // Check if the form has been submitted successfully
  if (formSubmitted) {
    // Reset the state to allow future submissions
    setFormSubmitted(false);
  }

  return (
    <div className="contact-form-container contact">
      <Container className="form_glass">
        <Row className="top_form">
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={formsubmit}>
              <Form.Group
                controlId="formName"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group
                controlId="formEmail"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <Form.Label>Email:</Form.Label>
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
                <Form.Label>Message:</Form.Label>
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

              <Button
                id="submit"
                type="submit"
                className="button_contact button-57"
                data-aos="fade-in"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <span className="text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-envelope-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4.5a.5.5 0 0 1-1 0V5.383l-7 4.2-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h5.5a.5.5 0 0 1 0 1H2a2 2 0 0 1-2-1.99zm1 7.105 4.708-2.897L1 5.383zM1 4v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1" />
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-5.354 1.25 1.25a.5.5 0 0 1-.708.708L13 12.207V14a.5.5 0 0 1-1 0v-1.717l-.28.305a.5.5 0 0 1-.737-.676l1.149-1.25a.5.5 0 0 1 .722-.016Z" />
                  </svg>
                </span>
                <span>Submit</span>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
