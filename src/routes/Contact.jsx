import React from "react";
import Navbar from "../Components/Navbar"
import HeroImgg2 from "../Components/HeroImgg2"
import Footer from "../Components/Footer";
import Form from "../Components/Form";

const Contact =()=>{
    return(
        <div>
            <Navbar />
            <HeroImgg2  heading="CONTACT." text="Lets have a chat"/>
            <Form />
            <Footer />
        </div>
            ) 
}
export default Contact