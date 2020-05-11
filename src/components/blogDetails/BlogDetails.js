import React, { useEffect, useState } from "react";
import "./BlogDetails.scss";


function BlogDetails(props) {
    const [item, setItem] = useState();

    useEffect(() => {
    const id = props.match.params.id;
        fetch("http://localhost:3001/blog/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                },
                (error) => {

                }
            )
    })

    return (
        <div className="blog-wrapper">
            <div className="blog-header"></div>
            <main className="main">
                {
                    item ?
                        <article className="content">
                            <h1 className="blog-title"> {item.title} </h1>
                            <div className="subtitle">{item.sutitle}</div>
                            <div className="image"></div>
                            <div className="article-details">
                                <span>{item.author} /</span>
                                <span>{item.category} /</span>
                                <span>{item.timeOfRead} </span>
                            </div>
                            <div className="text">
                                {item.content}
                            </div>
                        </article>
                        : <h1>Loading</h1>
                }
            </main>
        </div>
    );
}


export default BlogDetails;