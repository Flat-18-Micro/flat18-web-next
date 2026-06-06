import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
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
const Testimonials = dynamic(() => import('@/components/Testimonials'))
const HowItWorks  = dynamic(() => import('@/components/HowItWorks'))
const Pricing     = dynamic(() => import('@/components/Pricing'))
const Portfolio   = dynamic(() => import('@/components/Portfolio'))
const FAQ         = dynamic(() => import('@/components/FAQ'))
const Contact     = dynamic(() => import('@/components/Contact'))
const Tools       = dynamic(() => import('@/components/Tools'))
const FinalCTA    = dynamic(() => import('@/components/FinalCTA'))
const Footer      = dynamic(() => import('@/components/Footer'))

export default function HomeClientShell() {
  return (
    <div className={styles.homeLanding}>
      <HashAnchorScroll />
      <ScrollBackground />
      <Hero />
      <TrustSection />
      <FeaturedWork />
      <Testimonials />
      <Features />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <FAQ />
      <Contact />
      <Tools />
      <FinalCTA />
      <Footer />
    </div>
  )
}
