import { trackSignalConversion } from '@/lib/analytics'

export const DEFAULT_CHATWOOT_BASE_URL = 'https://mailgun-contact.cloudflare-7fd.workers.dev/chatwoot'
export const CONTACT_FORM_URL = '/contact#contact-form'

const markChatwootAsFailed = () => {
  if (typeof window !== 'undefined') {
    window.__chatwootFailed = true
  }
}

const isChatwootAvailable = () => (
  typeof window !== 'undefined' &&
  !window.__chatwootFailed &&
  window.$chatwoot &&
  typeof window.$chatwoot.toggle === 'function'
)

/**
 * Initializes the Chatwoot widget
 * @param {Object} options - Configuration options
 * @param {string} options.baseUrl - The base URL of the Chatwoot instance
 * @param {string} options.websiteToken - The website token for the Chatwoot instance
 * @param {Object} options.settings - Chatwoot settings
 */
export const initChatwoot = (options = {}) => {
  // Only run on client side
  if (typeof window === 'undefined') return

  const {
    baseUrl = DEFAULT_CHATWOOT_BASE_URL,
    websiteToken = 'krt1otbtLdpkie19rPwPThai',
    settings = {
      position: "right",
      type: "standard",
      launcherTitle: "Chat with us"
    }
  } = options

  const resolvedBaseUrl = new URL(baseUrl, window.location.origin).toString().replace(/\/$/, '')

  // Set up Chatwoot settings
  window.chatwootSettings = settings

  // Register the X conversion listener for conversation initiation
  registerChatwootConversationListener()
  addChatLinkListeners()

  // Check if Chatwoot script is already loaded
  if (!window.chatwootSDK) {
    // Create and load the script
    const script = document.createElement('script')
    // Load the SDK from the public worker proxy so browsers do not touch the private upstream directly.
    script.src = `${resolvedBaseUrl}/packs/js/sdk.js`
    script.defer = true
    script.async = true

    // Initialize Chatwoot when script loads
    script.onload = function() {
      try {
        if (window.chatwootSDK && typeof window.chatwootSDK.run === 'function') {
          try {
            window.chatwootSDK.run({
              websiteToken: websiteToken,
              baseUrl: resolvedBaseUrl
            })
          } catch (error) {
            markChatwootAsFailed()
            console.log('Error initializing Chatwoot:', error)
          }

          /*
           * Add click listeners after Chatwoot has had time to initialise.
           * The delegated listener is also registered before this point so
           * links remain usable if the SDK never loads.
           */
          setTimeout(() => {
            addChatLinkListeners()
          }, 1000)
        } else {
          markChatwootAsFailed()
          console.log('Chatwoot SDK not available or run method not found')
        }
      } catch (error) {
        markChatwootAsFailed()
        console.log('Error initializing Chatwoot:', error)
      }
    }

    // Handle script load errors
    script.onerror = function() {
      markChatwootAsFailed()
      console.log('Failed to load Chatwoot script')
    }

    // Append the script to the document
    document.head.appendChild(script)
  } else {
    // If script is already loaded, just add the click listeners
    addChatLinkListeners()
  }
}

const trackChatwootXConversion = () => {
  if (typeof window === 'undefined') return
  if (typeof window.twq !== 'function') return

  try {
    window.twq('event', 'tw-oopi3-136y7b', {
      conversion_id: null,
      email_address: null,
      phone_number: null
    })
  } catch (error) {
    console.error('twq event error', error)
  }
}

const trackChatwootConversationInitiated = () => {
  if (typeof window === 'undefined') return

  trackSignalConversion('chat_conversation_started', {
    path: window.location.pathname,
    method: 'live_chat',
  })

  if (typeof window.twq !== 'function') return

  try {
    window.twq('event', 'tw-oopi3-rbyil', {})
  } catch (error) {
    console.error('twq event error', error)
  }
}

const registerChatwootConversationListener = () => {
  if (typeof window === 'undefined') return
  if (window.__chatwootConversationListenerRegistered) return
  window.__chatwootConversationListenerRegistered = true

  let fired = false
  const handler = () => {
    if (fired) return
    fired = true
    window.removeEventListener('chatwoot:on-message', handler)
    trackChatwootConversationInitiated()
  }

  window.addEventListener('chatwoot:on-message', handler)
}

export { trackChatwootXConversion, trackChatwootConversationInitiated, registerChatwootConversationListener }

/**
 * Adds a delegated click listener to all links ending in #chat.
 * Delegation keeps these links usable while Chatwoot is loading or if its
 * script fails before it can attach its own widget API.
 */
export const addChatLinkListeners = () => {
  if (typeof window === 'undefined' || window.__chatwootChatLinksListenerRegistered) return

  const handleChatLinkClick = (event) => {
    if (event.defaultPrevented) return

    const link = event.target.closest?.('a[href$="#chat"]')
    if (!link) return

    event.preventDefault()
    openChatwootOrFallback()
  }

  document.addEventListener('click', handleChatLinkClick)
  window.__chatwootChatLinksListenerRegistered = true
}

/**
 * Toggles the Chatwoot widget
 */
export const toggleChatwoot = () => {
  // Only run on client side
  if (typeof window === 'undefined') return

  if (isChatwootAvailable()) {
    const wasOpen = Boolean(window.$chatwoot.isOpen)
    window.$chatwoot.toggle()
    if (!wasOpen) {
      trackChatwootXConversion()
    }
  }
}

/**
 * Opens the Chatwoot widget
 */
export const openChatwoot = () => {
  openChatwootOrFallback()
}

/**
 * Opens the Chatwoot widget when available, otherwise falls back to the contact form.
 * @param {Object} options
 * @param {string} options.fallbackUrl - URL to open when Chatwoot is unavailable.
 * @param {boolean} options.trackFallback - Whether to track the fallback as a chat open.
 */
export const openChatwootOrFallback = (options = {}) => {
  if (typeof window === 'undefined') return false

  const {
    fallbackUrl = CONTACT_FORM_URL,
    trackFallback = true,
  } = options

  if (isChatwootAvailable()) {
    try {
      if (!window.$chatwoot.isOpen) {
        window.$chatwoot.toggle()
        trackChatwootXConversion()
      }
      return true
    } catch (error) {
      markChatwootAsFailed()
      console.warn('Chatwoot open error:', error)
    }
  }

  if (trackFallback) {
    trackChatwootXConversion()
  }

  window.location.href = fallbackUrl
  return false
}

/**
 * Closes the Chatwoot widget
 */
export const closeChatwoot = () => {
  // Only run on client side
  if (typeof window === 'undefined') return

  if (isChatwootAvailable() && window.$chatwoot.isOpen) {
    window.$chatwoot.toggle()
  }
}
