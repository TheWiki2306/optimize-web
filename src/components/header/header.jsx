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
          transition={{type: "spring", bounce: 5}}
          >OPTIMIZE <span>ENTERTAINMENT.</span> </motion.h1>
        </div>
          <small>Crafting moments that are unforgettable and music that resonates far beyond the speakers.</small>
      </div>
    </div>
  )
}

export default Header
