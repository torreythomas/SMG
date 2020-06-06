import React from 'react';
import "./Mission.css"
import { Link } from "react-router-dom";
import video from '../images/JaredFacts.mp4'
import video2 from '../images/yoma.MOV'
import video3 from '../images/WeBeHoopin.mp4'
import Scroll from '../Scroll'


const Mission = () => {
    return (
        <div>
<div id="Mission-landing-section">
<div className="mission-navigation-bar">
< Link className="  link-mission animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5 link-mission home-contact-button"> We Are </p> 
</Link> 
< Link className="animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5  home-contact-button"> Contact </p> 
</Link> 
</div>

<h1 id="who-are-we-header-main-text" style={{color:"white", marginTop:"-180px", marginLeft:"75px"
}}>
    Our Mission 
  </h1>
</div>


        <div id="mission-container">
       <div className="mission-statement-container">
        <div id="mission-landing-page-video-section">
            <div className="mission-landing-page-video-section-description">
               <h1> We believe change begins with <em style={{color:"goldenrod"}}>education. </em> </h1>
               <p className="mission-landing-page-video-section-description-text"> There is no limit to the potential of a kid given a chance. We seek to use basketball and education
                   to influence a new standard in our community. 
               </p>
            </div>
        <video className="mission-video" className="shadow-5 dib" width="720" height="540"  controls>
  <source src={video} type="video/mp4"/>
  <source src={video}  type="video/mp4"/>
Your browser does not support the video tag.
</video>
         </div>
         </div>
<div className="huh">
    <h1 className="about-us"> Be the<em style={{color:"goldenrod"}}> change.</em> Be the <em style={{color:"goldenrod"}}>difference.</em> Set the <em style={{color:"goldenrod"}}>standard.</em></h1>
         <div className="our-mission-container grow shadow-5">
        <h1 className="mission-statement-header"><u> See More Good </u> </h1>
        <p className="mission-statement-text">
        SMG is an initiative designed to spread more positive images to the youth of Central Pennsylvania through the game of basketball. SMG also aims to empower the next generation with financial literacy knowledge. SMG is a lifestyle, a commitment to learn, improve, and dominate in every aspect of life. 
        
        </p>
        </div>
        <div className="goals-and-mission-container">
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
        </div>


       <div className="highlight-reel-container">
           <div className="smg-logo-flex-box">
           <div className="mission-image1">
</div>
<div className="mission-image2">
</div>
           </div>


       </div>

        </div>
        </div>
    )
}


export default Mission;