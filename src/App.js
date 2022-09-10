import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './compo/pages/Home';
import Contact from './compo/pages/Contact';
import About from './compo/pages/About';
import Navbar from './compo/inc/Navbar';



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
