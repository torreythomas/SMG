import React from 'react';
import "./Mission.css"
import { Link } from "react-router-dom";


const Mission = () => {
    return (
        <div id="mission-container dib">
            <div className="photo-container  ba bw4 shadow-5">
                <div className=" mission-image1">

                </div>
                <div className="mission-image2">
                    
                    </div>
                    <div className="mission-image3">
                    
                    </div>
                    <div className="mission-image4">
                    
                    </div>
            </div>
<h1 className="see-more-good-in-our-community"> We Desire to See More <em> GOOD </em> in our community</h1>
        <div className="our-mission-container">
        <h1 className="mission-statement-header"> Mission</h1>
        <p className="mission-statement-text">
        The cup of life can either be half-full or half-empty, it’s all about perspective. We at SMG choose to see the good in life, and our mission is to spread optimism and hope to the youth of central Pennsylvania through the game of basketball. 
        
        </p>
        </div>
        <div className="our-goals-container">
        <h1 className="our-goals-header"> Goals </h1>
        <p className="our-goals-text">
        We will use the game of basketball to provide an outlet to our youth so that they can escape violence, negativity, financial illiteracy, and division. We will hold events that bring our community light, happiness, and fun. We will allow everyone who comes in contact with our organization to see the good in life. 
        </p>
        </div>

        </div>
    )
}


export default Mission;