import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./Front_end.css";
import jsonData from './Data.json';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import perWork from './PersonalWork.json';
import interndata from './intern_data.json';
// import Marquee from "react-fast-marquee";
import { Col, Container, Row } from "react-bootstrap";
// import FEIcon from '../icon/FEIcon.svg' 
let url = {
  Amjathkhan: () => window.open('https://othi-raja.github.io/Amjathkhan./', '_blank'),
  instagram_cloned: () => window.open('https://othi-raja.github.io/clone-instagram/', '_blank'),
  mrchef: () => window.open('https://othi-raja.github.io/Mr.chef-/', '_blank')
}
const FrontEnd = () => {
  const [data, setData] = useState(null);
  const [data1, setData1] = useState(null);
  const [internData ,setInternData] = useState(null)
  useEffect(() => {
    setData(jsonData);
    setData1(perWork);
    setInternData(interndata)
  }, []);
  return (
    <div>
      <Container className="figma_container text-center ">
        {/* <h2 className="text-center py-4">Frontend Works</h2> */}
        <Row>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-easing="linear"
            className='text-center'
          >
            {/* card--1 */}
            <div className="FE_card codezila " onClick={url.Amjathkhan}>
              {/* <div className="FE_card-img FE_card-img1 "></div> */}
              <img src="https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/am.png?alt=media&token=e0e66a05-6bc3-4b3d-aa7e-06377910de97" className='FE_card-img1  img-fluid ' alt="intern-project" />
              <span className="FE_title">
                Amjathkhan
              </span>
            </div>
          </Col>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-easing="linear"
            className='text-center'
          >
            {/* card--1 */}
            <div className="FE_card instaclone " onClick={url.instagram_cloned}>
              {/* <div className="FE_card-img FE_card-img2 "></div> */}
              <img src='https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/instaimg.png?alt=media&token=9150044b-3b9e-4bfa-a95f-06c1055dc387' className='FE_card-img2 img-fluid  ' alt="intern-project" />
              <span className="FE_title">
                Instagram-clone
              </span>
            </div>
          </Col>
          <Col
            lg={4}
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-easing="linear"
            className='text-center'
          >
            {/* card--1 */}
            <div className="FE_card" onClick={url.mrchef}>
              {/* <div className="FE_card-img FE_card-img3 "></div> */}
              <img className="FE_card-img3 img-fluid " src="https://firebasestorage.googleapis.com/v0/b/image-f2f77.appspot.com/o/mrcheif.png?alt=media&token=013c2c3f-f5f0-4d64-b475-492fdfa5cd93" alt="Mr chef" />
              <span className="FE_title">
                Mr.Chef
              </span>
            </div>
          </Col>
          <Col className="ViewMore">
            <button type="button" className="btn ViewMoreBtn float-end" data-bs-toggle="modal" data-bs-target="#exampleModal">
              View More
            </button>
          </Col>
        </Row>
      </Container>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog  modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="exampleModalLabel">My Works</h5> */}
              <button type="button" className="btn-close frontend-modal-closebtn " data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body modal-bg">
              <Container>
                <h3 className='work-title'>Intern@<a href='https://www.linkedin.com/company/softrate/about/' target='_blank' rel="noreferrer">SoftRate</a> <svg data-tooltip-id="my-tooltip-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg></h3>
                 
                <ReactTooltip
                  id="my-tooltip-1"
                  place="right"
                  content=" Remote / Chennai / Jan 2024 - Apr 2024 /4 Month "
                />
                
                <Row style={{ width: '100%', marginTop: '10px' }}>
                  {data && data.map(item => (
                    <Col key={item.id} lg={4} className='view-More-FE-model'>
                      <div className="FE_cardJson w-100 "  onClick={() => window.open(item.url, '_blank')}>
                        <img className="Vm-modal-img img-fluid " src={item.img} alt={item.alt} />
                        {/* <div className="arrowicon">
                        <img src={FEIcon} alt="iconArrow" className='iconArrow' />
                      </div> */}
                        <div className="title-container  float-start ">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    </Col>
                  ))}
                  <Row className='pt-4'>

                  <h3 className='work-title '>Intern@<a href='https://www.linkedin.com/company/urbanriderapp/about/' target='_blank' rel="noreferrer">UrbanRider </a><svg data-tooltip-id="my-tooltip-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle mx-2" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg></h3>      
                <ReactTooltip
                  id="my-tooltip-1"
                  place="right"
                  content="Remote / Aug 2024 - Present / Stipend "
                />
                     {internData && internData.map(item => (
                    <Col key={item.id} lg={4} className='view-More-FE-model'>
                      <div className="FE_cardJson w-100 " onClick={() => window.open(item.url, '_blank')}>
                        <img className="Vm-modal-img img-fluid " src={item.img} alt={item.alt} />
                        {/* <div className="arrowicon">
                        <img src={FEIcon} alt="iconArrow" className='iconArrow' />
                      </div> */}
                        <div className="title-container  float-start ">
                          <h5>{item.title} <p className="blink"></p></h5>
                        </div>
                      </div>
                    </Col>
                  ))}
                  </Row>
                  <Row className='pt-5'>

                  <h2 className='work-title'>Others</h2>
                  {data1 && data1.map(item => (
                    <Col key={item.id} lg={4} className='view-More-FE-model'>
                      <div className="FE_cardJson w-100 " onClick={() => window.open(item.url, '_blank')}>
                        <img className="Vm-modal-img img-fluid " src={item.img} alt={item.alt} />
                        {/* <div className="arrowicon">
                        <img src={FEIcon} alt="iconArrow" className='iconArrow' />
                      </div> */}
                        <div className="title-container  float-start ">
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    </Col>
                  ))}
                  </Row>
                </Row>
              </Container>
            </div>
            {/* <div className="modal-footer">
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default FrontEnd;
