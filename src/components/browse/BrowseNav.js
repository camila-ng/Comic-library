import React from "react";
import "./Browse.scss";
import {
    NavLink,
} from "react-router-dom";
function BrowseNav() {

    return (

        <div className="browser-nav">
                <div className="nav-container">
                    <div className="nav-bar">
                        <NavLink className="links" to="/">Search</NavLink>
                        <NavLink className="links" to="/">Sort By</NavLink>
                        <NavLink className="links" to="/">Favorites</NavLink>
                    </div>
                </div>
            </div>
    )
}

export default BrowseNav;

