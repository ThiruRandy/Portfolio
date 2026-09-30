import React from 'react'
import { motion } from 'framer-motion'
import ReactCountUp from 'react-countup'
const CountUp = ReactCountUp.default || ReactCountUp
import { useInView } from 'react-intersection-observer'

const stats = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 1, suffix: '', label: 'Internship' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 2026, suffix: '', label: 'B.E. Graduate' },
]

export default function StatsBar() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="stats-bar" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="stat-number">
                {inView ? (
                  <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
                ) : (
                  <span>0{stat.suffix}</span>
                )}
              </div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
