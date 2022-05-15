import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__container container">
        <div className="logo__container">
          <img src={logo} alt="El'mour Africa" className="logo-image" />
        </div>
        <ul className="navbar-links__container">
          <li className="navbar-links">Home</li>
          <li className="navbar-links">About</li>
          <li className="navbar-links">Services</li>
          <li className="navbar-links">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
