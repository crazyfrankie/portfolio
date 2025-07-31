import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  return (
    <section className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div variants={itemVariants} className="section-header">
            <h2 className="section-title">
              <span className="section-number">01.</span>
              About Me
            </h2>
          </motion.div>

          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <div className="glass-card">
                <p>
                  Hello! I'm a passionate full-stack developer who enjoys creating things that live on the internet. 
                  My interest in web development started back in 2018 when I decided to try editing custom themes — 
                  turns out hacking together HTML & CSS taught me a lot about web development!
                </p>
                
                <p>
                  Fast-forward to today, and I've had the privilege of working at various companies, 
                  from startups to large corporations. My main focus these days is building accessible, 
                  inclusive products and digital experiences for a variety of clients.
                </p>

                <p>
                  I also recently launched a course that covers everything you need to build a web app 
                  with the Spotify API using Node & React.
                </p>

                <p>Here are a few technologies I've been working with recently:</p>
                
                <ul className="tech-list">
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>Next.js</li>
                  <li>Python</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-image">
              <div className="image-container">
                <div className="image-overlay"></div>
                <div className="profile-image">
                  <div className="image-placeholder">
                    <div className="avatar-icon">👨‍💻</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}