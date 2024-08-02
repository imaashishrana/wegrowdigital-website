// src/App.jsx
import React from 'react';
import { Element } from 'react-scroll';
import Header from './components/Header';
import Home from './components/Home';
import Getintouch from './components/Getintouch';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <>
      <Header />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="contactform">
        <ContactForm />
      </Element>
      <Element name="getintouch">
        <Getintouch />
      </Element>
      
      <Element name="footer">
        <Footer />
      </Element>
    </>
  );
};

export default App;
