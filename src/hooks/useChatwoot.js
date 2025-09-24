'use client'

import { useCallback, useEffect } from 'react'

const MAX_ATTEMPTS = 20
const RETRY_DELAY_MS = 200

export default function useChatwoot() {
  const requestWidgetLoad = useCallback(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.dispatchEvent(new CustomEvent('chatwoot:load'))
  }, [])

  const withChatwoot = useCallback((handler, attempt = 0) => {
    if (typeof window === 'undefined') {
      return
    }

    requestWidgetLoad()

    if (window.$chatwoot) {
      handler(window.$chatwoot)
      return
    }

    if (attempt >= MAX_ATTEMPTS) {
      return
    }

    setTimeout(() => withChatwoot(handler, attempt + 1), RETRY_DELAY_MS)
  }, [requestWidgetLoad])

  const toggle = useCallback(() => {
    withChatwoot((chatwoot) => chatwoot.toggle?.())
  }, [withChatwoot])

  const open = useCallback(() => {
    withChatwoot((chatwoot) => {
      if (!chatwoot.isOpen) {
        chatwoot.toggle?.()
      }
    })
  }, [withChatwoot])

  const close = useCallback(() => {
    withChatwoot((chatwoot) => {
      if (chatwoot.isOpen) {
        chatwoot.toggle?.()
      }
    })
  }, [withChatwoot])

  const setUser = useCallback((identifier, attributes = {}) => {
    withChatwoot((chatwoot) => chatwoot.setUser?.(identifier, attributes))
  }, [withChatwoot])

  const setCustomAttributes = useCallback((attributes = {}) => {
    withChatwoot((chatwoot) => chatwoot.setCustomAttributes?.(attributes))
  }, [withChatwoot])

  const prepareMessage = useCallback((message) => {
    if (typeof window === 'undefined') {
      return
    }

    requestWidgetLoad()

    const event = new CustomEvent('chatwoot:prepareMessage', {
      detail: { message },
    })
    window.dispatchEvent(event)
  }, [requestWidgetLoad])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined
    }

    window.toggleChatwoot = toggle
    window.openChatwoot = open
    window.closeChatwoot = close

    return () => {
      delete window.toggleChatwoot
      delete window.openChatwoot
      delete window.closeChatwoot
    }
  }, [toggle, open, close])

  return {
    toggle,
    open,
    close,
    setUser,
    setCustomAttributes,
    prepareMessage,
  }
}
