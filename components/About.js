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
                  Hello! I'm a backend developer currently studying Computer Science and Technology as a third-year student at CQUT. 
                  I have a strong passion for programming and enjoy diving deep into backend technologies — especially in areas like distributed systems, 
                  distributed storage, and containerization.
                </p>
                
                <p>
                  My journey into development began in 2023, when I started experimenting with building simple systems and services. 
                  Since then, I've continued to explore the backend ecosystem, 
                  building various internal tools, business system backends, and experimenting with infrastructure technologies.
                </p>

                <p>
                  Fast-forward to today, I've had the opportunity to work on several projects, from full-featured web service backends to infrastructure-level tools. 
                  I enjoy solving real-world engineering problems and crafting robust, scalable services.
                </p>

                <p>
                  Recently, I've also been actively learning about system design and cloud-native architectures, 
                  and I'm particularly interested in how modern tools like Kubernetes and Docker are reshaping the way we build and deploy applications.
                </p>

                <p>
                  In parallel, I'm also actively learning about AI-related development — particularly around the architecture and implementation of agent platforms, 
                  inspired by tools like Coze, Dify, and n8n. I'm fascinated by how these systems orchestrate LLMs, tools, and workflows to build intelligent, autonomous agents, 
                  and I'm experimenting with building my own versions of such platforms.
                </p>

                <p>Here are a few technologies I've been working with recently:</p>
                
                <ul className="tech-list">
                  <li>Golang</li>
                  <li>Gin</li>
                  <li>gRPC</li>
                  <li>GORM</li>
                  <li>Python</li>
                  <li>Kubernetes</li>
                  <li>Docker</li>
                  <li>Milvus</li>
                  <li>PostgreSQL</li>
                  <li>Raft</li>
                  <li>Langchain</li>
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