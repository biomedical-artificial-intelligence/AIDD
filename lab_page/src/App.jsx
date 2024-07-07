import './App.css';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/home/Home';
import Research from './pages/research/Research';
import Organization from './pages/organization/Organization';
import People from './pages/people/People';
import Publications from './pages/publications/Publications';
import Contact from './pages/contact/Contact';
import Positions from './pages/positions/Positions';
import Gallery from './pages/gallery/Gallery';

function App() {
  // const basename = process.env.NODE_ENV === 'production' ? '/AIDD-dev' : '/AIDD-dev';

  return (
    <HelmetProvider>
      <Router>
        <div className="app-container-upside">
          <Navbar />
          <div className="app-contents">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/research" element={<Research />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/people" element={<People />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/positions" element={<Positions />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </div>
        </div>
        <div className="app-container-downside">
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
