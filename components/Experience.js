import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      company: "Tech Company",
      position: "Senior Full Stack Developer",
      duration: "2022 - Present",
      description: [
        "Developed and maintained web applications using React, Node.js, and PostgreSQL",
        "Led a team of 4 developers in building a customer-facing dashboard",
        "Improved application performance by 40% through code optimization",
        "Implemented CI/CD pipelines using GitHub Actions and AWS"
      ]
    },
    {
      company: "Startup Inc",
      position: "Frontend Developer",
      duration: "2020 - 2022",
      description: [
        "Built responsive web applications using React and TypeScript",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Integrated third-party APIs and payment systems",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      company: "Digital Agency",
      position: "Web Developer",
      duration: "2018 - 2020",
      description: [
        "Created custom WordPress themes and plugins for clients",
        "Developed e-commerce solutions using WooCommerce",
        "Optimized websites for SEO and performance",
        "Worked directly with clients to gather requirements"
      ]
    }
  ]

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
              Where I've Worked
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