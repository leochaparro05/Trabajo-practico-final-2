import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar'; 
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Stats />
    </div>
  );
}

export default App;