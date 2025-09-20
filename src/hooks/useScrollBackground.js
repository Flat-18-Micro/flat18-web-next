'use client'

import { useEffect, useState, useCallback } from 'react'

export function useScrollBackground() {
  const [currentSectionBg, setCurrentSectionBg] = useState('var(--bg)')

  const updateMainBackground = useCallback((backgroundColor) => {
    const mainElement = document.querySelector('main')
    if (mainElement) {
      mainElement.style.backgroundColor = backgroundColor
    }
  }, [])

  const handleScroll = useCallback(() => {
    // Get all sections with data-bg-color attribute
    const sections = document.querySelectorAll('section[data-bg-color], footer[data-bg-color]')
    if (!sections.length) return

    let currentSection = null
    let maxVisibility = 0

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top + window.scrollY
      const sectionBottom = sectionTop + rect.height

      // Calculate how much of the section is visible in the viewport
      const viewportTop = window.scrollY
      const viewportBottom = window.scrollY + window.innerHeight

      const visibleTop = Math.max(sectionTop, viewportTop)
      const visibleBottom = Math.min(sectionBottom, viewportBottom)
      const visibleHeight = Math.max(0, visibleBottom - visibleTop)
      const visibilityRatio = visibleHeight / window.innerHeight

      // Use the section with the highest visibility ratio (minimum 10% visible)
      if (visibilityRatio > maxVisibility && visibilityRatio > 0.1) {
        maxVisibility = visibilityRatio
        currentSection = section
      }
    })

    if (currentSection) {
      const backgroundColor = currentSection.getAttribute('data-bg-color')
      if (backgroundColor && backgroundColor !== currentSectionBg) {
        setCurrentSectionBg(backgroundColor)
        updateMainBackground(backgroundColor)
      }
    }
  }, [currentSectionBg, updateMainBackground])

  useEffect(() => {
    // Set initial background
    handleScroll()

    // Add scroll listener with throttling
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', throttledScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [handleScroll])

  return currentSectionBg
}

// Section background colors mapping - Easy to customize per section
// Each section gets distinct colors for clear visual contrast in both themes
export const SECTION_BACKGROUNDS = {
  // Dark theme colors (default)
  dark: {
    hero: '#080a10',           // Dark base - deepest dark
    stats: '#0f1118',          // Dark accent - slightly lighter
    features: '#15181e',       // Modern dark - blue-grey tint
    featuredWork: '#0e1014',   // Modern dark variant - subtle difference
    howItWorks: '#0a0c10',     // Blue dark - cooler tone
    pricing: '#0d1117',        // Blue dark variant - github-like
    faq: '#090a0d',            // Modern dark 2 - very dark
    contact: '#0b1429',        // Blue dark with hint - warmer blue
    portfolio: '#12151b',      // Slightly lighter than base
    tools: '#0f1118',          // Dark accent (repeat for rhythm)
    testimonials: '#15181e',   // Modern dark (repeat for rhythm)
    footer: '#0e1014'          // Modern dark variant (repeat for rhythm)
  },
  // Light theme colors
  light: {
    hero: '#ffffff',           // Pure white
    stats: '#f8f9fa',          // Light grey
    features: '#f1f3f4',       // Slightly darker grey
    featuredWork: '#e8eaed',   // Medium light grey
    howItWorks: '#e1e3e6',     // Darker grey
    pricing: '#f5f6f7',        // Very light grey
    faq: '#f0f2f5',            // Light blue-grey
    contact: '#e4e6ea',        // Medium grey
    portfolio: '#f8f9fa',      // Light grey (repeat for rhythm)
    tools: '#f1f3f4',          // Slightly darker grey (repeat)
    testimonials: '#e8eaed',   // Medium light grey (repeat)
    footer: '#e1e3e6'          // Darker grey (repeat)
  }
}

// Helper function to get current theme
function getCurrentTheme() {
  if (typeof window === 'undefined') return 'dark'
  return document.documentElement.classList.contains('light') ? 'light' : 'dark'
}

// Helper function to get section background color for current theme
export function getSectionBackground(sectionName) {
  const theme = getCurrentTheme()
  return SECTION_BACKGROUNDS[theme][sectionName] || SECTION_BACKGROUNDS.dark[sectionName]
}
