import React from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiReact, SiJavascript, SiSpring } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div className="hero-greeting" variants={item}>
              Hello, I'm
            </motion.div>

            <motion.h1 className="hero-name" variants={item}>
              <span className="first-name">Thirumurugan S</span>
            </motion.h1>

            <motion.div className="hero-typing" variants={item}>
              <TypeAnimation
                sequence={[
                  'Java Full Stack Developer',
                  2000,
                  'React.js Developer',
                  2000,
                  'Spring Boot Developer',
                  2000,
                  'Web Application Builder',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p className="hero-description" variants={item}>
              A passionate Java Full Stack Developer & ECE Graduate with hands-on
              experience in building web applications using Java, React.js, Spring Boot,
              and modern web technologies. Turning ideas into elegant digital solutions.
            </motion.p>

            <motion.div className="hero-buttons" variants={item}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <FiArrowRight />
              </button>
              <button
                className="btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <FiMail /> Let's Talk
              </button>
              <a
                href="/Resume.pdf"
                download
                className="btn-outline"
                style={{ textDecoration: 'none' }}
              >
                <FiDownload /> Resume
              </a>
            </motion.div>

            <motion.div className="hero-social" variants={item}>
              <a href="https://github.com/ThiruRandy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/thirumurugan-s-435a71337/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="mailto:thirumurugan3925@gmail.com" className="social-link" aria-label="Email">
                <FiMail />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-avatar-container">
              <div className="hero-avatar-ring" />
              <div className="hero-avatar-ring-inner" />
              <div className="hero-avatar">
                <img
                  src="/profile.jpg"
                  alt="Thirumurugan S"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </div>

              <motion.div
                className="floating-icon"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#f89820' }}
              >
                <FaJava />
              </motion.div>
              <motion.div
                className="floating-icon"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#61DAFB' }}
              >
                <SiReact />
              </motion.div>
              <motion.div
                className="floating-icon"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#6DB33F' }}
              >
                <SiSpring />
              </motion.div>
              <motion.div
                className="floating-icon"
                whileHover={{ scale: 1.2 }}
                style={{ color: '#F7DF1E' }}
              >
                <SiJavascript />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
