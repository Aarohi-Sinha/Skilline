import React from "react";
import "../Styles/News.css"

const News = (props) => {
    return(
        <div className="newscard">
            <img src={props.img} className="newsimg"></img>
            <span className="newscategory">{props.category}</span>
            <div>
                <p className="newstitle">{props.title}</p>
                <p className="newsdesc">{props.desc}</p>
            </div>
            <a href="#">Read more</a>
        </div>
    );
};

export default News;