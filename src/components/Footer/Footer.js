import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-heading">
      <div className="logo__container">
          <a href="/"><img src={logo} alt="El'mour Africa" className="logo-image" /></a>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          excepturi impedit esse eius illo vitae odit aspernatur atque,
          doloribus quaerat.
        </p>
      </div>
      <div className="footer-center">
        <h4>Links</h4>
        <ul className="navbar-links__container">
          <li className="navbar-links">
            <a href="#home">Home</a>
          </li>
          <li className="navbar-links">
            <a href="#about">About</a>
          </li>
          <li className="navbar-links">
            <a href="#services">Services</a>
          </li>
          <li className="navbar-links">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="social-icons">
          <h4>Contact</h4>
      </div>
    </div>
  );
};

export default Footer;
