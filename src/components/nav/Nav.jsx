import React, { useState, useRef } from 'react';
import Logo from "../../assets/Logo.PNG";
import {HiMenuAlt2} from "react-icons/hi";
import {FaTimes} from "react-icons/fa";
import "./nav.css";
// import { act } from '@testing-library/react';


const Nav = () => {
    const navRef = useRef();
    
    const showNav = () => {
  navRef.current.classList.toggle("responsive");
}

const [active, setActive] = useState('#');

  return (
    <header className='navContainer'>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'events' : ''}> <img src={Logo} alt=""/> </a>
          
      <nav ref={navRef} className='nav'>
        <a href="#events" onClick={() => setActive('#active')} className={active === 'events' ? 'active' : ''}>EVENTS</a>
        <a href="#gallery" onClick={() => setActive('#active')} className={active === 'gallery' ? 'active' : ''}>GALLERY</a>
        <a href="#about" onClick={() => setActive('#active')} className={active === 'about' ? 'active' : ''}>ABOUT US</a>
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
