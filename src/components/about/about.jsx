import React from 'react';
import "./about.css";
import img_1 from "../../assets/event_4.jpg";


const About = () => {
  return (
    <div className='container aboutContainer'>
      <h3>WHAT WE DO</h3>
   
    <article className='evt'>
    <h4>Event Management</h4>
    <img src={img_1} alt="" />
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Quae a repellendus mollitia similique corporis accusantium veritatis aliquid. 
        Voluptatum quis reprehenderit iusto? Sunt, at rem veritatis odio repellat nesciunt illo explicabo 
        autem omnis numquam, dolor saepe suscipit exercitationem. Amet, autem molestias.</p>
      </article>
      </div>
  )
}

export default About
