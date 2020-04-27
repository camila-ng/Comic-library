import React from "react";
import "./Home.scss";
import {
  NavLink,
} from "react-router-dom";


function Home() {
    return (
      <div className="home-content">
      <div className="title">
        <h2 className="page-title">THE COMIC LIBRARY</h2>
      </div>

      <div className="home-content-wrapper">
        <div className="home first-article">

          <div className="browse">
            <NavLink className="home-links" to="/browse">
              <h2 className="home-title browse-title">Browse</h2>
              <p className="subtitles browse-subtitle"> The full library</p>
            </NavLink>
          </div>
        </div>

        <div className="home second-article">
          <div className="read">
            <NavLink className="home-links" to="/">
              <h2 className="home-title read-title">Read</h2>
              <p className="subtitles read-subtitle"> Enjoy our free comic</p>
            </NavLink>
          </div>
        </div>

        <div className="home third-article">
          <div className="blog">
            <NavLink className="home-links" to="./blog">
              <h2 className="home-title blog-title">Blog</h2>
              <p className="subtitles blog-subtitle">Visit out blog </p>
            </NavLink>

          </div>
        </div>

      </div>
      </div>
    );
  }

export default Home;