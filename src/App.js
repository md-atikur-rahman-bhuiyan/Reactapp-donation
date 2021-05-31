import React from 'react';
import Header from './Components/Header/Header';
import HeroSlider from './Components/Slider/HeroSlider';
import Features from './Components/Features/Features';
import About from './Components/About/About';
import Subscription from './Components/Subscription/Subscription';
import Work from './Components/OurWork/Work';
import Contact from './Components/Contact/Contact';
// import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      <Features />
      <About />
      <Subscription />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
