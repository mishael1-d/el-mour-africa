import React from "react";
import Cards from "./Cards";
import "./Services.css";
import SectionCircle from "../SectionCircle/SectionCircle"

const Services = () => {
  return (
    <div className="service-container container" id="services">
      <SectionCircle name="Services"/>
      <Cards />
    </div>
  );
};

export default Services;
