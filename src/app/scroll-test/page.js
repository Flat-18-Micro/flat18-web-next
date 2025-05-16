'use client'

import { useEffect } from 'react'
import styles from '@/styles/component-css/TestPage.module.css'

export default function ScrollTestPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Scroll Test Page'
  }, [])

  return (
    <main className={styles.testPage}>
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Scroll Down to Test</h1>
      </div>
      
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(25, 253, 178, 0.05)' }}>
        <div>
          <h2>Section 2</h2>
          <p>The navbar should now be in scrolled state and the body should have the is-scrolled class.</p>
        </div>
      </div>
      
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2>Section 3</h2>
          <p>Still scrolled!</p>
        </div>
      </div>
    </main>
  )
}
