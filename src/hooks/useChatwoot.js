'use client'

import { useEffect } from 'react'

export default function useChatwoot() {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    // Function to toggle Chatwoot widget
    const toggleChatwoot = () => {
      if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
        window.$chatwoot.toggle()
      }
    }

    // Function to open Chatwoot widget
    const openChatwoot = () => {
      if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
        if (!window.$chatwoot.isOpen) {
          window.$chatwoot.toggle()
        }
      }
    }

    // Function to close Chatwoot widget
    const closeChatwoot = () => {
      if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
        if (window.$chatwoot.isOpen) {
          window.$chatwoot.toggle()
        }
      }
    }

    // Expose methods to window for global access
    window.toggleChatwoot = toggleChatwoot
    window.openChatwoot = openChatwoot
    window.closeChatwoot = closeChatwoot

    // Return cleanup function
    return () => {
      // Remove methods from window
      delete window.toggleChatwoot
      delete window.openChatwoot
      delete window.closeChatwoot
    }
  }, [])

  // Return methods for component use
  return {
    toggle: () => {
      if (typeof window !== 'undefined' && window.$chatwoot) {
        window.$chatwoot.toggle()
      }
    },
    open: () => {
      if (typeof window !== 'undefined' && window.$chatwoot && !window.$chatwoot.isOpen) {
        window.$chatwoot.toggle()
      }
    },
    close: () => {
      if (typeof window !== 'undefined' && window.$chatwoot && window.$chatwoot.isOpen) {
        window.$chatwoot.toggle()
      }
    },
    setUser: (identifier, attributes = {}) => {
      if (typeof window !== 'undefined' && window.$chatwoot) {
        window.$chatwoot.setUser(identifier, attributes)
      }
    },
    setCustomAttributes: (attributes = {}) => {
      if (typeof window !== 'undefined' && window.$chatwoot) {
        window.$chatwoot.setCustomAttributes(attributes)
      }
    },
    prepareMessage: (message) => {
      if (typeof window !== 'undefined') {
        const event = new CustomEvent('chatwoot:prepareMessage', {
          detail: { message }
        })
        window.dispatchEvent(event)
      }
    }
  }
}
