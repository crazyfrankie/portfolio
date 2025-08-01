import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="language-toggle"
    >
      <div className="language-container">
        <motion.button
          className="language-button"
          onClick={toggleLanguage}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
        >
          <motion.div
            className="language-slider"
            animate={{ x: language === 'en' ? 0 : '100%' }}
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          />
          <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>
            EN
          </span>
          <span className={`lang-option ${language === 'cn' ? 'active' : ''}`}>
            中
          </span>
        </motion.button>
      </div>
    </motion.div>
  )
}