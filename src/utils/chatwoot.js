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
    baseUrl = 'https://chatwoot.flat18.co.uk',
    websiteToken = 'krt1otbtLdpkie19rPwPThai',
    settings = {
      position: "right",
      type: "standard",
      launcherTitle: "Chat with us"
    }
  } = options

  // Set up Chatwoot settings
  window.chatwootSettings = settings

  // Check if Chatwoot script is already loaded
  if (!window.chatwootSDK) {
    // Create and load the script
    const script = document.createElement('script')
    // Use the full URL to ensure it works on GitHub Pages
    script.src = `${baseUrl}/packs/js/sdk.js`
    script.defer = true
    script.async = true

    // Initialize Chatwoot when script loads
    script.onload = function() {
      try {
        if (window.chatwootSDK && typeof window.chatwootSDK.run === 'function') {
          window.chatwootSDK.run({
            websiteToken: websiteToken,
            baseUrl: baseUrl
          })

          // Add click listeners to chat links after Chatwoot is loaded
          setTimeout(() => {
            addChatLinkListeners()
          }, 1000)
        } else {
          console.log('Chatwoot SDK not available or run method not found')
        }
      } catch (error) {
        console.log('Error initializing Chatwoot:', error)
      }
    }

    // Handle script load errors
    script.onerror = function() {
      console.log('Failed to load Chatwoot script')
    }

    // Append the script to the document
    document.head.appendChild(script)
  } else {
    // If script is already loaded, just add the click listeners
    addChatLinkListeners()
  }
}

/**
 * Adds click event listeners to all links with href ending in #chat
 */
export const addChatLinkListeners = () => {
  // Only run on client side
  if (typeof window === 'undefined') return

  // Wait a bit to ensure Chatwoot is fully initialized
  setTimeout(() => {
    // Find all links with href ending in #chat
    const chatLinks = document.querySelectorAll('a[href$="#chat"]')

    // Add click event listeners to each link
    chatLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()

        // Toggle Chatwoot widget
        if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
          window.$chatwoot.toggle()
        }

        // Optionally scroll to the link's location
        const href = link.getAttribute('href')
        const targetId = href.replace(/.*#/, '')
        const targetElement = document.getElementById(targetId)

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' })
        }
      })
    })
  }, 1000) // Wait 1 second to ensure Chatwoot is initialized
}

/**
 * Toggles the Chatwoot widget
 */
export const toggleChatwoot = () => {
  // Only run on client side
  if (typeof window === 'undefined') return

  if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
    window.$chatwoot.toggle()
  }
}

/**
 * Opens the Chatwoot widget
 */
export const openChatwoot = () => {
  // Only run on client side
  if (typeof window === 'undefined') return

  if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
    if (!window.$chatwoot.isOpen) {
      window.$chatwoot.toggle()
    }
  }
}

/**
 * Closes the Chatwoot widget
 */
export const closeChatwoot = () => {
  // Only run on client side
  if (typeof window === 'undefined') return

  if (window.$chatwoot && typeof window.$chatwoot.toggle === 'function') {
    if (window.$chatwoot.isOpen) {
      window.$chatwoot.toggle()
    }
  }
}
