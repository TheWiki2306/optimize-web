import React from 'react';
import { useRef } from 'react'
// import GalleryContent from '../gallery content/GalleryContent';
import "./gallery.css";
import vid1 from "../../assets/video_1.MP4"
import vid2 from "../../assets/video_2.MP4"
import vid3 from "../../assets/video_3.MP4"
import vid4 from "../../assets/video_4.MP4"
import vid5 from "../../assets/video_5.MP4"
import {BsPlayCircle} from "react-icons/bs";

const Gallery = () => {
const videos = [
  {video: vid1},
  {video: vid2},
  {video: vid3},
  {video: vid4},
  {video: vid5}
]

const currVideoRef = useRef();

const handleClick = (elem) => {
  if(currVideoRef.current) { 
    if (currVideoRef.current.id !== elem.id) {
      currVideoRef.current.pause();
      currVideoRef.current = elem;
    }
  } else {
    currVideoRef.current = elem;
  }
  if (currVideoRef.current.paused) {
    currVideoRef.current.play()
  } else {
    currVideoRef.current.pause()
  }
}

  return (
    <>
    <div className='gallery'>
    <div className='container galleryContainer'>
      <h3>Past Events</h3>
<div className='vidsContainer'>
{
  videos.map(({video}, index) => {
    return(
     <div className='vidContainer' key={index}>
       <video id={index} onClick={(e) => handleClick(e.currentTarget)}>
        <source src={video} className="vid"/>
      </video>
      <div 
   className='vidOverlay'> <BsPlayCircle/></div>
     </div>
    )
  })
}
    </div>
    </div>
    </div>
    </>
  )
}


export default Gallery
