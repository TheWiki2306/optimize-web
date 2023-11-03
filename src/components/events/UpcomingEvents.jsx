import React from 'react';
import Evt_1 from "../../assets/HTL 23 MfF.jpg";
import Evt_2 from "../../assets/0E4BBCE5-F7E8-444F-BB25-D23CDEC88591.JPG";
import Evt_3 from "../../assets/0E4BBCE5-F7E8-444F-BB25-D23CDEC88591.JPG";
import Evt_4 from "../../assets/42AF33DE-916B-4F68-9D02-049D8DF003A5.JPG";
import Evt_5 from "../../assets/48029F02-71C7-423B-AF2E-8349417748F7.JPG";
import "./events.css";



// const Events = [
//     {event:Evt_1},
//     {event:Evt_2},
//     {event:Evt_3},
//     {event:Evt_4},
//     {event:Evt_5}
// ]
const UpcomingEvents = () => {
  return (
    <div className='container eventsContainer'>
      <h3>UPCOMING EVENT</h3>
        <div className='imgsContainer'>
            <img src={Evt_1} alt=""/>
                <div className='hennyContainer'>
                    <p>
                        Hennything Lagos is returning for its fourth edition. Catchexciting developments at this year's
                        edition which will feature our unbeatable party style, amazing VIP experience, fashion show, food,
                        networking, brand and lifestyle shows.       
                    </p>
                        <div className='hennyLink'>
                            <a href="">Get Ticket Now</a>
                        </div>
                </div>
        </div>
    </div>
  )
}

export default UpcomingEvents
