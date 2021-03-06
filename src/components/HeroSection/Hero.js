import React from "react";
import heroImage from "../../assets/video.mp4"
import "./Hero.css"


const Hero = () => {
  return (
    <div className="hero__wrapper" id="home">
      <div className="hero-section__container container">
        <div className="hero-text__container">
          <h3>El'mour Africa</h3>
          <div className="hero-text">
            <p>
              El'mour Africa is an image consultancy firm set up to physically and mentally empower people by facilitating the development of both soft and hard skills through physical and online trainings, confrences, seminars and one-on-one coaching services.
            </p>
            <div className="read-more__container">
            <a href="#about"><button className="btn btn1">Read More</button></a>
            <a href="#contact">   <button className="btn btn2">Contact Me</button></a>
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
