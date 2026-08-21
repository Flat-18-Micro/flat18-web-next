'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { DEFAULT_CHATWOOT_BASE_URL, initChatwoot, trackChatwootXConversion } from '@/utils/chatwoot'

const CHATWOOT_BASE_URL = DEFAULT_CHATWOOT_BASE_URL
const CHATWOOT_TOKEN = 'krt1otbtLdpkie19rPwPThai'
const CHAT_PREFILL_PRESETS = {
  intro: 'Hi Flat 18 - I would like to talk about a project.',
  pricing: 'Hi Flat 18 - can you share pricing and timelines?',
  mvp: 'Hi Flat 18 - I am looking to build a curated MVP.',
  redesign: 'Hi Flat 18 - I am interested in redesigning or rebuilding a product.',
  support: 'Hi Flat 18 - I need senior support for an existing product.',
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
    let latestInstantToken = 0

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

    const loadChatwoot = () => {
      if (hasLoaded) {
        return
      }

      hasLoaded = true

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

    }

    const startLoading = () => {
      if (hasStarted) {
        return
      }

      hasStarted = true
      loadChatwoot()
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
            trackChatwootXConversion()
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
    startLoading()

    return () => {
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
