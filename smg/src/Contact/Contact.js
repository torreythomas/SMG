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
     <video id="myvideo" className="shadow-5 dib"  autoPlay loop>
  <source src={video} type="video/mp4"/>
  <source src={video}  type="video/mp4"/>
Your browser does not support the video tag.
</video>
       </div>
       <div className="video-overlay">
           
       </div>
       </div>
    )
}

export default Contact;