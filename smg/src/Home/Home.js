import React from 'react';
import "./Home.css"
import { Link } from "react-router-dom";
import WWA from "../WWA/WWA"

const Home = () => {

return(
    <div>
   <section className="home-main-section-container">
   <div className="home-flex-container">
        <div className="home-column item1"> 
            <h1 className=" home-smg-title see  animate__animated"> <b className="S">S</b>.EE</h1>
            <h1 className="home-smg-title more"> <b className="S">M</b>.ORE</h1>
            <h1 className="home-smg-title good"> <b className="S">G</b>.OOD</h1>
            <p className="home-smg-description">
        An initiative designed to spread more positive images to the youth of Central Pennsylvania through the game of basketball and financial literacy knowledge. </p>
       <Link className="nav-link   grow  animate__animated animate_Bounce" to="/WWA"> 
        <a className=" grow home-contact-button">Who Are We?
       
</a> 
</Link> 
        </div>
  <div className="home-column item2 grow dib shadow5"></div>
  <div className="home-column item3 grow dib shadow5"></div>
  <div className="home-column item4 grow dib shadow5"></div>
</div>
</section>
</div>

)

}

export default Home;
