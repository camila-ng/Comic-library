import React, { useEffect, useState } from "react";
import "./Blog.scss";
import {
    NavLink,
} from "react-router-dom";
import ReadMoreReact from 'read-more-react';

function Blog() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/blog")
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
        <div className="blog-wrapper">
            <div className="blog-header"></div>
            <main className="main">
                {
                    items.map(item => (
                        <article className="content">
                           <NavLink className="blog-title" to={"/blog/" + item._id}> {item.title} </NavLink>
                            <div className="subtitle">{item.sutitle}</div>
                            <img className="image" src={"data:image/gif;base64," + item.image} alt={item.name} />
                            
                            <div className="article-details">
                                <span>{item.author} /</span>
                                <span>{item.category} /</span>
                                <span>{item.timeOfRead} </span>
                            </div>
                            <div className="text">
                                {<ReadMoreReact className="readMoreReact"
                                    text={item.content}
                                    min={80}
                                    ideal={100}
                                    max={200}
                                    readMoreText ="Keep Reading..." 
                                />}
                            </div>

                        </article>
                    ))
                }
                <div className="help-box">
                    <NavLink className="read-all-articles-link" to="/">Read more articles</NavLink>
                </div>
            </main>
        </div>
    );
}


export default Blog;