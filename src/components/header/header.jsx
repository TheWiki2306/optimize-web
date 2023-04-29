import React from 'react';
import "./header.css";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className='container headerContainer'>
      <motion.h1 className='one' 
      animate={{ scale:1 }} 
      initial={{ scale:0 }}
      transition={{type: "spring", bounce: 5}}
      
      >OPTIMIZE ENTERTAINMENT<span>.</span> </motion.h1>
      <h1 className='two'>RAVE AND GLAMOUR WHENEVER YOU CAN</h1>
    </div>
  )
}

export default Header
