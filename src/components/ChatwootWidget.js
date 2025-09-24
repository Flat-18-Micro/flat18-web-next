'use client'

import { useEffect } from 'react'
import { initChatwoot } from '@/utils/chatwoot'

const LOAD_TIMEOUT_MS = 5000
const CHATWOOT_BASE_URL = 'https://chatwoot.flat18.co.uk'
const CHATWOOT_TOKEN = 'krt1otbtLdpkie19rPwPThai'

export default function ChatwootWidget() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {}
    }

    let hasStarted = false
    let hasLoaded = false
    let idleCallbackId = null
    let timeoutId = null
    const abortControllers = new Set()

    const clearDeferredHandles = () => {
      if (idleCallbackId !== null && 'cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleCallbackId)
        idleCallbackId = null
      }

      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }
    }

    const waitForChatwoot = (retries = 0) => {
      if (window.$chatwoot) {
        return Promise.resolve(window.$chatwoot)
      }

      if (retries > 20) {
        return Promise.resolve(undefined)
      }

      return new Promise((resolve) => {
        setTimeout(() => {
          waitForChatwoot(retries + 1).then(resolve)
        }, 200)
      })
    }

    const applyChatIdentity = (identifier, geo) => {
      if (!identifier) {
        return
      }

      waitForChatwoot().then(() => {
        try {
          if (window.$chatwoot) {
            window.$chatwoot.setUser(identifier, {
              name: geo ? `${geo} - ${identifier}` : identifier,
            })
          }
        } catch (error) {
          console.warn('Chatwoot identity error', error)
        }
      })
    }

    const fetchMetricsData = async () => {
      let controller

      try {
        controller = new AbortController()
        abortControllers.add(controller)

        let storedIdentifier = ''
        try {
          storedIdentifier = localStorage?.getItem('webM') || ''
        } catch (storageError) {
          console.warn('LocalStorage access error:', storageError)
        }

        const query = storedIdentifier ? `&webM=${storedIdentifier}` : ''
        const url = `https://api.flat18.co.uk/metrics/webm/index.php?geo=1${query}&t=${Date.now()}`

        const fetchTimeout = setTimeout(() => controller.abort(), LOAD_TIMEOUT_MS)

        const response = await fetch(url, {
          mode: 'cors',
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        })

        clearTimeout(fetchTimeout)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()

        if (data?.webM) {
          window.webM = data.webM
          window.geoCityCountry = data.geo || 'Unknown'

          try {
            const persisted = storedIdentifier || data.webM
            localStorage?.setItem('webM', persisted)
            applyChatIdentity(persisted, window.geoCityCountry)
          } catch (storageError) {
            console.warn('LocalStorage write error:', storageError)
          }
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Metrics fetch request timed out')
        } else {
          console.error('Metrics fetch error:', error)
        }
      } finally {
        if (controller) {
          abortControllers.delete(controller)
        }
      }
    }

    const loadChatwoot = () => {
      if (hasLoaded) {
        return
      }

      hasLoaded = true
      clearDeferredHandles()

      initChatwoot({
        baseUrl: CHATWOOT_BASE_URL,
        websiteToken: CHATWOOT_TOKEN,
        settings: {
          position: 'right',
          type: 'standard',
          launcherTitle: 'Chat with us',
          darkMode: 'dark',
        },
      })

      fetchMetricsData()
    }

    const startLoading = () => {
      if (hasStarted) {
        return
      }

      hasStarted = true
      loadChatwoot()
    }

    const scheduleDeferredLoad = () => {
      if (hasStarted) {
        return
      }

      clearDeferredHandles()

      if ('requestIdleCallback' in window) {
        idleCallbackId = window.requestIdleCallback(() => {
          startLoading()
        }, { timeout: LOAD_TIMEOUT_MS })
      } else {
        timeoutId = window.setTimeout(() => {
          startLoading()
        }, LOAD_TIMEOUT_MS)
      }
    }

    const handlePrepareMessage = (event) => {
      if (!event.detail?.message) {
        return
      }

      startLoading()

      waitForChatwoot().then(() => {
        setTimeout(() => {
          const messageInput = document.querySelector('.DashboardApp .ChatInput__input')
          if (messageInput) {
            messageInput.value = event.detail.message
            const inputEvent = new Event('input', { bubbles: true })
            messageInput.dispatchEvent(inputEvent)
            messageInput.focus()
          }
        }, 1000)
      })
    }

    const pointerListener = () => startLoading()
    const keyListener = () => startLoading()
    const focusListener = () => startLoading()
    const loadListener = () => startLoading()

    window.addEventListener('pointerdown', pointerListener, { once: true, passive: true })
    window.addEventListener('keydown', keyListener, { once: true })
    window.addEventListener('focus', focusListener, { once: true })
    window.addEventListener('chatwoot:load', loadListener)
    window.addEventListener('chatwoot:prepareMessage', handlePrepareMessage)

    scheduleDeferredLoad()

    return () => {
      clearDeferredHandles()
      abortControllers.forEach((controller) => controller.abort())
      abortControllers.clear()

      window.removeEventListener('pointerdown', pointerListener)
      window.removeEventListener('keydown', keyListener)
      window.removeEventListener('focus', focusListener)
      window.removeEventListener('chatwoot:load', loadListener)
      window.removeEventListener('chatwoot:prepareMessage', handlePrepareMessage)
    }
  }, [])

  return null
}
