import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo1.png"
const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__container container">
        <div className="logo__container">
          <a href="/"><img src={logo} alt="El'mour Africa" className="logo-image" /></a>
        </div>
        <ul className="navbar-links__container">
          <li className="navbar-links"><a href="/">Home</a></li>
          <li className="navbar-links"><a href="#about">About</a></li>
          <li className="navbar-links"><a href="#services">Services</a></li>
          <li className="navbar-links"><a href="#contact">Contact</a></li>
        </ul>
          <button className="menu-btn">Menu</button>
      </div>
    </div>
  );
};

export default Navbar;
