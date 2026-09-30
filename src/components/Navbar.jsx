import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPos = window.scrollY + 200

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="nav-logo" onClick={() => scrollTo('home')} style={{ cursor: 'pointer' }}>
          <span className="bracket">{'<'}</span>
          <span className="name">TM</span>
          <span className="bracket">{' />'}</span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <span
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </span>
          ))}
          <button className="nav-cta" onClick={() => scrollTo('contact')}>
            Let's Talk
          </button>
        </div>

        <div
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </motion.nav>
  )
}
