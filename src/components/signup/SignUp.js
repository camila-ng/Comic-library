import React from "react";
import "./SignUp.scss"
import {
    NavLink,
} from "react-router-dom";

function SignUp(props) {

        return (
            <div className="sign-up-container">
            <div className="image"></div>
      
            <div className="form">
              <h2 className="sign-up-title">Sign up to The Comic Library</h2>
      
              <form className="sign-up-form">
                <div className="top-form">
                  <label className="label name-form">
                    Fullname
                    <br />
                    <input
                      className="input text-input"
                      type="text"
                      name="name"
                      placeholder=""
                     />
                  </label>
      
                  <label className="label username-form">
                    Username
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
                  <label className="label email-form">
                    Email
                    <br />
                    <input
                      className="input email-input"
                      type="text"
                      name="email"
                      placeholder=""
                    />
                  </label>
      
                  <label className="label password-form">
                    Password
                    <br />
                    <input
                      className="input password-input"
                      type="text"
                      name="name"
                      placeholder="6+ characters"
                    />
                  </label>
      
                  <div className="checkbox">
                    <input className="checkbox-input" type="checkbox" /> Creating an
                    account means you're okay with our Terms of Service, Privacy
                    Policy, and our default Notification Settings.
                  </div>
                </div>
      
                <NavLink className="button-link" to="/">
                    <div className="button">Create Account</div></NavLink>
              </form>
            </div>
          </div>
        );
    }


export default SignUp;