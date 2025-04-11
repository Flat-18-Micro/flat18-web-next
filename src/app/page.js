'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tools from '@/components/Tools'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import Portfolio from '@/components/Portfolio'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function Home() {
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
      .catch(error => console.log('Metrics fetch error:', error))
  }, [])

  return (
    <PageTransition>
      <main>
        <Navbar />
        <Hero />
        <Features />
        <Tools />
        <HowItWorks />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  )
}