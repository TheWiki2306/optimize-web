import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import UpcomingEvents from './components/events/UpcomingEvents';
import EventsShots from './components/EventsShots/EventsShots';
import About from './components/about/about';
import Promotion from './components/promotion/Promotion';


function App() {
  return (
    <div>
      <Nav/> 
    <Header/>
    <EventsShots/>
    <UpcomingEvents/>
    <About/>
    <Promotion />
    <Gallery/> 

    </div>
  );
}

export default App;
