import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export function Experience() {
  const { language } = useLanguage()
  const t = translations[language].experience
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeTab, setActiveTab] = useState(0)

  const experiences = t.jobs

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="experience" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              <span className="section-number">03.</span>
              {t.title}
            </h2>
          </motion.div>

          <div className="experience-container">
            <motion.div variants={itemVariants} className="tab-list">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  className={`tab-button ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  {exp.company}
                </button>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="tab-content">
              <div className="glass-card experience-card">
                <h3 className="position-title">
                  {experiences[activeTab].position}
                  <span className="company-name"> @ {experiences[activeTab].company}</span>
                </h3>
                <p className="duration">{experiences[activeTab].duration}</p>
                
                <ul className="description-list">
                  {experiences[activeTab].description.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="description-item"
                    >
                      <span className="bullet">▹</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}