import React from 'react';
import Nav from './components/nav/Nav';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
// import UpcomingEvents from './components/events/UpcomingEvents';
import EventsShots from './components/EventsShots/EventsShots';
import About from './components/about/about';
import Promotion from './components/promotion/Promotion';
import AboutUs from './components/about us/AboutUs';
import Contact from './components/contact/Contact';
import Charity from './components/charity/Charity';


function App() {
  return (
    <div>
      <Nav/> 
    <Header/>
    <EventsShots/>
    {/* <UpcomingEvents/> */}
    <About/>
    <Promotion />
    <Charity/>
    <Gallery/> 
    <AboutUs/>
    <Contact/>
    </div>
  );
}

export default App;
