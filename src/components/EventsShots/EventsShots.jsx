import { React, useState } from 'react';
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img_1 from "../../assets/img_opt1.jpg";
import img_2 from "../../assets/optImg_2.jpg";
import img_3 from "../../assets/optImg_3.jpg";
import img_4 from "../../assets/custom_resized_216ddbed-0964-4530-8626-43031e9f99f6.jpeg";
import img_5 from "../../assets/custom_resized_48033bc5-2d9c-4f04-9027-4e79fecc2a13.jpeg";
import img_6 from "../../assets/custom_resized_8d807a3a-37d0-4d30-88e3-137d1773811f.jpeg";
import img_7 from "../../assets/custom_resized_93e5f035-c69b-43e4-b122-71d29fef2a2d.jpeg";
import img_8 from "../../assets/custom_resized_d15794c6-d2c6-449f-abe6-a7846b32142a.jpeg";
import img_9 from "../../assets/img_opt2.jpg";
import img_10 from "../../assets/optresized_1.jpg";
import img_11 from "../../assets/resizedimg3prime.jpg";
import img_12 from "../../assets/09CB1FBF-00EE-439A-9536-9529C357624E.JPG";
import img_13 from "../../assets/0E4BBCE5-F7E8-444F-BB25-D23CDEC88591.JPG";
import img_14 from "../../assets/1BFE6942-1433-45F1-9E58-9C93F8B59C43.JPG";
import img_15 from "../../assets/3256BD53-7635-491F-861B-FD5A4264F798.JPG";
import img_16 from "../../assets/new_1.JPG";
import img_17 from "../../assets/48029F02-71C7-423B-AF2E-8349417748F7.JPG";
import img_18 from "../../assets/5661C763-C36E-497C-835D-FAE1B1A9813F.JPG";
// import img_19 from "../../assets/592AA624-E208-471F-8CA8-F3E7201AD208.JPG";
import img_20 from "../../assets/new_2.JPG";
import img_21 from "../../assets/726EA320-B700-46D5-B773-23E9397B942B.JPG";
// import img_22 from "../../assets/new_3.JPG";
// import img_23 from "../../assets/new_4.JPG";
// import img_24 from "../../assets/new_5.JPG";
// import img_25 from "../../assets/C9128BF6-6C0D-452F-B3C7-4A17312F33C3.JPG";
import img_26 from "../../assets/new_6.JPG";
import img_27 from "../../assets/new_7.JPG";
import img_28 from "../../assets/new_8.JPG";
import img_29 from "../../assets/new_9.JPG";
import img_30 from "../../assets/new_10.JPG";


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
  {image: img_9},
  {image: img_10},
  {image: img_11},
  {image: img_12},
  {image: img_13},
  {image: img_14},
  {image: img_15},
  {image: img_16},
  {image: img_17},
  {image: img_18},
  // {image: img_19},
  {image: img_20},
  {image: img_21},
  // {image: img_22},
  // {image: img_23},
  // {image: img_24},
  // {image: img_25},
  {image: img_26},
  {image: img_27},
  {image: img_28},
  {image: img_29},
  {image: img_30}


]


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
      {
          breakpoint: 1024,
          settings: {
              dots: true,
              infinite: true,
              slidesToShow: 4,
              slidesToScroll: 1,
          }
      },

      {
          breakpoint: 820,
          settings: {
              dots: true,
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 600,
          settings: {
              dots: true,
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 414,
          settings: {
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 400,
          settings: {
              dots: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      }
  ]
};


return (
  <div className='eventContainer' id='events'>
    <div className='container eventSnaps'>

      <Slider className='' {...settings}>
        {
          images.map(({image}, index) => {
            return(
              <div key={index} className="snaps">              
                <img src={image} alt="" />
              </div>
              )
            })
        }
        </Slider>
      </div>
  </div>
  )
}

export default EventsShots
