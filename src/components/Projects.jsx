import React from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projectsData = [
  {
    id: 1,
    title: 'Jarvis AI Chatbot',
    category: 'Web Application',
    description: 'An AI-based chatbot web application with an interactive and responsive user interface. Features real-time conversational interaction, smart responses, clean UI design, and mobile-friendly accessibility.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Vite', 'Netlify'],
    emoji: '🤖',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'MovieFlix',
    category: 'Web Application',
    description: 'A movie browsing and streaming web application with a sleek UI for discovering, searching, and exploring movies. Built with vanilla JavaScript, HTML, and CSS for a fast, lightweight experience.',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    emoji: '🎬',
    github: 'https://github.com/ThiruRandy/movieflix2',
    live: '#',
  },
  {
    id: 2,
    title: 'Real-Time Chat Application',
    category: 'Full Stack',
    description: 'A multi-client chat application using Java Socket Programming with client-server architecture. Features user registration/login, private messaging, chat history, real-time broadcasting, and password management.',
    tags: ['Java', 'Socket Programming', 'JDBC', 'MySQL', 'Swing'],
    emoji: '💬',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Footstep Power Generator',
    category: 'IoT / Hardware',
    description: 'A renewable energy prototype that converts footstep pressure into electrical energy using piezoelectric sensors. Designed for crowded public areas with integrated rectifier circuits and energy storage components.',
    tags: ['Arduino', 'Piezoelectric Sensors', 'Rectifier Circuit', 'IoT'],
    emoji: '⚡',
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Digital VCard',
    category: 'Web Application',
    description: 'A sleek, personal digital visiting card website with a modern design. Features contact information display, social media links, downloadable contact details, and a fully responsive layout for seamless viewing across all devices.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '💼',
    github: '#',
    live: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">🚀 Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A selection of projects I've built during my academic journey and
            internship, showcasing my skills across web development and IoT.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-image">
                <div className="project-image-placeholder">
                  {project.emoji}
                </div>
                <div className="project-overlay">
                  <a href={project.github} className="project-overlay-btn" aria-label="View source code">
                    <FiGithub />
                  </a>
                  <a href={project.live} className="project-overlay-btn" aria-label="View live demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
