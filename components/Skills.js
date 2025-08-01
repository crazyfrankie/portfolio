import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../data/translations'

export function Skills() {
  const { language } = useLanguage()
  const t = translations[language].skills
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skills = language === 'en' ? {
    "Backend": [
      "Golang", "Python", "Gin", "gRPC", "Django", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Milvus", "Langchain"
    ],
    "Tools & Others": [
      "Git", "Docker", "Kubernetes", "AWS", "Vercel", "Coze", "Dify"
    ],
    "IDE": [
      "Jetbrains", "Cursor", "Trae", "VSCode"
    ]
  } : {
    [t.categories["Backend"]]: t.skillsList["Backend"],
    [t.categories["Tools & Others"]]: t.skillsList["Tools & Others"],
    [t.categories["IDE"]]: t.skillsList["IDE"]
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section className="skills" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.div variants={categoryVariants} className="section-header">
            <h2 className="section-title">
              <span className="section-number">02.</span>
              {t.title}
            </h2>
          </motion.div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="skill-category"
              >
                <div className="glass-card skill-card">
                  <h3 className="category-title">{category}</h3>
                  <div className="skills-list">
                    {skillList.map((skill, index) => (
                      <motion.div
                        key={skill}
                        variants={skillVariants}
                        custom={index}
                        className="skill-item"
                        whileHover={{ 
                          scale: 1.05,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <span className="skill-name">{skill}</span>
                        <div className="skill-glow"></div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}