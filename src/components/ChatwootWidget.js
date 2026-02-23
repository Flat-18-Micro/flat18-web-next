'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { initChatwoot } from '@/utils/chatwoot'

const LOAD_TIMEOUT_MS = 5000
const CHATWOOT_BASE_URL = 'https://chatwoot.flat18.co.uk'
const CHATWOOT_TOKEN = 'krt1otbtLdpkie19rPwPThai'
const CHAT_PREFILL_PRESETS = {
  intro: 'Hi Flat 18 - I would like to talk about a project.',
  pricing: 'Hi Flat 18 - can you share pricing and timelines?',
  mvp: 'Hi Flat 18 - I am looking to build an MVP.',
  redesign: 'Hi Flat 18 - I am interested in a website redesign.',
  support: 'Hi Flat 18 - I need help with an existing site.',
}

const resolvePrefillMessage = (value) => {
  if (!value) return ''
  const trimmed = String(value).trim()
  if (!trimmed) return ''
  const key = trimmed.toLowerCase()
  return CHAT_PREFILL_PRESETS[key] || trimmed
}

const isChatPath = (pathname = '') => {
  const normalized = pathname.replace(/\/+$/, '') || '/'
  if (normalized === '/chat') return true
  if (normalized === '/chat.html') return true
  if (normalized.endsWith('/chat/index.html')) return true
  return false
}

export default function ChatwootWidget() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const startLoadingRef = useRef(null)
  const triggerInstantRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {}
    }

    let hasStarted = false
    let hasLoaded = false
    let idleCallbackId = null
    let timeoutId = null
    const abortControllers = new Set()
    let latestInstantToken = 0

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

    const pointerListener = () => startLoading()
    const keyListener = () => startLoading()
    const focusListener = () => startLoading()
    const triggerInstantChat = ({ prefillMessage, prefillKey } = {}) => {
      const token = ++latestInstantToken

      waitForChatwoot().then(() => {
        if (token !== latestInstantToken || !window.$chatwoot) {
          return
        }

        try {
          if (typeof window.$chatwoot.toggle === 'function' && !window.$chatwoot.isOpen) {
            window.$chatwoot.toggle()
          }

          if (prefillMessage) {
            const attributes = {
              prefill_message: prefillMessage,
            }

            if (prefillKey && CHAT_PREFILL_PRESETS[prefillKey]) {
              attributes.prefill_key = prefillKey
            }

            if (typeof window.$chatwoot.setCustomAttributes === 'function') {
              window.$chatwoot.setCustomAttributes(attributes)
            }

            if (typeof window.$chatwoot.setConversationCustomAttributes === 'function') {
              window.$chatwoot.setConversationCustomAttributes(attributes)
            }
          }
        } catch (error) {
          console.warn('Chatwoot instant open error', error)
        }
      })
    }

    startLoadingRef.current = startLoading
    triggerInstantRef.current = triggerInstantChat

    window.addEventListener('pointerdown', pointerListener, { once: true, passive: true })
    window.addEventListener('keydown', keyListener, { once: true })
    window.addEventListener('focus', focusListener, { once: true })

    const initialPath = window.location?.pathname || ''
    if (isChatPath(initialPath)) {
      startLoading()
    }

    scheduleDeferredLoad()

    return () => {
      clearDeferredHandles()
      abortControllers.forEach((controller) => controller.abort())
      abortControllers.clear()

      window.removeEventListener('pointerdown', pointerListener)
      window.removeEventListener('keydown', keyListener)
      window.removeEventListener('focus', focusListener)

      startLoadingRef.current = null
      triggerInstantRef.current = null
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const currentPath = pathname || window.location?.pathname || ''
    if (!isChatPath(currentPath)) {
      return
    }

    const prefillRaw = searchParams?.get('data') || ''
    const prefillKey = prefillRaw ? prefillRaw.trim().toLowerCase() : ''
    const prefillMessage = resolvePrefillMessage(prefillRaw)

    startLoadingRef.current?.()
    triggerInstantRef.current?.({ prefillMessage, prefillKey })
  }, [pathname, searchParams])

  return null
}
