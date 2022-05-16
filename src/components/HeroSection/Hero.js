import React from "react";
import logo from "../../assets/logo.png";
import Arrow from "../../assets/Arrow.png"
import heroImage from "../../assets/video.mp4"
import "./Hero.css"


const Hero = () => {
  return (
    <div className="hero__wrapper" id="home">
      <div className="hero-section__container container">
        <div className="hero-text__container">
          <h3>El'<span>mour</span> Afr<span>ica</span></h3>
          <div className="hero-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto.
            </p>
            <div className="read-more__container">
            <a href="#about"><button className="btn btn1">Read More</button></a>
            <a href="#contact">   <button className="btn btn2">Contact Me </button></a>
            </div>
          </div>
        </div>
        <div className="hero-img__container">
          <video src={heroImage} autoPlay={true} loop={true}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
