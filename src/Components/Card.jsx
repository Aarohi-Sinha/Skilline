import React from "react";
import "../Styles/Card.css"
const Card = (props) =>{
    return(
        <div className="card">
            <span className="title">{props.title}</span>
            <p className="carddesc">{props.desc}</p>
        </div>
       

    );
};

export default Card;