'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function NotFound() {
  useEffect(() => {
    // Log 404 errors to analytics
    if (typeof window !== 'undefined') {
      // Umami tracking
      if (typeof window.umami !== 'undefined') {
        window.umami.track('404_error', { path: window.location.pathname })
      }

      // Ackee tracking
      if (typeof window.ackeeTracker !== 'undefined') {
        // Get the server URL from the script tag
        const serverUrl = document.querySelector('[data-ackee-server]')?.getAttribute('data-ackee-server')
        const domainId = document.querySelector('[data-ackee-domain-id]')?.getAttribute('data-ackee-domain-id')

        if (serverUrl && domainId) {
          // Create an instance and record the visit with custom attributes
          // This uses the proper record method for page visits
          window.ackeeTracker.create(serverUrl).record(domainId, {
            siteLocation: window.location.href,
            siteReferrer: document.referrer,
            siteTitle: '404 - Page Not Found',
            is404: true
          })
        }
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
