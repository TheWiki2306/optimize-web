import React from 'react';
import './contact.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiPhoneOutgoing } from 'react-icons/bs';

const Contact = () => {
  return (
    // <div className='contactMainContainer'> 
        <div className='container contactContainer' id='contact'>
            <p>Contact us:</p>
            <div className='contactLinks'>
                <a href='https://instagram.com/optimize_entertainment?igshid=NTc4MTIwNjQ2YQ=='><AiOutlineInstagram/></a>
                <a href="+2348182785577"><BsTelephone/>:+2348182785577</a>
                <a href="+2349028112744"><BsTelephone/>:+2349028112744</a>
            </div>

            <small>&copy; 2023 - optimize ent. All rights reserved.</small>
        </div>
    // </div>
  )
}

export default Contact;