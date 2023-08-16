import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiPhoneOutgoing } from 'react-icons/bs';
import Logo from '../../assets/Logo.PNG';
import './contact.css'


const Contact = () => {
  return (
    <div className='contactMainContainer'> 
        <div className='container contactContainer' id='contact'>
            <h3>Contact us</h3>
            <div className='contactLinks'>
                <a href='https://instagram.com/optimize_entertainment?igshid=NTc4MTIwNjQ2YQ==' className='link_1'><AiOutlineInstagram/>optimize_entertainment</a>
                <a href="+2348182785577"><BsTelephone/>&nbsp; &nbsp;CEO: Adedoyin Faleye</a>
                <a href="+2349028112744"><BsTelephone/>&nbsp; &nbsp;Communications Manager:<br/> Malik</a>
            </div>
            <p> &copy; 2023 - optimize ent. All rights reserved. </p>

        </div>
     </div>
  )
}

export default Contact;