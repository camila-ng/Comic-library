import React, { useEffect, useState } from "react";
import "./Browse.scss";
import {
    NavLink,
} from "react-router-dom";
import BrowseNav from "./BrowseNav"

function Browse() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/comics")
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },

                (error) => {

                }
            )
    }, [])

    return (
        <div className="browser-wrapper">
            <div className="title">
                <h2 className="page-title">THE COMIC LIBRARY</h2>
            </div>

        <div> 
            <BrowseNav/>
             </div>
           

            <div className="browser-content-wrapper">
                <div className="title-wrapper">
                    <div className="browse-title">Start living the Marvel world</div>
                </div>
                <div className="comics">
                    {
                        items.map(item => (
                            <div className=" comic-wrapper">
                                <NavLink className="comic-container" to={"/comics/" + item._id}>
                                        <img className="comic-image" src={"data:image/gif;base64," + item.image} alt={item.name} />
                                        <div className="button ">
                                        </div>
                                    <div className="comic-description ">{item.name}</div>
                                </NavLink>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Browse;