import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar";
import bgImage from './Assets/header-bg.svg';
import { FaPlay } from "react-icons/fa6";
import gooGle from './Assets/google.svg'
import netFlix from './Assets/netflix.svg'
import airBnb from './Assets/airbnb.svg'
import amaZon from './Assets/amazon.svg'
import faceBook from './Assets/facebook.svg'
import grAb from './Assets/grab.svg'
import Card from "./Components/Card"

function App() {
  return(
    <>
      <div className="header" style={{ '--bg-image': `url(${bgImage})` }}> 
        <Navbar />
        <div className="herosection">
          <p className="tagline">
            <span>Studying</span> Online is now much easier
          </p>
          <p className="desc">Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div style={{display:`flex`,gap:`2vw`,alignItems:`center`}}>
            <button className="join">Join for free</button>
            <button style={{width:`4.2vw`,height:`4.2vw`,backgroundColor:`#FFFFFF`}}><FaPlay color="#23BDEE"/></button>
            <span style={{color:`#252641`,fontSize:`1.2vw`}}>Watch how it works</span>
          </div>
        </div>
      </div>
      <p style={{fontSize:`min(3vw,18px)`,color:`#696984`, textAlign:`center`}}>Trusted by 5,000+ Companies Worldwide</p>
      <div className="logos">
        <img src={gooGle} />
        <img src={netFlix} />
        <img src={airBnb} />
        <img src={amaZon} />
        <img src={faceBook} />
        <img src={grAb} />
      </div>
      <p style={{color:`#F48C06`,fontSize:`min(3.2vw,18px)`,fontWeight:`bold`,textAlign:`center`,paddingTop:`5vw`,margin:`1.5vw auto`}}>
        <span style={{color:`#2F327D`}}>All-In-One</span> Cloud Software
      </p>
      <p style={{color:`#696984`,fontSize:`min(2.6vw,18px)`,width:`45vw`,margin:`0 auto`,textAlign:'center'}}>
        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>
      <div className="cardgrp">
        <Card 
          title="Online Billing, Invoicing, & Contracts" 
          desc="Simple and secure control of your oragnization's financial and legal transactions. Send customized invoices and contracts."
        />
        <Card 
          title="Easy Scheduling & Attendance Tracking" 
          desc="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        />
        <Card className="customer"
          title="Customer Tracking" 
          desc="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
        />
      </div>
      <p style={{color:`#F48C06`,fontSize:`min(3.2vw,18px)`,fontWeight:`bold`,textAlign:`center`,paddingTop:`5vw`,margin:`1.5vw auto`}}>
        <span style={{color:`#2F327D`}}>What is</span> Skilline?
      </p>
      <p style={{color:`#696984`,fontSize:`min(2.6vw,18px)`,width:`45vw`,margin:`0 auto`,textAlign:'center'}}>
        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>
    </>
  );
};

export default App;