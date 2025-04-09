'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Privacy() {
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
          <h1 className="gradient-text doc-heading">FLAT18.CO.UK Policy on User Privacy</h1>
          <div className="rich-text-block">
            <p>This policy applies to ALL services, websites, apps, and projects directly provided by FLAT EIGHTEEN MICROSYSTEMS DEVELOPMENT LLC, (FLAT 18), including testing, beta, and alpha releases unless another data-handling policy exists and explicitly overrides this policy by way of actual declaration. This policy applies to site visitors worldwide.</p>
            <p>This document does not cover third-party services or platforms that may interact with Flat18 systems. Each third party has its own privacy policies, which will apply independently. Where we recognize a conflict between our policy and a third party's policy, we may try to inform the user, but we cannot take responsibility for third-party policies.</p>
            
            <h3>Cookies and Trackers</h3>
            <p>We do not use cookies or trackers to enhance your experience on our main site, flat18.co.uk, except for one exception. We use a cookie to make our website live chat sessions work. The live chat is a self-hosted Chatwoot instance which gathers no user information. On Flat18 projects, hosted, staged, or otherwise executed codebases, we may set cookies for the purpose of account and session management. In such a case, you will be informed of the cookie requirements.</p>
            
            <h3>Data Collection and Usage</h3>
            <p>Flat18 collects contact information from users during the account creation and usage process. This includes:</p>
            <ul>
              <li><strong>Telegram Handle</strong></li>
              <li><strong>Email Address</strong></li>
              <li><strong>Name</strong></li>
              <li><strong>Company Name</strong></li>
              <li><strong>IP Address</strong></li>
              <li><strong>Geolocation Data</strong></li>
            </ul>
            <p>This information is used for:</p>
            <ul>
              <li>Account management and authentication</li>
              <li>Communication regarding services and updates</li>
              <li>Providing customer support</li>
              <li>Processing payments</li>
              <li>Improving our services</li>
              <li>Compliance with legal obligations</li>
            </ul>
            
            <h3>Data Sharing</h3>
            <p>Flat18 does not sell or rent user data to third parties. We may share data with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</p>
            
            <h3>Data Retention</h3>
            <p>Flat18 aims to retain user information for 2 years. Users may request the deletion of their data from our accountancy system and our communications platform, provided they are not active clients of ours. We will comply with such requests, ensuring that no other personally-identifiable information is kept. However, we will retain records of IP addresses as part of our growing IP geolocation database, which helps us determine that a user has previously made contact with us.</p>
            
            <h3>Profiling and Analytics</h3>
            <p>Flat18 has identified certain geographical regions from which we encounter a large number of potential scams directed at Flat18. As a result, we actively consider the geographical location of a potential client and may ask additional questions to verify their sincerity. This is our only scope of profiling and does not limit anyone's ability to genuinely access our services. This information is never recorded or shared with third parties and is purely an internal practice which is loosely adhered to.</p>
            
            <h3>Third-Party Payment Processors</h3>
            <p>Flat18 uses third-party payment processors to handle financial transactions. These processors have their own privacy policies and security practices. We do not store or have access to your complete payment card details. Instead, we work with payment processors who specialize in the secure handling of credit card information.</p>
            
            <h3>User Rights</h3>
            <p>Users have the right to:</p>
            <ul>
              <li>Access their personal data</li>
              <li>Correct inaccuracies in their personal data</li>
              <li>Request deletion of their personal data</li>
              <li>Object to the processing of their personal data</li>
              <li>Request a copy of their personal data</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p>To exercise these rights, please contact us at hello@flat18.co.uk.</p>
            
            <h3>Security Measures</h3>
            <p>Flat18 is committed to protecting user data by employing industry-standard security measures. This includes the use of encryption, firewalls, secure access controls, and regular security audits. We ensure that all personal data is stored securely and that only authorized personnel have access to this information. Our security practices are regularly reviewed and updated to mitigate any potential risks and to comply with industry best practices.</p>
          </div>
          <div className="badge">Partially Updated: June 2024</div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
