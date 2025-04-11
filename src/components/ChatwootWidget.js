'use client'

import { useEffect } from 'react'
import { initChatwoot } from '@/utils/chatwoot'

export default function ChatwootWidget() {
  useEffect(() => {
    initChatwoot({
      baseUrl: 'https://chatwoot.flat18.co.uk',
      websiteToken: 'krt1otbtLdpkie19rPwPThai',
      settings: {
        position: 'right',
        type: 'standard',
        launcherTitle: 'Chat with us',
        darkMode: 'dark'
      }
    })

    const q = localStorage?.getItem('webM') ? `&webM=${localStorage.getItem('webM')}` : ''
    fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q)
      .then(response => response.json())
      .then(data => {
        window.webM = data.webM
        window.geoCityCountry = data.geo
        const persist = localStorage?.getItem('webM') || data.webM
        localStorage.setItem('webM', persist)

        if (window.$chatwoot) {
          window.$chatwoot.setUser(persist, {
            name: `${window.geoCityCountry} - ${persist}`
          })
        }
      })

    const handlePrepareMessage = (event) => {
      if (window.$chatwoot && event.detail?.message) {
        setTimeout(() => {
          const messageInput = document.querySelector('.DashboardApp .ChatInput__input')
          if (messageInput) {
            messageInput.value = event.detail.message
            const inputEvent = new Event('input', { bubbles: true })
            messageInput.dispatchEvent(inputEvent)
            messageInput.focus()
          }
        }, 1000)
      }
    }

    window.addEventListener('chatwoot:prepareMessage', handlePrepareMessage)

    return () => {
      window.removeEventListener('chatwoot:prepareMessage', handlePrepareMessage)
    }
  }, [])

  return null
}
