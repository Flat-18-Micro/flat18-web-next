// Motion utilities for accessibility and reduced motion support
import React from 'react'
import { Variants } from 'framer-motion'

// Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Create motion variants that respect reduced motion preference
export const createMotionVariants = (variants: Variants): Variants => {
  if (prefersReducedMotion()) {
    // Return simplified variants with no animation
    const reducedVariants: Variants = {}
    Object.keys(variants).forEach(key => {
      reducedVariants[key] = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0 }
      }
    })
    return reducedVariants
  }
  return variants
}

// Common animation variants with reduced motion support
export const fadeInUp = createMotionVariants({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

export const fadeIn = createMotionVariants({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

export const slideInLeft = createMotionVariants({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

export const slideInRight = createMotionVariants({
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

export const scaleIn = createMotionVariants({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

export const staggerContainer = createMotionVariants({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
})

// Button variants with hover effects (disabled for reduced motion)
export const buttonVariants = createMotionVariants({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: prefersReducedMotion() ? {} : {
    scale: 1.05,
    boxShadow: "0 10px 25px rgba(47, 129, 247, 0.3)",
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  tap: prefersReducedMotion() ? {} : {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
})

export const cardVariants = createMotionVariants({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  hover: prefersReducedMotion() ? {} : {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

// Scroll-triggered animation variants
export const scrollVariants = createMotionVariants({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

// Navigation variants
export const navVariants = createMotionVariants({
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

// Modal/overlay variants
export const overlayVariants = createMotionVariants({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

export const modalVariants = createMotionVariants({
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
})

// Utility function to get motion props with reduced motion support
export const getMotionProps = (variants: Variants, options?: {
  initial?: string
  animate?: string
  whileHover?: string
  whileTap?: string
  transition?: any
}) => {
  if (prefersReducedMotion()) {
    return {
      initial: false,
      animate: false,
      whileHover: {},
      whileTap: {},
      transition: { duration: 0 }
    }
  }
  
  return {
    variants,
    initial: options?.initial || 'hidden',
    animate: options?.animate || 'visible',
    whileHover: options?.whileHover || undefined,
    whileTap: options?.whileTap || undefined,
    transition: options?.transition || undefined
  }
}

// Hook to check reduced motion preference reactively
export const useReducedMotion = () => {
  const [prefersReduced, setPrefersReduced] = React.useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReduced
}

const motionUtils = {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  buttonVariants,
  cardVariants,
  scrollVariants,
  navVariants,
  overlayVariants,
  modalVariants,
  getMotionProps,
  useReducedMotion,
  prefersReducedMotion,
  createMotionVariants
}

export default motionUtils
