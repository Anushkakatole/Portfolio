import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Backgroundd from './assets/Pages/Backgroundd';
import Home from './assets/Pages/Home';
import Skills from './assets/Pages/Skills'; 
import Projects from './assets/Pages/Projects';
import About from './assets/Pages/About';
import Agency from './assets/Pages/Agency';
import Premier from './assets/Pages/Premier';
import Weave from './assets/Pages/Weave';
import DesignRush from './assets/Pages/Rush'; 
import Trend from './assets/Pages/Trend';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/background" element={<Backgroundd />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/agency" element={<Agency />} />
          <Route path="/premier" element={<Premier />} />
          <Route path="/weave" element={<Weave />} />
          <Route path="/rush" element={<DesignRush />} /> 
          <Route path="/trend" element={<Trend />} />
       </Routes>
      </Router>
      

    </div>

  )
}

export default App
