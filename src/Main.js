import React from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";

import "./main.scss";
import Home from "./components/home/Home";
// import Stuff from "./Stuff";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Blog from "./components/blog/Blog";
import Browse from "./components/browse/Browse";

function Main(props) {
        return (
            <HashRouter>
                <div className="header">
                    <div className="information">
                        <NavLink className="link home" exact to="/"> <i className="fa fa-home"></i> Home</NavLink>
                        <NavLink className="link library" to="/stuff"> <i className="fa fa-book"></i> Who we are </NavLink>
                        <NavLink className="link contact" to="/contact"> <i className="fa fa-envelope"></i> Contact</NavLink>
                    </div>

                    <div className="sign-up-in">
                        <NavLink className="sign-in" to="/login"> Sign in</NavLink>
                        <NavLink className="sign-up" to="/signup"> Sign up</NavLink>
                    </div>
                </div>

                <div className="content-wrapper">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/browse" component={Browse} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </div>

                <div className="footer">
                    <div className="footer-container">
                        <div className="top-container">
                            <div className="container-information">
                                <NavLink className="info-title" to="/" >Discover the library</NavLink>
                                <h3 className="info-subtitle">Welcome to a place where art matter. On The Library Comic</h3>
                            </div>

                            <div className="container-information">
                                <NavLink className="info-title" to="/">Make the library yours</NavLink>
                                <h3 className="info-subtitle">Follow all the comics you like.</h3>
                            </div>

                            <div className="container-information">
                                <NavLink className="info-title" to="/">Become a member</NavLink>
                                <h3 className="info-subtitle">Get unlimited access to the best comic library - and support the creators.</h3>
                            </div>
                        </div>

                        <div className="footer-line"></div>

                        <div className="bottom-container">
                            <h2 className="footer-title">The Comic Library</h2>

                            <div className="footer-links">
                                <NavLink className="about" to="/">About - </NavLink>
                                <NavLink className="help" to="/"> Help - </NavLink>
                                <NavLink className="legal" to="/"> Legal </NavLink>
                            </div>
                        </div>

                        <div className="social-media">
                            <NavLink className="social-media-links" to="/">
                                <i className="fa fa-facebook"> </i>
                                <i className="fa fa-twitter"> </i>
                                <i className="fa fa-instagram"> </i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }

export default Main;