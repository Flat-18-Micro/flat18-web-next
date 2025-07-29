'use client'

import useChatwoot from '@/hooks/useChatwoot'
import styles from '@/styles/component-css/FloatingChatButton.module.css'

export default function FloatingChatButton() {
  const chat = useChatwoot()

  return (
    <button
      type="button"
      aria-label="Open live chat"
      className={styles.floatingChatButton}
      onClick={() => chat.open()}
    >
      <i className="bi bi-chat-dots"></i>
    </button>
  )
}
