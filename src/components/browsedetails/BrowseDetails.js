import React, { useEffect, useState } from "react";
import "./BrowseDetails.scss";


function BrowseDetails(props) {
    const [comicId, setComicId] = useState(props.match.params.id);
    const [item, setItem] = useState();
    const [images, setImages] = useState([]);

    const getData = async () => {
        const apiCall = await fetch("http://localhost:3001/comics/" + comicId);
        const result = await apiCall.json();

        setItem(result.comic);
        setImages(result.images);
    }

    useEffect(() => {
        getData();
    }, [comicId])
    return (
        <div className="browser-wrapper">
            <div className="title">
                <h2 className="page-title">THE COMIC LIBRARY</h2>
            </div>

            <div className="browse-details-content-wrapper">

                <div className="top-container">
                    <h1 className="browse-details-title">The Comic You Choose</h1>
                </div>
                <div className="browse-details-comics-wrapper">
                    {
                        item ?
                            <div className="images-browse-details-wrapper">
                            <div className="golis"> 
                                {images ?
                                    images.map(image => (
                                        <img className="browse-details-image" src={"data:image/gif;base64," + image.image} alt="comic-image3" />
                                    ))
                                    : ""
                                }
                                </div>
                                {
                                    <div className="description-wrapper">
                                        <div className="description-container">
                                     <h2 className="description-title">{item.name}</h2>
                                    <div className="description"> {item.description}</div>
                                    </div>
                                    <a href={item.button} className="amazon-button" alt="amazon-buy">Buy this comic</a>
                                    </div>
                                }
                            </div>

                            : <h1>Loading</h1>
                    }
                </div>
            </div>
        </div>
    );
}

export default BrowseDetails;