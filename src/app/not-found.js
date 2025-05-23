'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Footer from '@/components/Footer'

export default function NotFound() {
  useEffect(() => {
    // Log 404 errors to analytics
    if (typeof window !== 'undefined') {
      // Umami tracking
      if (typeof window.umami !== 'undefined') {
        window.umami.track('404_error', { path: window.location.pathname })
      }

      // Ackee tracking - use a more robust approach with retry
      const trackAckee = () => {
        try {
          // First check if we already have an ackeeInstance from AnalyticsScripts
          if (typeof window.ackeeInstance !== 'undefined' && typeof window.ackeeInstance.record === 'function') {
            // Use the existing instance
            window.ackeeInstance.record(undefined, {
              siteLocation: window.location.href,
              siteReferrer: document.referrer,
              siteTitle: '404 - Page Not Found',
              is404: true
            })
            console.log('404 tracked with existing Ackee instance')
            return true
          }

          // Otherwise try to create a new instance
          if (typeof window.ackeeTracker !== 'undefined') {
            // Get the server URL from the script tag
            const serverUrl = document.querySelector('[data-ackee-server]')?.getAttribute('data-ackee-server')
            const domainId = document.querySelector('[data-ackee-domain-id]')?.getAttribute('data-ackee-domain-id')

            if (serverUrl && domainId && typeof window.ackeeTracker.create === 'function') {
              // Create an instance and record the visit with custom attributes
              const instance = window.ackeeTracker.create(serverUrl, {
                detailed: true,
                ignoreLocalhost: true,
                ignoreOwnVisits: true
              })

              // Check if record method exists before calling it
              if (instance && typeof instance.record === 'function') {
                instance.record(domainId, {
                  siteLocation: window.location.href,
                  siteReferrer: document.referrer,
                  siteTitle: '404 - Page Not Found',
                  is404: true
                })
                console.log('404 tracked with new Ackee instance')
                return true
              } else {
                console.log('Ackee record method not available')
              }
            }
          }
          return false
        } catch (error) {
          console.error('Error with Ackee tracking:', error)
          return false
        }
      }

      // Try immediately
      const tracked = trackAckee()

      // If not successful, retry after a delay to ensure scripts are loaded
      if (!tracked) {
        const retryTimeout = setTimeout(() => {
          trackAckee()
        }, 3000)

        return () => clearTimeout(retryTimeout)
      }
    }
  }, [])

  return (
    <main>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center mt-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="btn btn-primary">
            <span className="btn-text">Return to Homepage</span>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
