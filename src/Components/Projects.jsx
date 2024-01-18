import React from 'react';
import Figma from './Figma';
import FrontEnd from './Front_End';
import { Container } from "react-bootstrap";
const Project = () => {
    return (
        <Container>
            <div ClassNames="Products">
                <div style={{ fontSize: '2rem' }}>Figma</div>
                <span></span>
                <Figma />
                <div style={{ fontSize: '2rem' }}>Frontend Works</div>
                <FrontEnd />
            </div>
        </Container>
    );
}
export default Project;
