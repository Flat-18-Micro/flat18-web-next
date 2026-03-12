'use client'

import { useEffect, useCallback } from 'react'
import { usePathname } from 'next/navigation'

const DEFAULT_BG = 'var(--bg)'
const DEFAULT_TEXT = 'var(--text-primary)'

export function useScrollBackground() {
  const pathname = usePathname()

  const updateMainStyles = useCallback((backgroundVariable, textVariable) => {
    const resolvedBackground = backgroundVariable || DEFAULT_BG
    const resolvedText = textVariable || DEFAULT_TEXT

    const bodyElement = document.body
    if (bodyElement) {
      // Set the background and text color using CSS variables for automatic theming
      bodyElement.style.backgroundColor = resolvedBackground
      bodyElement.style.color = resolvedText
    }

    const rootElement = document.documentElement
    if (rootElement) {
      rootElement.style.setProperty('--current-section-bg', resolvedBackground)
      rootElement.style.setProperty('--current-section-text', resolvedText)
    }
  }, [])

  useEffect(() => {
    updateMainStyles(DEFAULT_BG, DEFAULT_TEXT)
  }, [pathname, updateMainStyles])

  useEffect(() => {
    return () => {
      updateMainStyles(DEFAULT_BG, DEFAULT_TEXT)
    }
  }, [updateMainStyles])

  return { currentSectionBg: DEFAULT_BG, currentSectionText: DEFAULT_TEXT }
}

// Helper function to get section background CSS variable for current section
export function getSectionBackground(sectionName) {
  // Convert camelCase to kebab-case for CSS variable names
  const kebabCase = sectionName.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `var(--section-bg-${kebabCase})`
}

// Helper function to get section text color CSS variable for current section
export function getSectionTextColor(sectionName) {
  // Convert camelCase to kebab-case for CSS variable names
  const kebabCase = sectionName.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `var(--section-text-${kebabCase})`
}
