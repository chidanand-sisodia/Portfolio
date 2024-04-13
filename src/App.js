import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import  Footer  from './components/Footer';

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path='/' element={<Dashboard/>}/>
    //     <Route path='/about' element={<About/>}/>
    //   </Routes>
    // </Router>
    <div>
      <Navbar/>
      <Dashboard/>
      <About/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}

export default App;
