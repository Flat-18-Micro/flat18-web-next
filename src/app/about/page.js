'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function About() {
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
    <main>
      <Navbar />
      <div className="body-contents-wrapper">
        <div className="content doc-page">
          <h1 className="gradient-text doc-heading">Welcome to Flat 18</h1>
          <img 
            src="/images/rotunda3.webp" 
            alt="Flat 18 office" 
            className="image-10"
            style={{ maxWidth: '100%', height: 'auto', margin: '2rem 0' }}
          />
          
          <div className="text-content">
            <h2>Who We Are</h2>
            <p>
              Flat 18 is a dedicated team of designers and developers passionate about creating exceptional digital experiences. 
              We specialize in bespoke design and development for websites, landing pages, and Webflow sites, tailored specifically 
              for startups, small businesses, and entrepreneurs.
            </p>
            
            <h2>Our Approach</h2>
            <p>
              We believe in a collaborative approach to web development. Our subscription model provides consistent, high-quality 
              support that allows us to truly understand your business and create digital solutions that align with your goals and values.
            </p>
            
            <h2>Our Services</h2>
            <ul>
              <li>Custom Website Development</li>
              <li>Landing Page Design and Optimization</li>
              <li>Webflow Design and Development</li>
              <li>UI/UX Design</li>
              <li>E-commerce Solutions</li>
              <li>Web Application Development</li>
              <li>Ongoing Maintenance and Support</li>
            </ul>
            
            <h2>Our Values</h2>
            <p>
              <strong>Quality:</strong> We never compromise on quality. Every pixel, every line of code, and every interaction is crafted with care.
            </p>
            <p>
              <strong>Transparency:</strong> We believe in open communication and keeping you informed throughout the development process.
            </p>
            <p>
              <strong>Innovation:</strong> We stay at the forefront of web technologies to deliver modern, future-proof solutions.
            </p>
            <p>
              <strong>Reliability:</strong> We deliver on our promises and are committed to your success.
            </p>
            
            <h2>Why Choose Flat 18?</h2>
            <p>
              When you work with Flat 18, you're not just hiring a service provider – you're partnering with a team that's invested in your success. 
              Our subscription model means we're in it for the long haul, providing consistent support and expertise as your business grows and evolves.
            </p>
            <p>
              We limit the number of active clients we work with to ensure each project receives the attention it deserves. 
              This focused approach allows us to deliver exceptional results and build lasting relationships with our clients.
            </p>
          </div>
        </div>
        
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
