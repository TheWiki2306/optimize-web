import React, { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../../assets/event_1.jpg";
import img2 from "../../assets/event_2.jpg";
import img3 from "../../assets/event_3.jpg";
import img4 from "../../assets/event_4.jpg";
import img5 from "../../assets/event_5.jpg";
import './initiative.css';


const Initiative = () => {
   
  const [currentSlide, setCurrentSlide] = useState(0);

  // const handlePrevious = () => {
  //   setCurrentSlide((prevSlide) => prevSlide - 1);
  // };

  // const handleNext = () => {
  //   setCurrentSlide((prevSlide) => prevSlide + 1);
  // };

  const settings = {
    showArrows: true,
    showStatus: false,
    showIndicators: true,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: false,
    // selectedItem: currentSlide,
    // onChange: setCurrentSlide,
  };

        const init_images = [
        {image: img1},
        {image: img2},
        {image: img3},
        {image: img4},
        {image: img5},
    ]

    
return (
    <div className='initiative'>
    <div className='container'>
    <div className='initiativeContainer'>
      <h3>OUR INITIATIVES</h3>

      <div className='initiativeInnerContainer'>
       <div>
        <Carousel  className='initiativeSlider' {...settings}>
          {
             init_images.map(({image}, index) => {
           return(
                 <div className='initImage' key={index}><img src={image} alt="" /></div>
             )
            })
          }
    </Carousel>
    </div>
    {/* <button disabled={currentSlide === 0} onClick={handlePrevious}>
        Previous
      </button>
      <button disabled={currentSlide === init_images.length - 1} onClick={handleNext}>
        Next
      </button> */}

<div className='initiativeText'>
    <h4>FEED A MOUTH</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium ratione laborum iure minima debitis quae 
    autem mollitia, exercitationem, quo veritatis cumque facilis iusto reiciendis quod, 
    ipsam fugit delectus reprehenderit ut!
    </p>
</div>
      </div>
      </div>
      <small>If you cannot feed a hundred people, then feed just one - Adedoyin Faleye, CE0.</small>
    </div>
    </div>
  )
}


export default Initiative;
