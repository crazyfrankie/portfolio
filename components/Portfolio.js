import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ThemeProvider } from 'next-themes'
import { Hero } from './Hero'
import { About } from './About'
import { Skills } from './Skills'
import { Experience } from './Experience'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { ThemeToggle } from './ThemeToggle'
import { ParticleBackground } from './ParticleBackground'

export function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className="portfolio-container">
        <ParticleBackground />
        <ThemeToggle />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="portfolio-content"
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      </div>
    </ThemeProvider>
  )
}