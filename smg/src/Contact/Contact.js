import React from 'react';
import "./contact.css"
import video from '../images/WeBeHoopin.mp4'
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div>
            <div className="navigation-bar-centered">
            < Link className=" link-mission animate__animated animate_Bounce" to="/Mission"> 
          <p className=" grow shadow-5 link-mission home-contact-button"> Mission </p> 
</Link> 
< Link className="animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5  home-contact-button"> We Are </p> 
</Link> 
</div>
<div className="contact-label-flex-item">
<h1 className="contact"> The SMG Way || 🚀</h1>
</div>

       <div className="contact-us">
     <video id="myvideo" className="shadow-5 dib" autoPlay loop>
  <source src={video} type="video/mp4"/>
  <source src={video}  type="video/mp4"/>
Your browser does not support the video tag.
</video>
       </div>
       <div className="video-overlay">
           
       </div>
<div className="contact-smg-container" style={{background:"white"}}>
<div className="standard-container-2">
    <h1 className="about-us"> Want to join  <em style={{color:"goldenrod"}}> SMG? </em></h1>

            <div className="our-mission-container grow shadow-5">
        <h1 className="mission-statement-header"><u> Contact Us</u> </h1>
        <p className="mission-statement-text-contact">
        <i class="fab fa-instagram"></i> : @smg.foundation <br/>
        <i class="far fa-envelope"></i> : destinedfordollars@gmail.com <br/>
        <i class="fas fa-phone"></i> : 717-318-8914        
</p>
        </div>
        </div>


        <div  className="our-mission-container grow shadow-5" >
        <h1 className="about-us"> Some questions you might be asked by  <em style={{color:"goldenrod"}}> SMG </em></h1>

          <p className="smg-questions">

Growing up hooping, who was a role model for you in terms of basketball growing up? When did you really get serious about it? <br/>

What made you decide to become a teacher?<br/>

You are going to be a coach, what would you say is your coaching philosophy and where did you get it from? <br/>

Why do you think there are so few black men teachers? What can be done to make it a more popular option for black men to choose?<br/>

If you were speaking to your 8th grade self, what piece of advice would you give yourself? <br/>
          </p>
          </div>


       <div className="highlight-reel-container">
           <div className="smg-logo-flex-box">
<div className="mission-image2">
</div>
<div className="mission-navigation-bar">
< Link className="animate__animated animate_Bounce" to="/Mission"> 
          <p className=" grow shadow-5  home-contact-button"> Mission </p> 
</Link> 
< Link className="  link-mission animate__animated animate_Bounce" to="/WWA"> 
          <p className=" grow shadow-5 link-mission home-contact-button"> We Are </p> 
</Link> 

</div>

           </div>


       </div>

</div>



       </div>
    )
}

export default Contact;