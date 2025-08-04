import React from "react";
import "../Styles/Card.css"
const Card = (props) =>{
    return(
        <div className="card">
            <img src={props.img} className="cardlogo"></img>
            <span className="title">{props.title}</span>
            <p className="carddesc">{props.desc}</p>
        </div>
    );
};

export default Card;