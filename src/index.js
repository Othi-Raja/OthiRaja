import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/landingpage';
import ContactForm from './Components/ContactForm';
import reportWebVitals from './reportWebVitals';
import Experience from './Components/Experience';
import About from './Components/About';
import Footer from './Components/Footer';
import Figma from './Components/Figma';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <LandingPage/>
    <About/>
    <Figma/>
    <Experience/>
     <ContactForm/>
     <Footer/>
      </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();