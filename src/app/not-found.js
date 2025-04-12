'use client'

import Link from 'next/link'
import { useEffect } from 'react'

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
        window.ackeeTracker.record('404_error', { path: window.location.pathname })
      }
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
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
  )
}
