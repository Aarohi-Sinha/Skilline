import React from "react";
import "../Styles/Testimonial.css"
import testiMonial from "../Assets/testimonial.svg"

const Testimonial = () =>  {
    return(
        <div className="testimonial">
        <div>
          <div style={{display:`flex`,alignItems:`center`,gap:`10px`}}>
            <div style={{width:`20px`,borderTop:`0.4px solid #525596`,transform:`translateY(-0.8px)`}}></div>
            <p style={{fontSize:`min(1.8vw, 1rem)`,fontFamily:`"Nunito Sans", sans-serif`,margin:`0px`,color:`#525596`}}>TESTIMONIAL</p>
          </div>
          <p style={{color:`#2F327D`,fontWeight:`500`,width:`max(25vw,135px)`,fontSize:`min(2.8vw, 2rem)`}}>What They Say? </p>
          <p style={{color:`#696984`,fontSize:`min(2vw,1rem)`,marginBottom:`6px`}}>Skilline has got more than 100k positive ratings from our users around the world. </p>
          <p style={{color:`#696984`,fontSize:`min(2vw,1rem)`}}>Some of the students and teachers were greatly helped by the Skilline.</p>
          <p style={{color:`#696984`,fontSize:`min(2vw,1rem)`}}>Are you too? Please give your assessment</p>
          <button>Write your assessment</button>
        </div>
        <img src={testiMonial} />
      </div>
    );
};

export default Testimonial;