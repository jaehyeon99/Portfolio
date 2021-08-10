import React from 'react';
import './App.css';
import Head from './components/Head';
import Header from './components/Header';
import Project from './components/Project';
import Skils from './components/Skils';

function App() {
  return (
    <div className="App">
      <Header />
      <Head />
      <Skils />
      <Project />
    </div>
  );
}

export default App;
