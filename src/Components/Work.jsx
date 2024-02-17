
import "./WorkCardStyles.css"

import React from 'react'
import pro1 from "../Assets/project1.jpg"
import { NavLink } from "react-router-dom"

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">Project Title</h2>
              <div className="pro-details">
                <p>this is paragraph</p>
                <div className="pro-btn">
                    <NavLink to="url.com" className="btn">VIEW</NavLink>
                    <NavLink to="url.com" className="btn">SOURCE</NavLink>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Work