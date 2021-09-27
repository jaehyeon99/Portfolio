import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Head from './components/Head';
import Header from './components/Header';
import Project from './components/Project';
import Skils from './components/Skils';

function App() {
  return (
    <div className="App">
   
        <Header />
        <Head />
        <AboutMe/>
        <Skils/>
        <Project/>
        <Contact/>
     
    </div>
  );
}

export default App;
