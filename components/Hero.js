import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export function Hero() {
  const { language } = useLanguage()
  const [text, setText] = useState('')
  const t = translations[language].hero
  const fullText = t.title

  useEffect(() => {
    setText('')
    let i = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            <span className="terminal-prompt">$</span>
            <span className="typing-text">
              {text}
            </span>
            <span className="cursor">|</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="hero-subtitle"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="hero-cta"
          >
            <button
              className="cta-button primary"
              onClick={() => scrollToSection('projects')}
            >
              <span>{t.viewWork}</span>
              <div className="button-glow"></div>
            </button>
            <button
              className="cta-button secondary"
              onClick={() => scrollToSection('contact')}
            >
              <span>{t.getInTouch}</span>
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hero-visual"
        >
          <div className="floating-elements">
            <div className="floating-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span className="code-operator"> = </span>
                    <span className="code-string">"passionate"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="scroll-indicator"
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  )
}
