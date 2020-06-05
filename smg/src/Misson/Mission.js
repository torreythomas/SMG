import React from 'react';
import "./Mission.css"
import { Link } from "react-router-dom";
import video from '../images/JaredFacts.mp4'
import video2 from '../images/yoma.MOV'
import video3 from '../images/WeBeHoopin.mp4'
import image from "../images/SMG\ Day\ Flyer.jpg.jpeg"


const Mission = () => {
    return (
        <div>
<div id="Mission-landing-section">
<div className="mission-navigation-bar">
< Link className="  link-mission animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5 link-mission home-contact-button"> We Are </p> 
</Link> 
< Link className="   animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5  home-contact-button"> Contact </p> 
</Link> 
</div>

<h1 id="who-are-we-header-main-text" style={{color:"black"}}>
    Our Mission
  </h1>
</div>
        <div id="mission-container">
        <h1 className="we-are-on-a-mission"> We Are On A Mission </h1>
        <p className="a-meassage-from-jared"> <em>A message from Jared Young of the SMG family on the education system.</em></p>
       <div className="mission-statement-container">
        <div id="mission-landing-page-video-section">
        <video className="mission-video" className="shadow-5 dib" width="720" height="540"  controls>
  <source src={video} type="video/mp4"/>
  <source src={video}  type="video/mp4"/>
Your browser does not support the video tag.
</video>
         </div>
         <div id="mission-landing-page-video-section">
        <div className="mission-image3-video-section grow">
                    
                    </div>
         </div>
         </div>
            <div className="photo-container  ba bw4 shadow-5">
                <div className=" mission-image1 grow">

                </div>
                <div className="mission-image2 grow">
                    
                    </div>
                    <div className="mission-image3 grow">
                    
                    </div>
                    <div className="mission-image4 grow">
                    
                    </div>
            </div>
<h1 className="see-more-good-in-our-community"> We Desire to See More <em> GOOD </em> in our community</h1>
<div className="our-mission-container grow shadow-5">
        <h1 className="mission-statement-header"><u> SMG </u> </h1>
        <p className="mission-statement-text">
        SMG is an initiative designed to spread more positive images to the youth of Central Pennsylvania through the game of basketball. SMG also aims to empower the next generation with financial literacy knowledge. SMG is a lifestyle, a commitment to learn, improve, and dominate in every aspect of life. 
        
        </p>
        </div>
        <div className="our-goals-container grow shadow-5">
        <h1 className="our-goals-header"><u> Goals</u> </h1>
        <p className="our-goals-text">
        We will use the game of basketball to provide an outlet to our youth so that they can escape violence, negativity, financial illiteracy, and division. We will hold events that bring our community light, happiness, and fun. We will allow everyone who comes in contact with our organization to see the good in life. 
        </p>
        </div>
        <div className="our-mission-container grow shadow-5">
        <h1 className="mission-statement-header"><u> Mission</u> </h1>
        <p className="mission-statement-text">
        The cup of life can either be half-full or half-empty, it’s all about perspective. We at SMG choose to see the good in life, and our mission is to spread optimism and hope to the youth of central Pennsylvania through the game of basketball. 
        
        </p>
        </div>


        </div>

        <h1 className="we-are-on-a-mission"> Using Basketball to transform and shift the narrative </h1>

        <div id="mission-landing-page-video-section">
        <video className="mission-video" 
        style={{ backgroundColor: "rgba(0,0,0,0.5"}} ßclassName="shadow-5 dib" width="720" height="540"  controls>
  <source src={video2} type="video/mp4"/>
  <source src={video2}  type="video/mp4"/>
Your browser does not support the video tag.
</video>
         </div>


         <h1 className="we-are-on-a-mission"> Upcoming Events </h1>

<p className="click-to-register"> Click to register </p>
<a href="https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSevvWnoGsAQdbIRw_5L8AhkE2bK7pI4bAFIwWvvkqTY-XEc-g%2Fviewform&e=ATOWiftUFe3CWbTh5_6Lh1fd2TzElYu6m5pilMwL0S07e3lDYpBAvYSkewHDMTCgSiGfPWjzrRC6kguS&s=1" className="a-mission-link">
<img src={image} className="images" ></img>
</a>
 


        </div>
    )
}


export default Mission;