import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import Reat from "../Assets/working.avif";
import Rete from "../Assets/codes.avif";

const AboutContent = () => {
  return (
    <div className="About">
         <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a react front-end Developer. I create responsive secure websites for my clients.</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
         </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Reat} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Rete} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent