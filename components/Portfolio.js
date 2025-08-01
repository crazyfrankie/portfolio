import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext'
import { Hero } from './Hero'
import { About } from './About'
import { Skills } from './Skills'
// import { Experience } from './Experience'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { ThemeToggle } from './ThemeToggle'
import { LanguageToggle } from './LanguageToggle'
import { ParticleBackground } from './ParticleBackground'

// 包装Hero组件，使其在语言切换时重新挂载
function HeroWithLanguage() {
  const { language } = useLanguage()
  return <Hero key={language} />
}

export function Portfolio() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <LanguageProvider>
        <div className="portfolio-container">
          <ParticleBackground />
          <ThemeToggle />
          <LanguageToggle />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="portfolio-content"
          >
            <HeroWithLanguage />
            <About />
            <Skills />
            {/* <Experience /> */}
            <Projects />
            <Contact />
          </motion.div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}