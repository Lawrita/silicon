
import "./HeroImgStyle.css"
import introImg from "../Assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg=()=>{
    return ( 
    <div className="hero">
         <div className="mask">
             <img className="into-img" src={introImg} alt="introImg"/>
         </div>
         
         <div className="content">
             <p>HI. IM A FRONTEND DEVELOPER  </p>
            <h1>html, css, javascript and react</h1>
            <div>
                <Link to="/Project" className="btn">PROJECT</Link>
                <Link to="/Contact" className="btn-light">CONTACT</Link>
                
            </div>
         </div>

         
    </div>
    )
}
export default HeroImg