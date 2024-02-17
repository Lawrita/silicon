import React from "react";
import Navbar from "../Components/Navbar"
import HeroImgg2 from "../Components/HeroImgg2"
import PricingCard from "../Components/PricingCard"
import Work from "../Components/Work";
import Footer from "../Components/Footer";

const Project =()=>{
    return(
<div>
    <Navbar />
    <HeroImgg2 heading="PROJECT." text="some of my most recent works" />
    <Work />
    <PricingCard />
    <Footer />
</div>
    ) 
}
export default Project