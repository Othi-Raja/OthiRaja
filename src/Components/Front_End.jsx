import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Figma.css";
import { Col, Container } from "react-bootstrap";
export default class frontEnd extends Component {
  render() {
    return (
      <div>
        <Container className="figma_container">
          <h2 className="text-center py-4">Frontend Works</h2>
          <Col md={6} data-aos="fade-right">
            <div className="card">
              {/* <iframe src="https://www.figma.com/embed?embed_host=oembed&url=https://www.figma.com/proto/ULmOtappLI3cGhhjDEMXAQ/React-Portfolio?type=design" allowFullScreen  title='fig'></iframe> */}

              {/* <img src="https://picsum.photos/200/300?random=1" alt="img" /> */}
              <span>
                <h2>
                  Portfolio <i class="fa fa-link" aria-hidden="true"></i>
                </h2>
              </span>
            </div>
          </Col>
        </Container>
      </div>
    );
  }
}
