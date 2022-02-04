import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

// Component
import Navbar from './components/navbar';
import Home from './components/pages/home';
import Skills from './components/pages/skills';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Home />
    </BrowserRouter>
    </>
  );
}

export default App;
