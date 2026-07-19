'use client'

import { analytics, trackSignalEvent } from '@/lib/analytics'
import { openChatwootOrFallback } from '@/utils/chatwoot'

export default function ChatCtaLink({
  children = 'Chat with us',
  className = '',
  source = 'general',
  href = '/contact#contact-form',
  variant = 'chat',
  signalLabel,
}) {
  const handleClick = (event) => {
    event.preventDefault()
    trackSignalEvent(signalLabel ?? source)
    analytics.chat.open(source)
    openChatwootOrFallback({ fallbackUrl: href })
  }

  return (
    <a
      href={href}
      className={className}
      data-cta-source={source}
      data-signal-label={signalLabel ?? source}
      onClick={handleClick}
    >
      {children}
      {variant === 'icon' ? <i className="bi bi-arrow-right" aria-hidden="true" /> : null}
    </a>
  )
}
