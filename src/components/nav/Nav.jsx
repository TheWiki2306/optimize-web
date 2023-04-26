import React, { useState } from 'react';
// import Logo from "../../components/logo/Logo";
import Logo from "../../assets/Logo.PNG";
import "./nav.css";


const Nav = () => {
    const [active, setActive] = useState('#');
  return (
    <div className='container navContainer'>
        <img src={Logo} alt=""/>

        <div className='nav'>
            <a href="#about" onClick={() => setActive('#active')} className={active === 'about' ? 'active' : ''} >ABOUT US</a>
            <a href="#gallery" onClick={() => setActive('#active')} className={active === 'gallery' ? 'active' : ''} >GALLERY</a>
            <a href="#events" onClick={() => setActive('#active')} className={active === 'events' ? 'active' : ''}>EVENTS</a>
    </div>
    </div>
  )
}

export default Nav
