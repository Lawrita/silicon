import "./FooterStyles.css"
import React from "react";
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


const Footer=()=>{
    return(
<div className="footer">
    <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}} />
                <div>
                    <p>NO6 Odums Street Alakiah, Port Harcourt</p>
                    <p>Rivers State</p>
                </div>
            </div>
            <div className="email">
              <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}} />
              georgediamond68@gmail.com</h4>
            </div>

            <div className="phone">
              <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}} />
              +234-7051-595-954</h4>

            </div>
        </div>



        <div className="right">
            <h4>About Myself</h4>
            <p>frontend developer with the knowledge of html,css,javascript,react
            </p>
            <div className="social">
               <div className="phone">
                  <h4><FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    george lawrita</h4>
             
                  <h4><FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    diamond</h4>
              
                  <h4><FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    george lawrita</h4>
              
                  <h4><FaInstagram size={30} style={{color: "#fff", marginRight: "1rem"}} />
                    diamo_nd5488</h4>
             
               </div>
            </div>
        </div>
    </div>
</div>
    )
}
export default Footer