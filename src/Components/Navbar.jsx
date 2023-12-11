import React, { useState, useEffect } from "react";
import "./App.css"; // Import your CSS file for styling

import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  const toggleMobileMenu = () => {
    setMobile(!isMobile);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Ôr</div>
      <div className={`nav-list ${isMobile ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="mobile-menu" onClick={toggleMobileMenu}>
        <span className={`bar ${isMobile ? "open" : ""}`}></span>
        <span className={`bar ${isMobile ? "open" : ""}`}></span>
        <span className={`bar ${isMobile ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
