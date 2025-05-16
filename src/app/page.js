'use client'

import { useEffect } from 'react'
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
import HomePageSchema from '@/components/HomePageSchema'

export default function Home() {
  useEffect(() => {
    // Initialize any necessary scripts or analytics
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }

    // Fetch metrics data if needed
    try {
      const q = localStorage && localStorage.getItem("webM") ? `&webM=${localStorage.getItem("webM")}` : ""
      // Add cache-busting parameter and mode: 'cors' for better GitHub Pages compatibility
      fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q + '&t=' + new Date().getTime(), {
        mode: 'cors',
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          if (data && data.webM) {
            window.webM = data.webM;
            window.geoCityCountry = data.geo || 'Unknown';
            let persist = localStorage && localStorage.getItem("webM") ? localStorage.getItem("webM") : data.webM;
            localStorage.setItem("webM", persist);
          }
        })
        .catch(error => console.log('Metrics fetch error:', error));
    } catch (error) {
      console.log('Metrics fetch try/catch error:', error);
    }

    // Apply async-hide logic
    const asyncHide = () => {
      document.documentElement.classList.add('async-hide');
      const start = Date.now();
      const hide = {
        start,
        end: null,
        timeout: 800
      };
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.hide = hide;

      hide.end = () => {
        document.documentElement.classList.remove('async-hide');
      };

      setTimeout(() => {
        hide.end();
        hide.end = null;
      }, hide.timeout);
    };

    asyncHide();
  }, [])

  return (
    <PageTransition>
      <main>
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
        <HomePageSchema />
      </main>
    </PageTransition>
  )
}