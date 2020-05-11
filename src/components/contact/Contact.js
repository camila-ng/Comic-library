import React from "react";
import "./Contact.scss"
import {
  NavLink,
} from "react-router-dom";

function Contact() {
  return (
    <div className="contact-wrapper">

      <div className="title">
        <h2 className="page-title"> CONTACT </h2>
      </div>

      <div className="contact-form-wrapper">
        <div className="contact-title">We are here to help.</div>

        <form className="contact-form">
          <label className="label name-form">
            Name
        <br />
            <input
              className="input text-input"
              type="text"
              name="name"
              placeholder=""
            />
          </label>
          <br />

          <label className="label username-form">
            Email
      <br />
            <input
              className="input username-input"
              type="text"
              name="email"
              placeholder=""
            />
          </label>


          <label className="label textarea-label">
            Message
      <br />
              <textarea rows="5" cols="40" className="textarea"
                name="message">
              </textarea>
          </label>


          <NavLink className="contact-button-link" to="/">
            <div className="button">Submit</div></NavLink>
        </form>
      </div>
    </div>
  );
}



export default Contact;