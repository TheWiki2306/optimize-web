import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { FiPhoneOutgoing } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import Logo from '../../assets/Logo.PNG';
import './contact.css'


const Contact = () => {
  return (
    <div className='contactMainContainer'> 
        <div className='container contactContainer' id='contact'>
         <h3>CONTACT US</h3>
            <div className='contactLinks'>
                <a href='https://instagram.com/optimize_entertainment?igshid=NTc4MTIwNjQ2YQ==' className='link_1'><AiOutlineInstagram/> <small>optimize_entertainment</small></a>
            </div>

            <div className='contactAddress'>
              <article>
                <p><BsTelephone/>:+2348182785577</p>
                <a href="adedoyin@optimizeent.com"><TfiEmail/></a>
                <p>CEO</p>
              </article>

              <article>
                <p><BsTelephone/>:+2348182785577</p>
                <a href="malik.kazeem@optimizeent.com"><TfiEmail/></a>
                <p>Communications Manager</p>
              </article>

            </div>
            <div className='contactImage'>
              <img src={Logo} alt="" />
            </div>
            <p> &copy; 2023 - optimize ent. All rights reserved. </p>

        </div>
     </div>
  )
}

export default Contact;