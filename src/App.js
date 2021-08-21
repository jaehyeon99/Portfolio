import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Head from './components/Head';
import Header from './components/Header';
import Project from './components/Project';
import Skils from './components/Skils';
import { Route, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Head />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Skils" component={Skils} />
        <Route path="/Project" component={Project} />
        <Route path="/Contact" component={Contact} />
      </HashRouter>
    </div>
  );
}

export default App;
