import React from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiServer, FiSmartphone, FiZap, FiGlobe, FiDatabase } from 'react-icons/fi'

const highlights = [
  { icon: <FiCode />, text: 'Java Backend Development' },
  { icon: <FiServer />, text: 'Spring Boot Framework' },
  { icon: <FiSmartphone />, text: 'Responsive Web Design' },
  { icon: <FiZap />, text: 'React.js Frontend' },
  { icon: <FiGlobe />, text: 'RESTful API Design' },
  { icon: <FiDatabase />, text: 'MySQL Database' },
]

const VP = { once: true, amount: 0.15 }

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image-card">
              <div className="about-code-block">
                <div>
                  <span className="line-number">01</span>
                  <span className="keyword">const</span>{' '}
                  <span className="variable">developer</span>{' '}
                  <span className="bracket">= {'{'}</span>
                </div>
                <div>
                  <span className="line-number">02</span>
                  {'  '}<span className="property">name</span>:{' '}
                  <span className="string">"Thirumurugan S"</span>,
                </div>
                <div>
                  <span className="line-number">03</span>
                  {'  '}<span className="property">role</span>:{' '}
                  <span className="string">"Java Full Stack Developer"</span>,
                </div>
                <div>
                  <span className="line-number">04</span>
                  {'  '}<span className="property">skills</span>:{' '}
                  <span className="bracket">[</span>
                  <span className="string">"Java"</span>,{' '}
                  <span className="string">"React"</span>,{' '}
                  <span className="string">"Spring Boot"</span>
                  <span className="bracket">]</span>,
                </div>
                <div>
                  <span className="line-number">05</span>
                  {'  '}<span className="property">education</span>:{' '}
                  <span className="string">"B.E. in ECE"</span>,
                </div>
                <div>
                  <span className="line-number">06</span>
                  {'  '}<span className="property">available</span>:{' '}
                  <span className="keyword">true</span>,
                </div>
                <div>
                  <span className="line-number">07</span>
                  <span className="bracket">{'}'}</span>;
                </div>
                <div style={{ marginTop: '12px' }}>
                  <span className="line-number">08</span>
                  <span className="comment">{'// Let\'s build something amazing!'}</span>
                </div>
              </div>

              <div className="about-experience-badge">
                <span className="number">&#39;26</span>
                <span className="text">Graduate</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-info"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VP}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="section-tag">
              <FiCode /> About Me
            </span>
            <h2 className="section-title">
              Passionate About Building Digital Solutions
            </h2>
            <p className="about-description">
              I'm a Java Full Stack Developer and B.E. graduate in Electronics &
              Communication Engineering from Sengunthar Engineering College,
              Tiruchengode. Currently working as a Java Full Stack Development
              Intern at Besant Technologies, Bangalore, where I build web
              applications using Java, Spring Boot, and modern frontend technologies.
            </p>
            <p className="about-description">
              I love turning ideas into functional, well-designed web applications.
              From backend APIs with Java and JDBC to interactive frontends with
              React.js, I enjoy working across the full stack. I'm always eager
              to learn new technologies and take on challenging projects.
            </p>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="highlight-icon">{item.icon}</span>
                  <span className="highlight-text">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
