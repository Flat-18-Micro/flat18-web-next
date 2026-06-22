import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import WhoThisIsForSection from '@/components/WhoThisIsForSection'
import TrustSection from '@/components/TrustSection'
import FeaturedWork from '@/components/FeaturedWork'
import ScrollBackground from '@/components/ScrollBackground'
import HashAnchorScroll from '@/components/HashAnchorScroll'
import styles from '@/styles/component-css/HomeClientShell.module.css'

// Above-fold: Hero + FeaturedWork are eagerly loaded (critical path).
// Everything below is split into separate JS chunks via dynamic imports so the
// browser can parse and execute them AFTER the LCP element has painted.
// SSR is kept ON (default) so the HTML is still baked in at build time for SEO.

const Features    = dynamic(() => import('@/components/Features'))
const HowItWorks  = dynamic(() => import('@/components/HowItWorks'))
const Pricing     = dynamic(() => import('@/components/Pricing'))
const Contact     = dynamic(() => import('@/components/Contact'))
const FinalCTA    = dynamic(() => import('@/components/FinalCTA'))
const Footer      = dynamic(() => import('@/components/Footer'))

export default function HomeClientShell() {
  return (
    <div className={styles.homeLanding}>
      <HashAnchorScroll />
      <ScrollBackground />
      <Hero />
      <WhoThisIsForSection />
      <div className={styles.auditCta} aria-label="Tiny product audit">
        <div className={`${styles.auditCtaInner} max-w-content mx-auto px-6 sm:px-8`}>
          <span className={styles.auditCtaLabel}>Tiny audit</span>
          <p className={styles.auditCtaText}>
            Send your MVP or product link. We&rsquo;ll reply with 3 practical fixes.
          </p>
          <a href="#contact-form" className={styles.auditCtaLink}>
            Send link
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
      <FeaturedWork />
      <TrustSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  )
}
