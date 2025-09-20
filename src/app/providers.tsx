'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Return default values instead of throwing during SSG or when provider is not available
    return {
      theme: 'system' as Theme,
      setTheme: () => {},
      resolvedTheme: 'dark' as 'light' | 'dark'
    }
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('system')
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('dark')
  const [mounted, setMounted] = useState(false)

  // Get system preference
  const getSystemTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }
    return 'dark' // Default fallback
  }

  // Apply theme to HTML element
  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement
      
      // Remove existing theme classes
      root.classList.remove('light', 'dark')
      
      // Add new theme class
      root.classList.add(newTheme)
      
      // Update resolved theme
      setResolvedTheme(newTheme)
    }
  }

  // Set theme and persist to localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    
    if (typeof window !== 'undefined') {
      if (newTheme === 'system') {
        localStorage.removeItem('theme')
        applyTheme(getSystemTheme())
      } else {
        localStorage.setItem('theme', newTheme)
        applyTheme(newTheme)
      }
    }
  }

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme') as Theme | null
      
      if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
        setThemeState(savedTheme)
        applyTheme(savedTheme)
      } else {
        // Use system preference
        setThemeState('system')
        applyTheme(getSystemTheme())
      }
      
      setMounted(true)
    }
  }, [])

  // Listen for system theme changes
  useEffect(() => {
    if (typeof window !== 'undefined' && theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      
      const handleChange = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
          applyTheme(e.matches ? 'dark' : 'light')
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange)
      }
    }
  }, [theme])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="theme-loading">
        {children}
      </div>
    )
  }

  const value: ThemeContextType = {
    theme,
    setTheme,
    resolvedTheme,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

// Theme switcher component
interface ThemeSwitcherProps {
  className?: string
  showLabel?: boolean
}

export function ThemeSwitcher({ className = '', showLabel = false }: ThemeSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    if (theme === 'system') {
      // If currently system, switch to opposite of current resolved theme
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    } else if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'system') {
      return resolvedTheme === 'dark' ? 'bi-moon-stars' : 'bi-sun'
    }
    return theme === 'dark' ? 'bi-moon-stars' : 'bi-sun'
  }

  const getLabel = () => {
    if (theme === 'system') {
      return `Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`
    }
    return `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`
  }

  // Don't render during SSG to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className={`theme-switcher ${className}`}
        aria-label="Toggle theme"
        title="Toggle theme"
        type="button"
        disabled
      >
        <i className="bi bi-moon-stars" aria-hidden="true"></i>
        {showLabel && (
          <span className="theme-switcher-label">
            Auto
          </span>
        )}
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={`theme-switcher ${className}`}
      aria-label={getLabel()}
      title={getLabel()}
      type="button"
    >
      <i className={`bi ${getIcon()}`} aria-hidden="true"></i>
      {showLabel && (
        <span className="theme-switcher-label">
          {theme === 'system' ? 'Auto' : theme === 'dark' ? 'Dark' : 'Light'}
        </span>
      )}
    </button>
  )
}

// Export types for use in other components
export type { Theme, ThemeContextType }
