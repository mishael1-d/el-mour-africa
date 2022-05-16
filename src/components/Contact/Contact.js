import React from "react";
import SectionCircle from "../SectionCircle/SectionCircle";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper container" id="contact">
      <SectionCircle name="Contact" />
      <div className="contact-form-container">
        <div className="contact-form-left">
          <div className="contact-form-left-content">
            <h4>Office Address</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="contact-form-left-content">
            <h4>Email Address</h4>
            <p>example@gmail.com</p>
          </div>
          <div className="contact-form-left-content">
            <h4>Phone Number</h4>
            <p>+234 (01) 234 567</p>
          </div>
        </div>
        <div className="contact-form-right">
            <h3>Send Me A Message</h3>
            <div className="contact-form-right-content">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="Full name" />
            </div>
            <div className="contact-form-right-content">
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" placeholder="example@gmail.com" />
            </div>
            <div className="contact-form-right-content">
                <label htmlFor="">Message</label>
                <textarea placeholder="Write your message here" />
            </div>
            <button className="send-btn">send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
