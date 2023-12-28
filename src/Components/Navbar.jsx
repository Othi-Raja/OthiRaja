import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { debounce } from "lodash";
import "./App.css"; // Import your CSS file for styling

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    AOS.init();

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const debouncedHandleLinkClick = debounce(() => {
    setMobile(false); // Close the mobile menu when a link is clicked
  }, 300); // Adjust the debounce delay as needed

  const scrollToTop = () => {
    scroll.scrollToTop();
    debouncedHandleLinkClick();
  };

  const handleScroll = () => {
    // Add or remove the "fixed" class based on the scroll position
    setFixed(window.scrollY > 50);
  };

  return (
    <nav className={`navbar ${isFixed ? "fixed" : ""}`}>
      <div className="logo" onClick={scrollToTop}>
        Ôr
      </div>
      <div className={`nav-list ${isMobile ? "active" : ""}`}>
        <Link to="home" smooth={true} duration={500} spy={true} id="link" activeClass="active-link" onClick={debouncedHandleLinkClick}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} spy={true} id="link" activeClass="active-link" onClick={debouncedHandleLinkClick}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} spy={true} id="link" activeClass="active-link" onClick={debouncedHandleLinkClick}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} spy={true} id="link" activeClass="active-link" onClick={debouncedHandleLinkClick}>
          Contact
        </Link>
      </div>
      <div className="mobile-menu" onClick={() => setMobile(prevMobile => !prevMobile)}>
        <span className={`bar ${isMobile ? "open" : ""}`}></span>
        <span className={`bar ${isMobile ? "open" : ""}`}></span>
        <span className={`bar ${isMobile ? "open" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
