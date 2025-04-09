'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Terms() {
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
          <h1 className="gradient-text doc-heading">FLAT18 Terms of Service and General Procedural Guidelines</h1>
          <div className="badge">Partially Updated: JUNE 2024</div>
          <p className="paragraph doc-para">This document is compatible with Flat18 Ease of Communication Standard (F18 EoCS) as of January 2024.</p>
          
          <div className="rich-text-block">
            <ol>
              <li><strong>Definitions</strong>
                <ul>
                  <li>"We", "us", "our", "Flat18", and "F18" refer to Flat Eighteen Microsystems Development LLC.</li>
                  <li>"You", "your", "client", and "customer" refer to the individual or entity engaging our services.</li>
                  <li>"Services" refers to any design, development, consulting, or other work we perform for you.</li>
                  <li>"Deliverables" refers to any websites, applications, designs, code, or other materials we create for you.</li>
                </ul>
              </li>
              
              <li><strong>Scope of Work</strong>
                <ul>
                  <li>We'll provide the services outlined in our proposal or agreement. Any work beyond this scope may require additional fees.</li>
                  <li>We reserve the right to refuse any project or request that we deem unethical, illegal, or beyond our capabilities.</li>
                </ul>
              </li>
              
              <li><strong>Payment Terms</strong>
                <ul>
                  <li>Payment schedules and methods will be outlined in our proposal or agreement.</li>
                  <li>Late payments may incur additional fees and/or suspension of services.</li>
                  <li>Discounted prices on invoices are valid only until the due date. If no due date is shown, the issue date is the due date. Invoice numbers always show the issue date (e.g., INV-20230113-XXX for 13th January, 2023). Invoices paid late will be at full price with no discount.</li>
                </ul>
              </li>
              
              <li><strong>Supply of Materials</strong>
                <ul>
                  <li>You need to provide all materials and info we specify, such as photos, written content, logos, source codes, log-in details, SSL certificates, and API keys. Delays in providing these can waste development hours, and unused hours won't roll over.</li>
                  <li>You agree to reimburse us for any requested expenses not included in our proposal, like templates, third-party software, stock photos, fonts, domain registration, project hosting, or similar expenses, meaning any development or creative monetary expense incurred but not listed.</li>
                </ul>
              </li>
              
              <li><strong>Backups</strong>
                <ul>
                  <li>You're responsible for maintaining your own backups. We're not liable for restoring any client data, websites, or software unless data loss results from our negligence. We rely on backup solutions from third parties like Webflow and Figma.</li>
                </ul>
              </li>
              
              <li><strong>Ownership of Domain Names and Hosting</strong>
                <ul>
                  <li>You should register domain names in your own name and account. If we register domains for you, we'll transfer them to you upon request, provided all outstanding invoices are paid.</li>
                  <li>We recommend you maintain your own hosting accounts. If we set up hosting for you, we'll provide access details, but you're responsible for maintaining and renewing these services.</li>
                </ul>
              </li>
              
              <li><strong>Intellectual Property Rights</strong>
                <ul>
                  <li>Upon full payment, you'll own the rights to the final deliverables we create specifically for you, except for any third-party elements (like stock photos or licensed software) which remain subject to their original licenses.</li>
                  <li>We retain the right to use the work in our portfolio and for promotional purposes, unless explicitly agreed otherwise.</li>
                  <li>Any tools, methods, or code we've developed independently remain our property, even if used in your project.</li>
                </ul>
              </li>
              
              <li><strong>Confidentiality</strong>
                <ul>
                  <li>We'll treat your confidential information with care and won't disclose it to third parties without your permission, except as required by law or for service provision.</li>
                  <li>This confidentiality obligation doesn't apply to information that's publicly available, that we knew before you told us, or that we receive from a third party without confidentiality obligations.</li>
                </ul>
              </li>
              
              <li><strong>Limitation of Liability</strong>
                <ul>
                  <li>Our liability is limited to the amount you've paid us for the services in question.</li>
                  <li>We're not liable for any indirect, consequential, special, or punitive damages, including lost profits or data.</li>
                  <li>We don't guarantee that our services will be error-free or uninterrupted, or that we'll correct all errors.</li>
                </ul>
              </li>
              
              <li><strong>Termination</strong>
                <ul>
                  <li>Either party may terminate the agreement with written notice if the other party breaches a material term and fails to remedy it within 30 days.</li>
                  <li>Upon termination, you'll pay us for all services rendered up to the termination date.</li>
                  <li>Any provisions that by their nature should survive termination will survive, including intellectual property rights, confidentiality, and limitation of liability.</li>
                </ul>
              </li>
              
              <li><strong>General Provisions</strong>
                <ul>
                  <li>These terms constitute the entire agreement between us and supersede any prior agreements or understandings.</li>
                  <li>If any provision is found to be unenforceable, the remaining provisions will remain in effect.</li>
                  <li>These terms are governed by the laws of the jurisdiction where we're based, without regard to conflict of law principles.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
