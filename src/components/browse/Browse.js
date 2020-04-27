import React from "react";
import "./Browse.scss";
import {
    NavLink,
} from "react-router-dom";

function Browse(props) {
    return (
        <div className="browser-wrapper">
            <div className="title">
                <h2 className="page-title">BROWSE</h2>
            </div>

            <div className="browser-nav">
                <div className="nav-container">
                    <div className="nav-bar">
                        <NavLink className="links" to="/">Search</NavLink>
                        <NavLink className="links" to="/">Sort By</NavLink>
                        <NavLink className="links" to="/">Favorites</NavLink>
                    </div>
                </div>
            </div>

            <div className="browser-content-wrapper">
                <div className="title-wrapper">
                    <div className="browse-title">Start living the Marvel world</div>
                </div>
                <div className="comics">
                    <div className=" comic-wrapper">
                        <NavLink className="comic-container " to="/">
                            <div className="comic-image-container ">
                                <div className="button "></div>
                            </div>
                            <div className="comic-description ">Spider Man</div>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Browse;