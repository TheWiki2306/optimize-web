import React from 'react';
import "./eventsShots.css";
import img_1 from "../../assets/event_1.jpg";
import img_2 from "../../assets/event_2.jpg";
import img_3 from "../../assets/event_3.jpg";
import img_4 from "../../assets/event_4.jpg";
import img_5 from "../../assets/event_5.jpg";



const EventsShots = () => {
const images = [
  {image: img_1},
  {image: img_2},
  {image: img_3},
  {image: img_4},
  {image: img_5}
]


  return (
<div className='eventContainer'>
    <div className='container shotsContainer'>
      <h3>EVENT SNAPSHOT</h3>
      <div className='eventSnaps'>
        {
          images.map(({image}, index) => {
            return(
              <div key={index} className="snaps">              
                <img src={image} alt="" />
                  </div>

            )
          } )
}
      </div>
    </div>
    </div>
  )
}

export default EventsShots
