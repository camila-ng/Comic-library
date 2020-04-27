import React from "react";
import "./Blog.scss";
import {
    NavLink,
} from "react-router-dom";

function Blog(props) {
      return (
        <div className="blog-wrapper">
        <div className="blog-header"></div>
        <main className="main">
            <article className="content">
                <h1 className="blog-title">What’s the difference: DC vs. Marvel Comics?
                </h1>
                <div className="subtitle">The Difference Ain’t What It Used to Be.
                </div>
                <div className="image"></div>

                    <div className="article-details">
                    <span>By Madison Barnett /</span>
                    <span>In Technology /</span>
                    <span>2 Min Read</span>
                </div>
                <div className="text">The discussion of the difference between the philosophy of DC’s comic creations and
                    Marvel’s isn’t nearly as wide as it once was. The main difference was in the early approaches to the
                    characters and their perspectives.
                    Unfortunately, both mythologies have become a bit tarnished and it is more about a profit motive
                    than maintaining their previous ideologies. Since most of the previous creators of those mythologies
                    have died or choose to remain silent, the two groups appear more and more alike as new talents and
                    leaderships take over how the characters, look, behavior and thinking.
                    I will be looking at them more historically (as a long-time reader) than as a modern comic consumer
                    who may not see any appreciable difference between the two groups. (And they wouldn’t be wrong…)
                    Timely Publications, the company that would one day become Marvel Comics, approach to hero-making
                    was somewhat different. Where DC showed gods in men’s clothing, Marvel wanted to elevate Men (and
                    Women) to a god-like stature. Frail mortals such as Peter Parker and Dr. Banner were suddenly
                    endowed with god-like capacities but with all-too human frailties. Anger, rage, indifference,
                    contempt, mortal weaknesses which gave Marvel’s heroes a more human, more understandable every-man
                    quality.
                </div>
                <NavLink className="keep-reading-link" to="/">Keep reading...</NavLink>
            </article>
            <div className="help-box">
                <NavLink className="read-all-articles-link" to="/">Read all articles</NavLink>
            </div>

        </main>

    </div>
      );
    }
  
  export default Blog;