import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="theme-toggle"
    >
      <div className="toggle-container">
        <div className="sun-icon">☀️</div>
        <motion.button
          className={`toggle-switch ${theme === 'dark' ? 'dark' : 'light'}`}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="toggle-thumb"
            layout
            transition={{ type: "spring", stiffness: 700, damping: 30 }}
          />
        </motion.button>
        <div className="moon-icon">🌙</div>
      </div>
    </motion.div>
  )
}