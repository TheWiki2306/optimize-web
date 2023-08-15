import React from 'react';
import './contact.css'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiPhoneOutgoing } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className='contactMainContainer'> 
        <div className='container contactContainer' id='contact'>
            <h3>Contact us</h3>
            <div className='contactLinks'>
                <a href='https://instagram.com/optimize_entertainment?igshid=NTc4MTIwNjQ2YQ==' className='link_1'><AiOutlineInstagram/></a>
                <a href="+2348182785577"><BsTelephone/>&nbsp; &nbsp;+2348182785577</a>
                <a href="+2349028112744"><BsTelephone/>&nbsp; &nbsp;+2349028112744</a>
            </div>
            <p> &copy; 2023 - optimize ent. All rights reserved. </p>

        </div>
     </div>
  )
}

export default Contact;