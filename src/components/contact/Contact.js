import React from "react";
import "./Contact.scss"
import {
  NavLink,
} from "react-router-dom";

function Contact(props) {

  return (
    <div className="contact-container">
      <div className="image"></div>

      <div className="form">
        <h2 className="contact-title">We are here to help.</h2>

        <form className="contact-form">
          <div className="top-form">
          <label className="label username-form">
              Fullname
                    <br />
              <input
                className="input username-input"
                type="text"
                name="username"
                placeholder=""
              />
            </label>

            <label className="label username-form">
              Email
                    <br />
              <input
                className="input username-input"
                type="text"
                name="username"
                placeholder=""
              />
            </label>
          </div>

          <div className="bottom-form">
         <textarea className="textarea" placeholder="Say something nice..." rows="10" cols="30" wrap="off"></textarea>
          </div>

          <NavLink className="button-link" to="/">
            <div className="button">Contact Us</div></NavLink>
        </form>
      </div>
    </div>
  );
}


export default Contact;