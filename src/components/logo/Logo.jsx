import React from 'react';
import LogoImage from "../../assets/Logo.PNG";
import "./logo.css";


const Logo = () => {
  return (
    <div className='container logoContainer'>
      <img src={LogoImage} alt="Brand Logo" />
    </div>
  )
}

export default Logo
