'use client'

import { useEffect } from 'react'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PricingPage.module.css'

const ROUTES = [
  {
    number: '01',
    title: 'MVP Sprint',
    description: 'For a focused first version with a clear route from scope to handover.',
    includes: ['Product scoping', 'UX/UI direction', 'Full-stack MVP build', 'Deployment support'],
  },
  {
    number: '02',
    title: 'Product Build',
    description: 'For serious end-to-end launches that need planning, design and integration work.',
    includes: ['Product planning', 'Interface design', 'Frontend and backend development', 'Testing and release support'],
  },
  {
    number: '03',
    title: 'Monthly Studio',
    description: 'For teams that need a senior product partner after launch.',
    includes: ['Feature delivery', 'UX improvements', 'Technical support', 'Refactoring and experiments'],
  },
]

export default function PricingPage() {
  useEffect(() => {
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }
  }, [])

  return (
    <main>
      <section className={styles.pricingPageWrapper}>
        <Breadcrumbs />

        <Pricing headingLevel="h1" />

        <div className={styles.container}>
          <section id="routes" className={styles.routeGuide}>
            <div className={styles.routeGuideHeading}>
              <h2 className={styles.routeGuideTitle}>Find the right route</h2>
              <p className={styles.routeGuideIntro}>
                Start with the level of support that matches where your product is now. We can adjust the route as the work becomes clearer.
              </p>
            </div>

            <div className={styles.routeGuideGrid}>
              {ROUTES.map((route) => (
                <article key={route.title} className={styles.routeGuideCard}>
                  <span className={styles.routeGuideNumber}>{route.number}</span>
                  <h3 className={styles.routeGuideCardTitle}>{route.title}</h3>
                  <p className={styles.routeGuideCardText}>{route.description}</p>
                  <ul className={styles.routeGuideList}>
                    {route.includes.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

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
