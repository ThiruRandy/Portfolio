import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiSend, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const EMAILJS_SERVICE_ID = 'service_wj56ifo'
const EMAILJS_TEMPLATE_ID = 'template_hy90jsm'
const EMAILJS_PUBLIC_KEY = 'kGUNxp9QkhYeJoCrx'

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'thirumurugan3925@gmail.com' },
  { icon: <FiMapPin />, label: 'Location', value: 'Tamil Nadu, India' },
  { icon: <FiPhone />, label: 'Phone', value: '+91 81245 19882' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      )

      toast.success('Message sent successfully! 🎉')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">📬 Get In Touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Have a project in mind or just want to say hello? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info-cards"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="contact-info-icon">{info.icon}</div>
                <div>
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <input
                id="contact-subject"
                type="text"
                name="subject"
                className="form-input"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                id="contact-message"
                name="message"
                className="form-textarea"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="form-submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {sending ? 'Sending...' : 'Send Message'} <FiSend />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
