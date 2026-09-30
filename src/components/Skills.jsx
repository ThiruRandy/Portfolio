import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiJavascript,
  SiHtml5, SiCss, SiGit, SiBootstrap,
  SiMysql, SiGithub, SiSpring
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { FiCode, FiTerminal } from 'react-icons/fi'

const categories = ['All', 'Languages', 'Frameworks', 'Database', 'Tools']

const skillsData = [
  { name: 'Java', icon: <FaJava />, category: 'Languages', level: 'Advanced', color: '#f89820' },
  { name: 'JavaScript', icon: <SiJavascript />, category: 'Languages', level: 'Intermediate', color: '#F7DF1E' },
  { name: 'HTML5', icon: <SiHtml5 />, category: 'Languages', level: 'Advanced', color: '#E34F26' },
  { name: 'CSS3', icon: <SiCss />, category: 'Languages', level: 'Intermediate', color: '#1572B6' },
  { name: 'SQL', icon: <FiTerminal />, category: 'Languages', level: 'Intermediate', color: '#336791' },
  { name: 'Spring Boot', icon: <SiSpring />, category: 'Frameworks', level: 'Intermediate', color: '#6DB33F' },
  { name: 'React.js', icon: <SiReact />, category: 'Frameworks', level: 'Intermediate', color: '#61DAFB' },
  { name: 'Bootstrap', icon: <SiBootstrap />, category: 'Frameworks', level: 'Intermediate', color: '#7952B3' },
  { name: 'Node.js', icon: <SiNodedotjs />, category: 'Frameworks', level: 'Beginner', color: '#68A063' },
  { name: 'JDBC', icon: <FiCode />, category: 'Frameworks', level: 'Intermediate', color: '#f89820' },
  { name: 'MySQL', icon: <SiMysql />, category: 'Database', level: 'Intermediate', color: '#4479A1' },
  { name: 'Git', icon: <SiGit />, category: 'Tools', level: 'Intermediate', color: '#F05032' },
  { name: 'GitHub', icon: <SiGithub />, category: 'Tools', level: 'Intermediate', color: '#ffffff' },
  { name: 'VS Code', icon: <FiCode />, category: 'Tools', level: 'Advanced', color: '#007ACC' },
  { name: 'Eclipse', icon: <FiTerminal />, category: 'Tools', level: 'Intermediate', color: '#2C2255' },
  { name: 'IntelliJ IDEA', icon: <FiCode />, category: 'Tools', level: 'Intermediate', color: '#FE315D' },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">💻 Tech Stack</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Technologies and tools I've learned and worked with during my
            academic projects and internship.
          </p>

          <div className="skills-categories">
            {categories.map(cat => (
              <button
                key={cat}
                className={`skill-filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.08, y: -8 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-name">
                  {skill.name}
                  <span className="skill-level">{skill.level}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
