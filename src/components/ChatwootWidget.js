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

    // Fetch metrics data with improved error handling
    const fetchMetricsData = async () => {
      try {
        // Safely get webM from localStorage
        let webMValue = '';
        try {
          webMValue = localStorage?.getItem('webM') || '';
        } catch (storageError) {
          console.warn('LocalStorage access error:', storageError);
          // Continue without localStorage data
        }

        const q = webMValue ? `&webM=${webMValue}` : '';
        const cacheBuster = `&t=${new Date().getTime()}`;
        const url = `https://api.flat18.co.uk/metrics/webm/index.php?geo=1${q}${cacheBuster}`;

        // Set timeout for the fetch request
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(url, {
          mode: 'cors',
          headers: {
            'Accept': 'application/json'
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.webM) {
          window.webM = data.webM;
          window.geoCityCountry = data.geo || 'Unknown';

          // Safely store in localStorage
          try {
            const persist = localStorage?.getItem('webM') || data.webM;
            localStorage.setItem('webM', persist);

            // Update Chatwoot user if available
            if (window.$chatwoot) {
              window.$chatwoot.setUser(persist, {
                name: `${window.geoCityCountry} - ${persist}`
              });
            }
          } catch (storageError) {
            console.warn('LocalStorage write error:', storageError);
          }
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Metrics fetch request timed out');
        } else {
          console.error('Metrics fetch error:', error);
        }
        // Continue execution - this is non-critical functionality
      }
    };

    // Execute the fetch
    fetchMetricsData();

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
