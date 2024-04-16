import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollManager />
    </Router>
  );
}

function ScrollManager() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === '/');

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  return (
    <>
      {isHomePage ? (
        // Single page layout where scrolling is enabled
        <div>
          <Dashboard />
          <About />
          <Projects />
          <Certificates />
          <Contact />
          <Footer />
        </div>
      ) : (
        // Traditional route-based layout for direct URL access
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/certificates' element={<Certificates />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      )}
    </>
  );
}

export default App;
