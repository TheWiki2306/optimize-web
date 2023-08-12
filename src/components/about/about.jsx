import React from 'react';
import "./about.css";
import img_1 from "../../assets/event_4.jpg";


const About = () => {
  return (
    <div className='container aboutContainer' id='about'>
      <h3>WHAT WE DO</h3>
   
        <article className='evt'>
          <h4>Event Management</h4>
            <div className='evt_container'>
              <img src={img_1} alt="" />
                <p>With attention to detail and a creative flair, we curate events that resonate with our unique style and preferences. 
                  From concert management, and album listening parties to intimate gatherings to grand celebrations,
                   we handle every aspect – from conceptualization to execution – ensuring a seamless and memorable experience for our guests.
                   We pride ourselves on crafting immersive environments that reflect your aspirations, making every event a masterpiece.</p>
            </div>
        </article>
      </div>
  )
}

export default About
