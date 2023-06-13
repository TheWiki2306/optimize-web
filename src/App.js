import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import UpcomingEvents from './components/events/UpcomingEvents';
import EventsShots from './components/EventsShots/EventsShots';
import About from './components/about/about';
import Initiative from './components/initiative/Initiative';


function App() {
  return (
    <div>
      <Nav/> 
    <Header/>
     <Gallery/> 
    <UpcomingEvents/>
    <EventsShots/>
    <About/>
    <Initiative />
    </div>
  );
}

export default App;
