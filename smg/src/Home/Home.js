import React from 'react';
import "./Home.css"
import Navbar from "../Nav/Nav"

const Home = () => {

return(
    <div>
        <div className="home-navigation-display-container">
   <Navbar />
   </div>
   <section className="home-main-section-container">
   <div className="home-flex-container">
        <div className="home-column item1"> 
            <h1 className="home-smg-title"> S.EE</h1>
            <h1 className="home-smg-title more"> M.ORE</h1>
            <h1 className="home-smg-title"> G.OOD</h1>
            <p className="home-smg-description">
        An initiative designed to spread more positive images to the youth of Central Pennsylvania through the game of basketball and financial literacy knowledge. </p>
            <a className=" grow home-contact-button" href="mailto:destinedfordollars@gmail.com">Contact Us</a> 
        </div>
  <div className="home-column item2 shadow5"></div>
  <div className="home-column item3 shadow5"></div>
</div>
</section>
</div>

)

}

export default Home;
