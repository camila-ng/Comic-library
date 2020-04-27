import React from "react";
import "./login.scss";
import {
    NavLink,
} from "react-router-dom";

function Login(props) {
        return (
            <div className="wrapper">

                <div className="image"></div>

                <div className="form">
                    <h2 className="sign-in-title">Sign in to The Comic Library</h2>
                    <form className="sign-in-form">

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

                        <label className="label password-form">
                            Password
             <br />
                            <input
                                className="input password-input"
                                type="text"
                                name="name"
                                placeholder=""
                            />

                        </label>
                        <NavLink className="forgot-password" to="/">Forgot password?</NavLink>
                        <NavLink className="button-link" to="/"> <div className="button">Sign in</div> </NavLink>
                    </form>

                </div>
            </div>
        );
    }


export default Login;