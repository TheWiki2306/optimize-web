import React from 'react';
import Evt_1 from "../../assets/Contrxl lagos ii.jpg";
import Evt_2 from "../../assets/0E4BBCE5-F7E8-444F-BB25-D23CDEC88591.JPG";
// import Evt_3 from "../../assets/0E4BBCE5-F7E8-444F-BB25-D23CDEC88591.JPG";
// import Evt_4 from "../../assets/42AF33DE-916B-4F68-9D02-049D8DF003A5.JPG";
// import Evt_5 from "../../assets/48029F02-71C7-423B-AF2E-8349417748F7.JPG";
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
          <div className='ctrlLink'>
            <a href="https://wakaevents.ng/en-ng/events/contrxl-lagos">Get Ticket Now</a>
          </div>
                 {/* <div className='hennyContainer'> */}
                     {/* <p>
                       We are thrilled to announce our 2024 Summer Rave, a spectacular 12-hour party that promises to be the highlight of your summer! 
                       Join us on  August 17th, 
                       from 2 PM to 2 AM at the stunning Voda Beach, Elegushi, Lagos.<br/><br/>

                      <article> Date: August 17, 2024.<br/>
                       Time: 2 PM - 2 AM.<br/>
                       Location: Voda Beach, Elegushi, Lagos.</article>
       
                     </p> */}
                        {/* <div className='hennyLink'>
                             <a href="https://wakaevents.ng/en-ng/events/contrxl-lagos">Get Ticket Now</a>
                         </div> */}
                 {/* </div> */}
         </div>
     </div>
  )
}

export default UpcomingEvents
