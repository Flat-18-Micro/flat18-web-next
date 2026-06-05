'use client'

import { useEffect } from 'react'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PricingPage.module.css'

export default function PricingPage() {
  useEffect(() => {
    // Initialize any necessary scripts or analytics
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }

    // Fetch metrics data if needed
    const q = localStorage && localStorage.getItem("webM") ? `&webM=${localStorage.getItem("webM")}` : ""
    fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q)
      .then(response => response.json())
      .then(data => {
        window.webM = data.webM
        window.geoCityCountry = data.geo
        let persist = localStorage && localStorage.getItem("webM") ? localStorage.getItem("webM") : data.webM
        localStorage.setItem("webM", persist)
      })
      .catch(error => console.warn('Metrics fetch error:', error))
  }, [])

  return (
    <main>
      <section className={styles.pricingPageWrapper}>
        <Breadcrumbs />

        <Pricing headingLevel="h1" />

        <div className={styles.container}>
          <div id="more-info" className={styles.pricingDetailsSection}>
            <h2 className={styles.sectionHeading}>What the price covers</h2>

            <div
              className={styles.detailsGrid}
            >
              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-code-slash"></i>
                </div>
                <h3 className={styles.detailTitle}>Full-stack development</h3>
                <p className={styles.detailText}>Frontend, backend, APIs, data models and deployment handled together.</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-palette"></i>
                </div>
                <h3 className={styles.detailTitle}>UI/UX design</h3>
                <p className={styles.detailText}>Clear flows, usable interfaces and design systems that engineers can build cleanly.</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-headset"></i>
                </div>
                <h3 className={styles.detailTitle}>Technical support</h3>
                <p className={styles.detailText}>Practical help during delivery, launch and handover.</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-kanban"></i>
                </div>
                <h3 className={styles.detailTitle}>Delivery control</h3>
                <p className={styles.detailText}>Clear scope, visible decisions and a steady route to release.</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-phone"></i>
                </div>
                <h3 className={styles.detailTitle}>Responsive design</h3>
                <p className={styles.detailText}>Interfaces designed and checked across desktop and mobile.</p>
              </div>

              <div className={styles.detailCard}>
                <div className={styles.detailIcon}>
                  <i className="bi bi-search"></i>
                </div>
                <h3 className={styles.detailTitle}>Launch basics</h3>
                <p className={styles.detailText}>Metadata, analytics, performance checks and practical release notes.</p>
              </div>
            </div>
          </div>

        </div>

        <div className={styles.container}>
          <Contact />
        </div>
      </section>
      <Footer />
    </main>
  )
}
