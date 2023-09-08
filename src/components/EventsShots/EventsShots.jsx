import { React, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img_1 from "../../assets/optImg_1.jpg";
import img_2 from "../../assets/optImg_2.jpg";
import img_3 from "../../assets/optImg_3.jpg";
import img_4 from "../../assets/custom_resized_216ddbed-0964-4530-8626-43031e9f99f6.jpeg";
import img_5 from "../../assets/custom_resized_48033bc5-2d9c-4f04-9027-4e79fecc2a13.jpeg";
import img_6 from "../../assets/custom_resized_8d807a3a-37d0-4d30-88e3-137d1773811f.jpeg";
import img_7 from "../../assets/custom_resized_93e5f035-c69b-43e4-b122-71d29fef2a2d.jpeg";
import img_8 from "../../assets/custom_resized_d15794c6-d2c6-449f-abe6-a7846b32142a.jpeg";
import img_9 from "../../assets/custom_resized_e5bd787c-13fa-4a44-b57e-291ada22a9b3.jpeg";

import "./eventsShots.css";



const EventsShots = () => {
const images = [
  {image: img_1},
  {image: img_2},
  {image: img_3},
  {image: img_4},
  {image: img_5},
  {image: img_6},
  {image: img_7},
  {image: img_8},
  {image: img_9}
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
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
