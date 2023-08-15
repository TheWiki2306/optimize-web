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
    <div className='navMainContainer'>
    <header className='container navContainer'>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'events' : ''}> <img src={Logo} alt=""/> </a>
          
      <nav ref={navRef} className='nav'>
        <a href="#events" onClick={() => setActive('#active')} className={active === 'events' ? 'active' : ''}>Events</a>
        <a href="#gallery" onClick={() => setActive('#active')} className={active === 'gallery' ? 'active' : ''}>Gallery</a>
        <a href="#about" onClick={() => setActive('#active')} className={active === 'about' ? 'active' : ''}>About Us</a>
        <a href='#contact' onClick={() => setActive('#active')} className={active === 'contact' ? 'active' : ''}>Contact</a>       
        <button className='navBtn navCloseBtn' onClick={showNav}>
          <FaTimes/>
        </button>
      </nav>

      {/* <div className='navSubContainer'>
        <a href="#events" onClick={() => setActive('#active')} className={active === 'events' ? 'active' : ''}>Events</a>
      </div> */}
      <button className='navBtn' onClick={showNav}>
        <HiMenuAlt2/>
      </button>
    </header>
    </div>
  )
}

export default Nav
