'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Tools from '@/components/Tools'
import HowItWorks from '@/components/HowItWorks'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  useEffect(() => {
    // Initialize any necessary scripts or analytics
    if (window.location.protocol !== 'https:') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }

    const q = localStorage && localStorage.getItem("webM") ? `&webM=${localStorage.getItem("webM")}` : ""
    fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q)
      .then(response => response.json())
      .then(data => {
        window.webM = data.webM
        window.geoCityCountry = data.geo
        let persist = localStorage && localStorage.getItem("webM") ? localStorage.getItem("webM") : data.webM
        localStorage.setItem("webM", persist)
      })
  }, [])

  return (
    <main>
      <Navbar />
      <div className="body-contents-wrapper">
        <Hero />
        <Tools />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </div>
    </main>
  )
} 