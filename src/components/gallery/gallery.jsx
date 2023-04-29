import React, { useState } from 'react';
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
const [videos, setVideos] = useState([
  {video: vid1, isPlaying: false, id: 1},
  {video: vid2, isPlaying: false, id: 2},
  {video: vid3, isPlaying: false, id: 3},
  {video: vid4, isPlaying: false, id: 4},
  {video: vid5, isPlaying: false, id: 5}
]);

const [currIndex, setCurrIndex] = useState(0)

const toggleVideo = (index) => {
  if (currIndex !== index) {
    document.getElementById(`video${currIndex}`).pause();
  }
  const videoElm = document.getElementById(`video${index}`)
  videoElm.paused ? videoElm.play() : videoElm.pause();
  setVideos(videos.map((video, i) => {
    if (i === index) {
      return {
        ...video,
        isPlaying: !videoElm.paused
      }
    }
    if (i === currIndex) {
      return {
        ...video,
        isPlaying: false
      }
    }
    return video
  }));
  setCurrIndex(index);
}

const handleEnded = (el) => {
  el.currentTarget.currentTime = 0;
  setVideos(videos.map((video, i) => {
    if (i === currIndex) {
      return {
        ...video,
        isPlaying: false
      }
    }
    return video
  }));
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
       <video id={`video${index}`} onEnded={handleEnded}>
        <source src={video} className="vid"/>
      </video>
      <div 
   className='vidOverlay' onClick={() => toggleVideo(index)}> 
      {currIndex !== index || !videos[currIndex].isPlaying ? <BsPlayCircle /> : null}
   </div>
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
