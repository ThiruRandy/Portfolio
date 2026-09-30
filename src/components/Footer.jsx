import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const footerLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span style={{ color: 'var(--neon-cyan)' }}>{'<'}</span>
            <span className="gradient-text">TM</span>
            <span style={{ color: 'var(--neon-cyan)' }}>{' />'}</span>
          </div>

          <div className="footer-links">
            {footerLinks.map(link => (
              <span
                key={link}
                className="footer-link"
                onClick={() => scrollTo(link === 'Home' ? 'home' : link)}
              >
                {link}
              </span>
            ))}
          </div>

          <div className="footer-social">
            <a href="https://github.com/ThiruRandy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/thirumurugan-s-435a71337/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="mailto:thirumurugan3925@gmail.com" className="social-link" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Thirumurugan. Built with{' '}
            <FiHeart style={{ color: 'var(--neon-pink)', verticalAlign: 'middle' }} />{' '}
            and React.js
          </p>
        </div>
      </div>
    </footer>
  )
}
