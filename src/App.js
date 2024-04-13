import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import  Footer  from './components/Footer';
import Alert from './components/Alert';

function App() {

 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/certificates' element={<Certificates/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </Router>
    // <div>
    //   <Navbar/>
    //   <Dashboard/>
    //   <About/>
    //   <Projects/>
    //   <Certificates/>
    //   <Contact/>
    //   <Footer/>
      
    // </div>
  );
}

export default App;
