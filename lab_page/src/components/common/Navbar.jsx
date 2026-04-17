import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/research', label: 'Research' },
  { to: '/organization', label: 'Organization' },
  { to: '/people', label: 'People' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
  { to: '/positions', label: 'Positions' },
  { to: '/gallery', label: 'Gallery' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="navbar-header">
      <nav className="navbar" role="navigation">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <span>SilicoWorks Lab</span>
        </NavLink>

        <button
          className={`hamburger ${isOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.to} className="navbar-item">
              <NavLink
                to={item.to}
                end={item.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'navbar-link active' : 'navbar-link'
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
