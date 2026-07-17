'use client'

import { analytics } from '@/lib/analytics'
import { openChatwootOrFallback } from '@/utils/chatwoot'

export default function ChatCtaLink({
  children = 'Chat with us',
  className = '',
  source = 'general',
  href = '/contact#contact-form',
  variant = 'chat',
}) {
  const handleClick = (event) => {
    event.preventDefault()
    analytics.chat.open(source)
    openChatwootOrFallback({ fallbackUrl: href })
  }

  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
      {variant === 'icon' ? <i className="bi bi-arrow-right" aria-hidden="true" /> : null}
    </a>
  )
}
