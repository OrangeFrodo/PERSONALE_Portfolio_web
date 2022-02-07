import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

// Component
import Navbar from './components/navbar';
import Home from './components/pages/home';
import Skills from './components/pages/skills';
import SvgOne from './components/pages/svgOne';
import SvgTwo from './components/pages/svgTwo';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <SvgOne />
      <Home />
    </BrowserRouter>
    </>
  );
}

export default App;
