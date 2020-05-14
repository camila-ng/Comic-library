import React, { useContext } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import "./main.scss";
import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import BlogDetails from "./components/blogDetails/BlogDetails";
import Browse from "./components/browse/Browse";
import BrowseDetails from "./components/browsedetails/BrowseDetails"
import Contact from "./components/contact/Contact";
import WhoWeAre from "./components/whoweare/WhoWeAre";
import FreeComics from "./components/freecomics/FreeComics";
import { Auth0Context } from './contexts/auth0-context';

function Main(props) {
    const { isLoading, user, loginWithRedirect } = useContext(Auth0Context);
   
    return (

        

        <HashRouter>
           
            <div className="header">
                <div className="information">
                    <NavLink className="link home" exact to="/"> Home</NavLink>
                    <NavLink className="link library" to="/info">  Who we are </NavLink>
                    <NavLink className="link contact" to="/contact">  Contact</NavLink>
                </div>

                {!isLoading && !user && (
            <>
             <div className="sign-up-in">
                    <button onClick={loginWithRedirect} className="button sign-in">
                        Sign In
                     </button>

                    <button onClick={loginWithRedirect} className="button sign-up">
                        Sign Up
                     </button>
                     
                </div>
            </>
          )}
          {!isLoading && user && (
            <>
              <p className="user-name">Hello {user.name}</p>
              {user.picture && <img src={user.picture} alt="My Avatar" className="user-picture" />}
            </>
          )}
          
            </div>


            <div className="content-wrapper">
                <Route exact path="/" component={Home} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/comics" component={Browse} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/info" component={WhoWeAre} />
                <Route exact path="/blog/:id" component={BlogDetails} />
                <Route exact path="/comics/:id" component={BrowseDetails} />
                <Route exact path="/freecomics" component={FreeComics} />
            </div>

            <div className="footer">
                <div className="footer-container">
                    <div className="top-container">
                        <div className="container-information">
                            <NavLink className="info-title" to="/" >Discover the library.</NavLink>
                            <h3 className="info-subtitle">Enjoy the biggest Marvel's comic library</h3>
                        </div>

                        <div className="container-information">
                            <NavLink className="info-title" to="/">The perfect selection.</NavLink>
                            <h3 className="info-subtitle">Download the weekly free comic. </h3>
                        </div>

                        <div className="container-information">
                            <NavLink className="info-title" to="/">Become a member</NavLink>
                            <h3 className="info-subtitle">Get unlimited access to the biggest comic library.</h3>
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