import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Reveal({ children, delay = 0, className = '' }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
