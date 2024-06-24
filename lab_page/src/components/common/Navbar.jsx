import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        SilicoWorks Lab
      </NavLink>
      <div className="menu-box">
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/research"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Research
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/organization"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Organization
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/people"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              People
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/publications"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Publications
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/positions"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Positions
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? 'navbar-link active' : 'navbar-link'
              }
            >
              Gallery
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
