'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

function isInternalRouteChange(event) {
  if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false
  }

  if ('button' in event && event.button !== 0) {
    return false
  }

  const anchor = event.target.closest?.('a[href]')

  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) {
    return false
  }

  const href = anchor.getAttribute('href') || ''
  const url = new URL(anchor.href, window.location.href)

  if (url.origin !== window.location.origin || !['http:', 'https:'].includes(url.protocol)) {
    return false
  }

  // ChatCtaLink opens the chat widget and deliberately prevents navigation.
  // Check the destination as well as the data attribute because the click
  // listener runs before ChatCtaLink's bubbling handler calls preventDefault().
  if (url.hash === '#contact-form' || (anchor.dataset.ctaSource && href.includes('#contact-form'))) {
    return false
  }

  return url.pathname !== window.location.pathname || url.search !== window.location.search
}

export default function PageTransition({ children }) {
  const pathname = usePathname()
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    const startTransition = (event) => {
      if (isInternalRouteChange(event)) {
        setIsNavigating(true)
      }
    }

    document.addEventListener('pointerdown', startTransition, true)
    document.addEventListener('click', startTransition, true)

    return () => {
      document.removeEventListener('pointerdown', startTransition, true)
      document.removeEventListener('click', startTransition, true)
    }
  }, [])

  useEffect(() => {
    setIsNavigating(false)
  }, [pathname])

  return (
    <div className={`page-transition ${isNavigating ? 'is-navigating' : ''}`}>
      <div className="page-transition-view" key={pathname}>
        {children}
      </div>
      <span className="page-transition-progress" aria-hidden="true" />
    </div>
  )
}
