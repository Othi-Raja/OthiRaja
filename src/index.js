import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/landingpage";
import ContactForm from "./Components/ContactForm";
import reportWebVitals from "./reportWebVitals";
import About from "./Components/About";
import Footer from "./Components/Footer";
// import Figma from './Components/Figma';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Networkerr from "./Components/error/Networkerr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Networkerr>
      <Navbar />
      <ToastContainer />
      <LandingPage />
      <About />
      <ContactForm />
      <Footer />
    </Networkerr>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();