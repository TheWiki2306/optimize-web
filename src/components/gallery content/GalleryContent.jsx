import React from 'react';
import Slider from "react-slick";
import Vid_1 from "../../assets/video_1.MP4";
import Vid_2 from "../../assets/video_2.MP4";
import Vid_3 from "../../assets/video_3.MP4";
import Vid_4 from "../../assets/video_4.MP4";
import Vid_5 from "../../assets/video_5.MP4";
import './galleryContent.css';

const GalleryContent = () => {
    const videos = [
        {video: Vid_1},
        {video: Vid_2},
        {video: Vid_3},
        {video: Vid_4},
        {video: Vid_5}
    ]
    
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                breakpoint: 768,
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
            }
         
        ]
    };
   
  return (
    <Slider className="container vid__container" {...settings}>
{
    videos.map(({ video }, index) => {
        return (
            <div key={index}>
               <video controls>
                <source src={video}/>
               </video>
            </div>
        )
    })


}
    </Slider>
  )
}

export default GalleryContent