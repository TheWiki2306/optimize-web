import React from 'react';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import Logo from '../../assets/Logo.PNG';
import './contact.css'


const Contact = () => {
  return (
    <div className='contactMainContainer'> 
        <div className='container contactContainer' id='contact'>
         <h3>CONTACT US</h3>
            <div className='contactAddress'>
            <div className='subText'>
                <p><a href="https://forms.gle/d813iBMguNJHPwVZ6" className='subLink'>Click here</a> to join the Optimize Entertainment community and also get first hand informations.</p>
                </div>
              <article className='contacts'>
                <div>
                  <p>Faleye Adedoyin</p>
                  <a href="tel:+2348182785577"><BsTelephone className='contactsIcon'/>:&nbsp;&nbsp;+2348182785577</a>
                </div>
                <a href="mailto:adedoyin@optimizeent.com">adedoyin@optimizeent.com</a>
                <p className='post'>CEO</p>
              </article>

              <article className='contacts'>
                <div>
                  <p>Malik Kazeem</p>
                  <a href="tel:+2348182785577" className='contactsIcon'><BsTelephone className='contactsIcon'/>:&nbsp;&nbsp;+2349028112744</a>
                </div>
                <a href="mailto:malik.kazeem@optimizeent.com" className='mailLink'>malik.kazeem@optimizeent.com</a>
                <p className='post'>Communications Manager</p>
              </article>

              <article className='contacts'>
               <AiOutlineInstagram className='contactsIcon'/>
               <p>Instagram</p>
               <a href='https://instagram.com/optimize_entertainment?igshid=NTc4MTIwNjQ2YQ==' className='link_1'>optimize_entertainment</a>
              </article>

                

            </div>
            <div className='contactImage'>
              <img src={Logo} alt="" />
            </div>
            <p> &copy; 2019 - OPTIMIZE GLOBAL ENTERPRISES<br/>(RC 2884764). All rights reserved. </p>

        </div>
     </div>
  )
}

export default Contact;
