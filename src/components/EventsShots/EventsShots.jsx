import { React, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


return (
  <div className='eventContainer' id='events'>
    <div className='container shotsContainer'>
      <h3>Event Snapshots</h3>

      <Carousel className='eventSnaps' responsive={responsive}>
        {
          images.map(({image}, index) => {
            return(
              <div key={index} className="snaps">              
                <img src={image} alt="" />
              </div>
              )
            })
        }
        </Carousel>
      </div>
  </div>
  )
}

export default EventsShots
