import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Java Full Stack Development Intern',
    company: 'Besant Technologies',
    date: 'Feb 2026 - Sep 2026',
    description:
      'Developing web applications using Java, HTML, CSS, JavaScript, and MySQL. Working on backend development with Java and JDBC for database connectivity and CRUD operations. Collaborating on mini-projects using version control and following software development best practices. Using Eclipse IDE and Apache Tomcat for development and deployment.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">💼 Career</span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My professional journey in software development and building
            real-world applications.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="timeline-content">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
                <p className="timeline-description">{exp.description}</p>
              </div>
              <div className="timeline-date">
                <span className="timeline-date-badge">{exp.date}</span>
              </div>
              <div className="timeline-dot" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
