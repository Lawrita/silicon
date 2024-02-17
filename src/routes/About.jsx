import React from "react";
import Navbar from "../Components/Navbar"
import HeroImgg2 from "../Components/HeroImgg2"
import AboutContent from "../Components/AboutContent"
import Footer from "../Components/Footer";

const About =()=>{
    return(
<div>
    <Navbar />
    <HeroImgg2  heading="ABOUT." text="im a friendly Front-End Developer."/>
    <AboutContent />
    <Footer />
</div>
    ) 
    
}
export default About