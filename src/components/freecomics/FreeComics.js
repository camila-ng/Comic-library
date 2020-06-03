import React, { useEffect, useState } from "react";
import "./FreeComics.scss";
import {
    NavLink,
} from "react-router-dom";

function FreeComics() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/freecomics")
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
        <div className="free-comics-content">
            <div className="title">
                <h2 className="page-title">THE COMIC LIBRARY</h2>
            </div>


            <div className="free-comics-wrapper">
                <div className="content-title"><h2 className="free-comics-title">Welcome to our free section</h2>
                    <h3 className="free-comics-subtitle">This week's free comic</h3>
                </div>

                {
                    items.map(item => (
                        <div className="free-comics-top-content">
                            <div className="free-comics-info">
                                <h2 className="free-comics-title">{item.name}</h2>
                                <div className="free-comics-category">{item.category}</div>
                                <div className="free-comics-description">{item.description} </div>
                                <NavLink className="read-full-comic-link" to="#">Read the full comic</NavLink>
                            </div>
                            <div className="free-comics-img">
                                <img className="free-comics-image" src={"data:image/gif;base64," + item.image} alt={item.name} />
                            </div>
                        </div>
                    ))
                }

                <div className="free-comic-footer">
                
                </div>

            </div>
        </div>
    )
}

export default FreeComics;