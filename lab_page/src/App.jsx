import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Organization from './pages/organization/Organization'
import People from './pages/people/People'
import Publications from './pages/Publications'
import Contact from './pages/Contact'
import Positions from './pages/Positions'
import Gallery from './pages/Gallery'

function App() {
  return (
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
  )
}

export default App
