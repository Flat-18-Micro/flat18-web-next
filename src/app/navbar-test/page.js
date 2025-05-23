'use client'

import styles from '@/styles/component-css/TestPage.module.css'

export default function NavbarTest() {
  return (
    <main className={styles.testPage}>
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Scroll Down to Test Navbar</h1>
      </div>
      
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(25, 253, 178, 0.05)' }}>
        <div>
          <h2>Section 2</h2>
          <p>The navbar should now be hidden as you scrolled down.</p>
          <p>Scroll back up to see it reappear.</p>
        </div>
      </div>
      
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2>Section 3</h2>
          <p>Continue scrolling to test the navbar behavior.</p>
        </div>
      </div>
      
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(25, 253, 178, 0.05)' }}>
        <div>
          <h2>Section 4</h2>
          <p>The navbar should appear when scrolling up and disappear when scrolling down.</p>
        </div>
      </div>
      
      <div className={styles.testSection} style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <h2>Section 5</h2>
          <p>Final test section.</p>
        </div>
      </div>
    </main>
  )
}
