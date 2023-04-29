import React from 'react';
import Evt_1 from "../../assets/event_1.jpg";
import Evt_2 from "../../assets/event_2.jpg";
import Evt_3 from "../../assets/event_3.jpg";
import Evt_4 from "../../assets/event_4.jpg";
import Evt_5 from "../../assets/event_5.jpg";
import "./events.css";



const Events = [
    {event:Evt_1},
    {event:Evt_2},
    {event:Evt_3},
    {event:Evt_4},
    {event:Evt_5}
]
const UpcomingEvents = () => {
  return (
    <div className='container eventsContainer'>
      <h3>Upcoming Events</h3>
<div className='imgsContainer'>
    {
        Events.map(({event}, index) => {
            return( 
                <div className='imgs'>  
            <img src={event} alt="" key={index}/>
                </div>
        )})
    }
</div>
    </div>
  )
}

export default UpcomingEvents
