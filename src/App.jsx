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
import instrUctors from "./Assets/instructors.svg"
import stuDents from "./Assets/students.svg"
import classRoom from "./Assets/classroom.svg"
import toOls from "./Assets/tools.svg"
import quIz from "./Assets/quiz.svg"
import clAss from "./Assets/class.svg"
import disCuss from "./Assets/discuss.svg"
import platForm from "./Assets/platform.svg"
import Footer from "./Components/Footer.jsx"
import Testimonial from "./Components/Testimonial.jsx"
import News from "./Components/News.jsx"
import neWs1 from "./Assets/news1.svg"
import neWs2 from "./Assets/news2.svg"
import neWs3 from "./Assets/news3.svg"
import neWs4 from "./Assets/news4.svg"
import bIll from "./Assets/bill.svg"
import caleNdar from "./Assets/calendar.svg"
import custOmer from "./Assets/customer.svg"

function App() {
  return (
    <>
      <div className="header" style={{ '--bg-image': `url(${bgImage})` }}>
        <Navbar />
        <div className="herosection">
          <p className="tagline">
            <span>Studying</span> Online is now much easier
          </p>
          <p className="desc">Skilline is an interesting platform that will teach you in more an interactive way</p>
          <div style={{ display: `flex`, gap: `2vw`, alignItems: `center` }}>
            <button className="join">Join for free</button>
            <button style={{ width: `4.2vw`, height: `4.2vw`, backgroundColor: `#FFFFFF` }}><FaPlay color="#23BDEE" /></button>
            <span style={{ color: `#252641`, fontSize: `1.2vw` }}>Watch how it works</span>
          </div>
        </div>
      </div>

      <p style={{ fontSize: `min(3vw,18px)`, color: `#696984`, textAlign: `center` }}>Trusted by 5,000+ Companies Worldwide</p>
      <div className="logos">
        <img src={gooGle} />
        <img src={netFlix} />
        <img src={airBnb} />
        <img src={amaZon} />
        <img src={faceBook} />
        <img src={grAb} />
      </div>

      <p style={{ color: `#F48C06`, fontSize: `min(3.2vw,24px)`, fontWeight: `bold`, textAlign: `center`, paddingTop: `5vw`, margin: `1.5vw auto` }}>
        <span style={{ color: `#2F327D` }}>All-In-One</span> Cloud Software
      </p>
      <p style={{ color: `#696984`, fontSize: `min(2.6vw,1.2rem)`, width: `45vw`, margin: `0 auto`, textAlign: 'center' }}>
        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>

      <div className="cardgrp">
        <Card
          img = {bIll}
          title="Online Billing, Invoicing, & Contracts"
          desc="Simple and secure control of your oragnization's financial and legal transactions. Send customized invoices and contracts."
        />
        <Card
          img = {caleNdar}
          title="Easy Scheduling & Attendance Tracking"
          desc="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        />
        <Card className="customer"
          img = {custOmer}
          title="Customer Tracking"
          desc="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
        />
      </div>

      <p style={{ color: `#F48C06`, fontSize: `min(3.2vw,24px)`, fontWeight: `bold`, textAlign: `center`, paddingTop: `5vw`, margin: `1.5vw auto` }}>
        <span style={{ color: `#2F327D` }}>What is</span> Skilline?
      </p>
      <p style={{ color: `#696984`, fontSize: `min(2.4vw,1.2rem)`, width: `45vw`, margin: `0 auto`, textAlign: 'center' }}>
        Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </p>

      <div className="users">
        <div style={{ backgroundImage: `url(${instrUctors})` }} className="instructors">
          <p style={{}}>FOR INSTRUCTORS</p>
          <button>Start a class today</button>
        </div>
        <div style={{ backgroundImage: `url(${stuDents})` }} className="students">
          <p>FOR STUDENTS</p>
          <button>Enter access code</button>
        </div>
      </div>

      <div className="classroom">
        <div>
          <p style={{ color: `#2F327D`, fontWeight: `500` }}>Everything you can do in a physical classroom,<span style={{ color: `#F48C06`, }}> you can do with Skilline</span></p>
          <p style={{ color: `#696984`, fontSize: `min(2vw,1rem)`, margin: `0 auto`, textAlign: `left` }}>Skilline’s school
            management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all
            in one secure cloud-based system.
          </p>
          <a href="#" style={{ fontSize: `min(2vw,14px)`, color: `#696984`, textDecorationLine: `underline`, marginTop: `min(25px,3vw)` }}>Learn more</a>
        </div>
        <img src={classRoom} style={{ marginTop: `14px`, marginBottom: `20px` }} />
      </div>

      <p style={{ color: `#F48C06`, fontSize: `min(3.2vw,24px)`, fontWeight: `bold`, textAlign: `center`, paddingTop: `5vw`, margin: `1.5vw auto` }}>
        <span style={{ color: `#2F327D` }}>Our</span> Features
      </p>
      <p style={{ color: `#696984`, fontSize: `min(2.4vw,1.2rem)`, width: `48vw`, margin: `0 auto`, textAlign: 'center' }}>
        This very extraordinary feature, can make learning activities more efficient
      </p>

      <div className="tools">
        <div>
          <p style={{ color: `#2F327D`, fontWeight: `500`, width: `max(20vw,120px)` }}>
            <span style={{ color: `#F48C06` }}>Tools</span> For Teachers And Learners
          </p>
          <p style={{ color: `#696984`, fontSize: `min(2vw,1rem)`, margin: `0 auto` }}>Class has a dynamic set of teaching
            tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.
          </p>
        </div>
        <img src={toOls} />
      </div>

      <div className="quiz">
        <img src={quIz} />
        <div>
          <p style={{ color: `#2F327D`, fontWeight: `500`, width: `max(20vw,120px)` }}>Assessments, <span style={{ color: `#F48C06` }}>Quizzes</span> , Tests
          </p>
          <p style={{ color: `#696984`, fontSize: `min(2vw,1rem)`, margin: `0 auto` }}>Easily launch live assignments, quizzes, and
            tests. Student results are automatically entered in the online gradebook.
          </p>
        </div>
      </div>

      <div className="class">
        <div>
          <p style={{ color: `#2F327D`, fontWeight: `500`, width: `max(20vw,120px)` }}><span style={{ color: `#F48C06` }}>Class Management </span>Tools for Educators
          </p>
          <p style={{ color: `#696984`, fontSize: `min(2vw,1rem)`, margin: `0 auto` }}>Class provides tools to help run and manage
            the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.
          </p>
        </div>
        <img src={clAss} />
      </div>

      <div className="discuss" style={{ marginBottom: `24px` }}>
        <img src={disCuss} />
        <div>
          <p style={{ color: `#2F327D`, fontWeight: `500`, width: `max(20vw,120px)` }}>One-on-One <span style={{ color: `#F48C06` }}>Discussions</span></p>
          <p style={{ color: `#696984`, fontSize: `min(2vw,1rem)`, margin: `0 auto` }}>Teachers and teacher assistants can talk with
            students privately without leaving the Zoom environment.
          </p>
        </div>
      </div>

      <button style={{
        fontSize: `min(2vw,18px)`,
        width: `min(24vw,220px)`,
        height: `min(55px,5vw)`,
        backgroundColor: `transparent`,
        color: `#F48C06`,
        border: `1px solid #F48C06 `,
        display: `block`,
        margin: `0 auto`,
        fontFamily: `"Nunito Sans" , sans-serif`,
      }}>See more features</button>

      <div className="platform">
        <img src={platForm} />
        <div>
          <div style={{ display: `flex`, alignItems: `center`, gap: `10px` }}>
            <div style={{ width: `20px`, borderTop: `0.4px solid #525596`, transform: `translateY(-0.8px)` }}></div>
            <p style={{ fontSize: `min(1.8vw, 1rem)`, fontFamily: `"Nunito Sans", sans-serif`, margin: `0px`, color: `#525596` }}>INTEGRATIONS</p>
          </div>
          <p style={{ color: `#2F327D`, fontWeight: `500`, width: `max(25vw,135px)` }}>200+ educational tools and platform <span style={{ color: `#F48C06` }}>integrations</span></p>
          <p style={{ color: `#696984`, fontSize: `min(2vw,1rem)` }}>Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
          </p>
          <button style={{
            marginTop: `min(25px,2.75vw)`,
            fontSize: `min(2vw,18px)`,
            width: `min(24vw,220px)`,
            height: `min(55px,5vw)`,
            backgroundColor: `transparent`,
            color: `#F48C06`,
            border: `1px solid #F48C06 `,
            display: `block`,
            fontFamily: `"Nunito Sans" , sans-serif`,
          }}>See All Integrations</button>
        </div>
      </div>

      <Testimonial />

      <p style={{ color: `#2F327D`, fontSize: `min(3.2vw,24px)`, textAlign: `center`, paddingTop: `5vw`, margin: `1.5vw auto`, fontWeight: `bold` }}>Latest News and Resources</p>
      <p style={{ color: `#696984`, fontSize: `min(2.6vw,1.2rem)`, width: `85vw`, margin: `0 auto`, textAlign: 'center', marginBottom: `20px` }}>
        See the developments that have occurred to Skillines in the world
      </p>

      <div className="news">
          <News
              img={neWs1}
              category = {"NEWS"}
              title = {"Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution"}
              desc= {"Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."}
          />
          <div className="newsright">
            <News
              
              img={neWs2}
              category = {"PRESS RELEASE"}
              title = {"Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand"}
              desc= {"Class Technologies Inc., the company that created Class,..."}
            />
            <News 
              
              img={neWs3}
              category = {"NEWS"}
              title = {"Zoom’s earliest investors are betting millions on a better Zoom for schools"}
              desc= {"Zoom was never created to be a consumer product. Nonetheless, the..."}
            />
            <News 
              img={neWs4}
              category = {"NEWS"}
              title = {"Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms"}
              desc= {"This year, investors have reaped big financial returns from betting on Zoom..."}
            />
          </div>
      </div>

      <Footer />
      
    </>
  );
};

export default App;