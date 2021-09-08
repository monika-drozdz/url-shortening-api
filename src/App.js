import React from 'react';

import './App.scss';

import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Boost from './components/Boost/Boost';
import Statistics from './components/Statistics/Statistics';
import NavBar from './components/NavBar/NavBar';
import Shortener from './components/Shortener/Shortener';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Hero/>
      </header>
      <section className="content">
        <Shortener/>
        <Statistics/>
      </section>
        <Boost/>
        <Footer/>  
    </div>
  );
}

export default App;
