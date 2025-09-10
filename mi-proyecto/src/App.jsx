import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'; 
import Stats from './components/Stats';
import SupCm from './components/SupCm';
import AbUs from './components/AbUs';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Stats />
      <SupCm />
      <AbUs />
    </div>
  );
}

export default App;