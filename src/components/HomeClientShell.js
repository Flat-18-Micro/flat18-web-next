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
import HomePageSchema from '@/components/HomePageSchema'
import { useScrollBackground } from '@/hooks/useScrollBackground'

export default function HomeClientShell() {
  useScrollBackground()

  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <FeaturedWork />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
      <Portfolio />
      <Tools />
      <Testimonials />
      <Footer />
      <HomePageSchema />
    </>
  )
}
