import React from "react";
import "../Styles/Footer.css"
import loGo from '../Assets/footerlogo.svg'

const Footer= ()=>{
    return(
        <footer>
            <div className="logodesc">
                <img src={loGo}></img>
                <div style={{width:`1px`,backgroundColor:`#626381`,height:`min(26vw, 60px)`}}></div>
                <span>Virtual Class for Zoom</span>
            </div>
            <p style={{color:`#B2B3CF`,fontSize:`min(3.5vw,24px)`,marginTop:`min(15vw,55px)`,marginBottom:`20px`}}>Subscribe to get our newsletter</p>
            <div className="newsletter">
                    <form>
                    <input type='text' placeholder="Your Email"></input>
                </form>
                <button type="submit" className="subscribe">Subscribe</button>
            </div>
            <div className="lnks">
                <a href="">Careers</a>
                <a href="" className="privpolicy">Privacy Policy</a>
                <a href="">Terms & Conditions</a>
            </div>
            <p style={{marginTop:`min(8vw,60px)`,fontSize:`min(3.5vw,18px)`,color:`#B2B3CF`,paddingBottom:`min(5vw,20px)`}}>© 2021 Class Technologies Inc. </p>
        </footer>
    );
};

export default Footer;