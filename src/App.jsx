import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ParticlesBackground from './components/ParticlesBackground'
import CursorGlow from './components/CursorGlow'
import BackToTop from './components/BackToTop'
import VisitorBadge from './components/VisitorBadge'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'toast-custom',
          duration: 4000,
        }}
      />
      <div className="grid-bg" />
      <ParticlesBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <VisitorBadge />
    </>
  )
}

export default App
