import React from 'react';
import './App.scss';

import Hero from './Components/Hero';
import About from './Components/About';
import Project from './Components/Projects'
import Footer from './Components/Footer';
import RS from './Components/RS';

function App() {
  return (
    <>
      <Hero />
      <RS />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default App;
