import React from 'react';
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className='mainHeader'>
      <div className='container headerContainer'>
        <div className='optimizeContainer'>
          <motion.h1 className='one' 
          animate={{ scale:1 }} 
          initial={{ scale:0 }}
          transition={{type: "spring", bounce: 1}}
          >
            <h1> OPTIMIZE <span>ENTERTAINMENT.</span> </h1></motion.h1>
        </div>
        <div className='scroll'>
            <p>Crafting moments that are unforgettable and music that resonates far beyond the speakers.</p>
        </div>  
      </div>
      
    </div>
  )
}

export default Header
