import React from "react";
import "../../main.scss";
import "./WhoWeAre.scss";

function WhoWeAre() {
    return (
        <div className="info-content-wrapper">
            <div className="title">
                <div className="page-title">The Comic Library</div>
            </div>
            
            <div className="info-content">
                <div className="text-and-photo-wrapper">
                    <div className="title-and-text">
                        <div className="info-content-title">WHO WE ARE</div>
                        <div className="info-content-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
                            </div>
                    </div>
                    <div className="who-we-are-img">
                        <iframe title="marvel-video" className="iframe" width="400" height="300" src="https://www.youtube.com/embed/mN_e5-fcGU4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> 

                </div>
            </div>
        </div>
    );
}
export default WhoWeAre;