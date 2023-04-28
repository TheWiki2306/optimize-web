import React, { useRef } from 'react';
// import Logo from "../../components/logo/Logo";
import Logo from "../../assets/Logo.PNG";
import {HiMenuAlt2} from "react-icons/hi";
import {FaTimes} from "react-icons/fa";
import "./nav.css";


const Nav = () => {
    const navRef = useRef();
    
    const showNav = () => {
  navRef.current.classList.toggle("responsive");
}

  return (
    <header className='container navContainer'>
        <img src={Logo} alt=""/>
          
        <nav ref={navRef} className='nav'>
            <a href="#about">ABOUT US</a>
            <a href="#gallery">GALLERY</a>
            <a href="#events">EVENTS</a>
   <button className='navBtn navCloseBtn' onClick={showNav}>
      <FaTimes/>
      </button>
</nav>

    <button className='navBtn' onClick={showNav}>
      <HiMenuAlt2/>
      </button>
    </header>
  )
}

export default Nav
