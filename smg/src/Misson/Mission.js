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


<div className="see-more-good-day-registration">
    <div>
<div className="smgday-description grow shadow-5"> 
        <h1 style={{color:"goldenrod"}}> See More Good Day</h1>
        <p className="smg-day-text"> SMG day is an event we are hosting to enlighten and uplift our youth through basketball, financial literacy, and injury prevention. The event is for boys grades 4-10 and girls middle school. If this interests you, take a moment and click on the picture above and fill out our google registration form.</p>
    </div>
</div>
<a href="https://docs.google.com/forms/d/e/1FAIpQLSevvWnoGsAQdbIRw_5L8AhkE2bK7pI4bAFIwWvvkqTY-XEc-g/viewform"><div className="mission-image-smg-fund "></div>  </a>       

</div>


<div className="social-media-content">
    <h1 className="instagram-label" style={{textAlign:"center"}}> Follow our Instagram page for the latest updates and activity </h1>
    <a className="grow shadow-5" href="https://www.instagram.com/smg.foundation/?hl=en"> <div className="mission-image-instagram"></div>   </a>       
</div>
        <div id="mission-container">
       <div className="mission-statement-container">
        <div id="mission-landing-page-video-section">
            <div className="mission-landing-page-video-section-description">
               <h1> We believe change begins with <em style={{color:"goldenrod"}}>education. </em> </h1>
               <p className="mission-landing-page-video-section-description-text">  A statement from Jared Young on the education system
               </p>
            </div>
        <video className="mission-video" className="shadow-5 dib" width="720" height="540"  controls>
  <source src={video} type="video/mp4"/>
  <source src={video}  type="video/mp4"/>
Your browser does not support the video tag.
</video>
         </div>
         </div>
<div className="change-container">
<div className="mission-image1"></div>         
<div className="our-mission-container grow shadow-5">
        <h1 className="mission-statement-header"><u> See More Good </u> </h1>
        <p className="mission-statement-text">
        SMG is an initiative designed to spread more positive images to the youth of Central Pennsylvania through the game of basketball. SMG also aims to empower the next generation with financial literacy knowledge. SMG is a lifestyle, a commitment to learn, improve, and dominate in every aspect of life. 
        
        </p>
        </div>
        </div>
        <div className="difference-container">
    <h1 className="about-us">Our <em style={{color:"goldenrod"}}> goals</em> at SMG</h1>
        <div className="our-goals-container grow shadow-5">

        <h1 className="our-goals-header"><u> Goals</u> </h1>
        <p className="our-goals-text">
        We will use the game of basketball to provide an outlet to our youth so that they can escape violence, negativity, financial illiteracy, and division. We will hold events that bring our community light, happiness, and fun. We will allow everyone who comes in contact with our organization to see the good in life. 
        </p>
        </div>
            </div>
            <div className="standard-container">
    <h1 className="about-us"> We are driven by our <em style={{color:"goldenrod"}}> mission </em></h1>

            <div className="our-mission-container grow shadow-5">
        <h1 className="mission-statement-header"><u> Mission</u> </h1>
        <p className="mission-statement-text">
        The cup of life can either be half-full or half-empty, it’s all about perspective. We at SMG choose to see the good in life, and our mission is to spread optimism and hope to the youth of central Pennsylvania through the game of basketball. 
        </p>
        </div>
        </div>
           


     

       <div className="highlight-reel-container">
           <div className="smg-logo-flex-box">
<div className="mission-image2">
</div>
<div className="mission-navigation-bar">
< Link className="  link-mission animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5 link-mission home-contact-button"> We Are </p> 
</Link> 
< Link className="animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5  home-contact-button"> Contact </p> 
</Link> 
</div>

           </div>


       </div>

        </div>
        </div>
    )
}


export default Mission;