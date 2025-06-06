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

    // Fetch metrics data with improved error handling
    const fetchMetricsData = async () => {
      try {
        // Safely get webM from localStorage
        let webMValue = '';
        try {
          webMValue = localStorage?.getItem('webM') || '';
        } catch (storageError) {
          console.warn('LocalStorage access error:', storageError);
          // Continue without localStorage data
        }

        const q = webMValue ? `&webM=${webMValue}` : '';
        const cacheBuster = `&t=${new Date().getTime()}`;
        const url = `https://api.flat18.co.uk/metrics/webm/index.php?geo=1${q}${cacheBuster}`;

        // Set timeout for the fetch request
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch(url, {
          mode: 'cors',
          headers: {
            'Accept': 'application/json'
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data && data.webM) {
          window.webM = data.webM;
          window.geoCityCountry = data.geo || 'Unknown';

          // Safely store in localStorage
          try {
            const persist = localStorage?.getItem('webM') || data.webM;
            localStorage.setItem('webM', persist);
          } catch (storageError) {
            console.warn('LocalStorage write error:', storageError);
          }
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Metrics fetch request timed out');
        } else {
          console.error('Metrics fetch error:', error);
        }
        // Continue execution - this is non-critical functionality
      }
    };

    // Execute the fetch
    fetchMetricsData();

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