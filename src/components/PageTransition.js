'use client'

import { motion } from 'framer-motion'
import { pageTransition } from '../utils/animations'

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  )
}
