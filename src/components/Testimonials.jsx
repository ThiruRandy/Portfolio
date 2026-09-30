import React from 'react'
import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiCpu } from 'react-icons/fi'

const coursework = [
  'Data Structures',
  'Database Management',
  'OOPs Concepts',
  'Artificial Intelligence',
  'Internet Of Things',
  'Computer Architecture',
]

const activities = [
  'Participated in technical workshops and coding activities',
  'Developed mini and academic projects using modern web technologies',
  'Actively learning backend and frontend development concepts',
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">🎓 Education</span>
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            My educational foundation and the knowledge I've built along the way.
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {/* Degree Card */}
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="testimonial-quote" style={{ fontSize: '2rem' }}>
              <FiBookOpen />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
              B.E. in Electronics & Communication Engineering
            </h3>
            <p className="testimonial-text" style={{ fontStyle: 'normal' }}>
              Sengunthar Engineering College, Tiruchengode, Tamil Nadu
            </p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">📅</div>
              <div>
                <div className="testimonial-author-name">Sep 2022 – Apr 2026</div>
                <div className="testimonial-author-role">Full-time · 4 years</div>
              </div>
            </div>
          </motion.div>

          {/* Coursework Card */}
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -5 }}
          >
            <div className="testimonial-quote" style={{ fontSize: '2rem' }}>
              <FiCpu />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px' }}>
              Relevant Coursework
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {coursework.map(course => (
                <span
                  key={course}
                  style={{
                    padding: '5px 14px',
                    background: 'rgba(0, 240, 255, 0.08)',
                    border: '1px solid rgba(0, 240, 255, 0.15)',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Activities Card */}
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="testimonial-quote" style={{ fontSize: '2rem' }}>
              <FiAward />
            </div>
            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px' }}>
              Extracurricular Activities
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {activities.map((activity, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    paddingLeft: '16px',
                    position: 'relative',
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--neon-cyan)',
                  }}>▹</span>
                  {activity}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
