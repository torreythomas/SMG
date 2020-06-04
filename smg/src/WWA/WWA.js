import React from 'react';
import "./WWA.css"
import { Link } from "react-router-dom";
import Mission from "../Misson/Mission"


const WWA = () => {

return(
 <div>
<div id="WWA-landing-section">
< Link className="grow nav-link-wwa animate__animated animate_Bounce" to="/Mission"> 
        <a className="home-contact-button grow "> Our Mission </a> 
</Link> 
  <h1 id="who-are-we-header-main-text">
    Who We Are
  </h1>
  <a href="#descriptions-begin" id="scroll-to-see"> See Below</a>
</div>

   <div className="flex-row">
     <div className="flex-image-1 grow dib shadow">

     </div>
     <div id="descriptions-begin" className="WWA-description">
<h1 className="wwa-personal-header"> Jared Young </h1>
<p className="wwa-personal-description">  a rising Senior at Princeton majoring in Politics, with a minor in African American studies. Jared graduated from Episcopal High School in VA, where he won the varsity basketball coaches award, was an honor roll student every semester, and served as a Senior Monitor, among many other extracurriculars. In college he has continued to pursue his passion for basketball by being a youth basketball coach in the community, serving as a practice player for Princeton’s nationally-ranked women’s basketball team, and by serving as the captain of Princeton Club Basketball.  He has pursued his passion for business by maintaining a 3.7 GPA, while working internships at Morgan Stanley, Martha’s Table, and McKinsey, while also being a Management Leadership for Tomorrow fellow, among other things. He one day hopes to be a CEO of a sports team or the Commissioner of the NBA.  </p>
     </div>
   </div>
   
   <div className="flex-row2">
     <div className="flex-image-2 grow dib shadow">
     </div>
     <div className="WWA-description">
<h1 className="wwa-personal-header"> Jaime Orr </h1>
<p className="wwa-personal-description">  a rising Junior at Central Penn College, majoring in Business. Jaime graduated from York Catholic High School, where he played Varsity Basketball and was an honor roll student. Mr. Orr has continued his athletic career in college, playing point guard for Central Penn College’s Men’s Basketball team. He is passionate about his community and plans to be a community leader and organizer in the future.  </p>
     </div>
   </div>

 
   <div className="flex-row">
     <div className="flex-image-3 grow dib shadow">
     </div>
     <div className="WWA-description">
<h1 className="wwa-personal-header"> Melik Martin </h1>
<p className="wwa-personal-description">  a rising Senior at Monmouth University, majoring in Business Marketing. Melik graduated from York Catholic High School, where he played Varsity Basketball and was an all-county and all-district performer. Melik chose to continue his athletic career with the Monmouth Hawks, after mulling over a myriad of scholarship offers. Melik is extremely passionate about community service, marketing, and basketball. After a professional basketball career, Melik wants to run his own business and be a philanthropist.   </p>
     </div>
   </div>
    
   <div className="flex-row2">
     <div className="flex-image-4 grow dib shadow">
     </div>
     <div className="WWA-description">
<h1 className="wwa-personal-header"> Jalen Gorham </h1>
<p className="wwa-personal-description"> a rising Sophomore at Saint Michael’s College, majoring in Business Administration with minors in Political Science and Accounting. Jalen graduated from the MacDuffie School in MA, where he played on a nationally-ranked basketball team. Earlier in his high school career, Mr. Gorham was an all-state performer and district champion at York Country Day School. Mr. Gorham has elected to continue his playing career at Saint Michael’s, where he is a small forward for the Knights. Jalen wants to pursue professional basketball opportunities, after which he has his sights set on being an accountant or a financial advisor. 
  </p>
     </div>
   </div>


   <div className="flex-row">
     <div className="flex-image-5 grow dib shadow">
     </div>
     <div className="WWA-description">
<h1 className="wwa-personal-header"> Yoma Onobrakpeya </h1>
<p className="wwa-personal-description">  a rising Senior at Drexel University, majoring in Finance. Yoma was a varsity basketball player and honor roll student at Mercersburg Academy (PA). Upon graduation, Yoma decided upon Drexel for it’s reputable co-op program, where students get to work internships as a part of their graduation requirements. Mr. Onobrakpeya has been a Dean’s List Student at Drexel’s Lebow School of Business and has secured an internship with LMI Philly. He maintains his passion for basketball by being a practice player for Drexel’s Women’s Basketball team and by participating in Big 6 intramural competition. He one day hopes to be the CEO of a Fortune 500 company.   </p>
     </div>
   </div>
    

   <div className="flex-row2">
     <div className="flex-image-6 grow dib shadow">
     </div>
     <div className="WWA-description">
<h1 className="wwa-personal-header"> Torrey Thomas </h1>
<p className="wwa-personal-description">  a success-minded Software Engineer based in Washington D.C. Torrey graduated from York Catholic High School and attended the Catholic University of America, earning a 3.3 GPA as an English major before deciding to drop-out in order to pursue a career in the ever-growing professional field of technology. In just three months, he was able to become a certified Full-Stack Software Developer in the competitive D.C. market. Torrey dedicates his time to creating websites for non-profit organizations and start-up businesses.
 Torrey hopes to empower underrepresented communities to engage in the STEM professions and hopes to become a Senior Developer at a top tech mogul. </p>
     </div>
   </div>


   <div className="flex-row">
     <div className="flex-image-7 grow dib shadow">
     </div>
     <div className="WWA-description">
<h1 className="wwa-personal-header"> Kevin Duncan </h1>
<p className="wwa-personal-description">  
"Just write anything. Hype me up. And include proud African American". Kevin Duncan's laidback demeanor on the surface proves that 
one shouldn't judge a book by it's cover. Kevin is the SMG official photographer. A rising junior, Kevin is a multi-faceted professional with a background in business and military as well. Kevin is currently a Private 2 US Military.  He claims that his wingspan is larger than Lebron James' wingspan, so basically, he is better than Lebron James.  </p>
     </div>
   </div>

</div>
)

}

export default WWA;
