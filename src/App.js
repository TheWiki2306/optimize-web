import React from 'react';
import Nav from './components/nav/Nav';
import About from './components/about/about';
import Header from './components/header/header';
import Gallery from './components/gallery/gallery';
import UpcomingEvents from './components/events/UpcomingEvents';

function App() {
  return (
    <div>
      <Nav/>
    <Header/>
     <Gallery/> 
    <UpcomingEvents/>
    <About/>

    </div>
  );
}

export default App;
