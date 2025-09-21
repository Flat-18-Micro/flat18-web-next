'use client'

import { useEffect, useState, useCallback } from 'react'

export function useScrollBackground() {
  const [currentSectionBg, setCurrentSectionBg] = useState('var(--bg)')

  const updateMainBackground = useCallback((backgroundVariable) => {
    const mainElement = document.querySelector('main')
    if (mainElement) {
      // Set the background using CSS variable for automatic theming
      mainElement.style.backgroundColor = backgroundVariable
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

// Helper function to get section background CSS variable for current section
export function getSectionBackground(sectionName) {
  // Convert camelCase to kebab-case for CSS variable names
  const kebabCase = sectionName.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `var(--section-bg-${kebabCase})`
}
