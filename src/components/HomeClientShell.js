'use client'

import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import FeaturedWork from '@/components/FeaturedWork'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Portfolio from '@/components/Portfolio'
import Tools from '@/components/Tools'
import Testimonials from '@/components/Testimonials'
import { useScrollBackground } from '@/hooks/useScrollBackground'

export default function HomeClientShell() {
  useScrollBackground()

  return (
    <>
      <Hero />
      <FeaturedWork />
      <Testimonials />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <Portfolio />
      <FAQ />
      <Contact />
      <Tools />
      <Footer />
    </>
  )
}
