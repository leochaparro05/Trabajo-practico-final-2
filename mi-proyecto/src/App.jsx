import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'; 
import Stats from './components/Stats';
import SupCm from './components/SupCm';
import AbUs from './components/AbUs';
import OurTeam from './components/OurTeam';
import Testimonial from './components/Testimonial'; 
import Stats2 from './components/Stats2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Stats />
      <SupCm />
      <AbUs />
      <OurTeam />
      <Testimonial />
      <Stats2 />
      <Footer />
    </div>
  );
}

export default App;