import express from 'express'
import cors from 'cors'
import { createTransport } from 'nodemailer'
import { config } from 'dotenv'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

config()

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// ============================================================
// DATA STORE (JSON files — replace with a DB in production)
// ============================================================

const DATA_DIR = join(__dirname, 'data')
const ensureDataDir = () => {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true })
  }
}
ensureDataDir()

// Helper to read/write JSON
const readJSON = (filename, fallback = []) => {
  const filepath = join(DATA_DIR, filename)
  if (!existsSync(filepath)) return fallback
  try {
    return JSON.parse(readFileSync(filepath, 'utf-8'))
  } catch {
    return fallback
  }
}

const writeJSON = (filename, data) => {
  const filepath = join(DATA_DIR, filename)
  writeFileSync(filepath, JSON.stringify(data, null, 2))
}

// ============================================================
// PROJECTS API
// ============================================================

const defaultProjects = [
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
    id: 2,
    title: 'MovieFlix',
    category: 'Web Application',
    description: 'A movie browsing and streaming web application with a sleek UI for discovering, searching, and exploring movies. Built with vanilla JavaScript, HTML, and CSS for a fast, lightweight experience.',
    tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
    emoji: '🎬',
    github: 'https://github.com/ThiruRandy/movieflix2',
    live: '#',
  },
  {
    id: 3,
    title: 'Real-Time Chat Application',
    category: 'Full Stack',
    description: 'A multi-client chat application using Java Socket Programming with client-server architecture. Features user registration/login, private messaging, chat history, real-time broadcasting, and password management.',
    tags: ['Java', 'Socket Programming', 'JDBC', 'MySQL', 'Swing'],
    emoji: '💬',
    github: '#',
    live: '#',
  },
  {
    id: 4,
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

// GET /api/projects
app.get('/api/projects', (req, res) => {
  const projects = readJSON('projects.json', defaultProjects)
  res.json(projects)
})

// POST /api/projects (add a new project)
app.post('/api/projects', (req, res) => {
  const projects = readJSON('projects.json', defaultProjects)
  const newProject = {
    id: Date.now(),
    ...req.body,
    createdAt: new Date().toISOString(),
  }
  projects.push(newProject)
  writeJSON('projects.json', projects)
  res.status(201).json(newProject)
})

// ============================================================
// CONTACT FORM API
// ============================================================

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' })
  }

  // Save to messages log
  const messages = readJSON('messages.json', [])
  const newMessage = {
    id: Date.now(),
    name,
    email,
    subject: subject || 'No Subject',
    message,
    timestamp: new Date().toISOString(),
    read: false,
  }
  messages.push(newMessage)
  writeJSON('messages.json', messages)

  // Send email if configured
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    try {
      const transporter = createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: `Portfolio: ${subject || 'New Message'} from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #00f0ff;">New Portfolio Message</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
            <hr style="border-color: #333;" />
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
      })
    } catch (emailError) {
      console.error('Email send failed:', emailError.message)
      // Don't fail the request — message is already saved
    }
  }

  res.status(200).json({ success: true, message: 'Message received!' })
})

// GET /api/messages (admin - view all messages)
app.get('/api/messages', (req, res) => {
  const messages = readJSON('messages.json', [])
  res.json(messages.reverse())
})

// ============================================================
// VISITOR ANALYTICS API
// ============================================================

app.get('/api/visitors', (req, res) => {
  const analytics = readJSON('analytics.json', { count: 0, visits: [] })
  analytics.count += 1
  analytics.visits.push({
    timestamp: new Date().toISOString(),
    userAgent: req.headers['user-agent'] || 'unknown',
    ip: req.ip,
  })
  // Keep only last 1000 visits to prevent file bloat
  if (analytics.visits.length > 1000) {
    analytics.visits = analytics.visits.slice(-1000)
  }
  writeJSON('analytics.json', analytics)
  res.json({ count: analytics.count })
})

// GET /api/analytics (admin - view analytics summary)
app.get('/api/analytics', (req, res) => {
  const analytics = readJSON('analytics.json', { count: 0, visits: [] })
  const today = new Date().toISOString().split('T')[0]
  const todayVisits = analytics.visits.filter(v =>
    v.timestamp.startsWith(today)
  ).length

  res.json({
    totalVisitors: analytics.count,
    todayVisitors: todayVisits,
    recentVisits: analytics.visits.slice(-20).reverse(),
  })
})

// ============================================================
// HEALTH CHECK
// ============================================================

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  })
})

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`\n🚀 Portfolio API running on http://localhost:${PORT}`)
  console.log(`   📊 Health check: http://localhost:${PORT}/api/health`)
  console.log(`   📁 Projects:    http://localhost:${PORT}/api/projects`)
  console.log(`   📬 Messages:    http://localhost:${PORT}/api/messages`)
  console.log(`   👁️  Visitors:    http://localhost:${PORT}/api/visitors\n`)
})
