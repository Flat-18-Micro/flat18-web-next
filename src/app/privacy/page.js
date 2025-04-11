'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function PrivacyPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — Privacy policy'
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }
  
  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay: 0.2
      }
    }
  }

  return (
    <main>
      <Navbar />
      <section className={styles.pageWrapper}>
        <div className={styles.backgroundGradient}></div>
        
        <motion.div 
          className={styles.container}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className={styles.pageContent}
            variants={contentVariants}
          >
            <h1 className={styles.pageHeading}>FLAT18.CO.UK Policy on User Privacy</h1>
            <div className={`${styles.textContent} ${styles.legalContent}`}>
              <p>This policy applies to ALL services, websites, apps, and projects directly provided by FLAT EIGHTEEN MICROSYSTEMS DEVELOPMENT LLC, (FLAT 18), including testing, beta, and alpha releases unless another data-handling policy exists and explicitly overrides this policy by way of actual declaration. This policy applies to site visitors worldwide.</p>
              <p>This document does not cover third-party services or platforms that may interact with Flat18 systems. Each third party has its own privacy policies, which will apply independently. Where we recognize a conflict between our policy and a third party's policy, we may try to inform the user, but we cannot take responsibility for third-party policies.</p>
              
              <h3>Cookies and Trackers</h3>
              <p>We do not use cookies or trackers to enhance your experience on our main site, flat18.co.uk, except for one exception. We use a cookie to make our website live chat sessions work. The live chat is a self-hosted Chatwoot instance which gathers no user information. On Flat18 projects, hosted, staged, or otherwise executed codebases, we may set cookies for the purpose of account and session management. In such a case, you will be informed of the cookie requirements.</p>
              
              <h3>Data Collection and Usage</h3>
              <p>Flat18 collects contact information from users during the account creation and usage process. This includes:</p>
              <ul role="list">
                <li><strong>Telegram Handle</strong></li>
                <li><strong>Email Address</strong></li>
                <li><strong>Company or Individual Name</strong></li>
                <li><strong>Physical Address</strong></li>
              </ul>
              <p>We may manually verify this information against a user's originating IP geolocation when we believe we have acquired it. However, we can only make educated guesses and assumptions about the IP address matched to the person with whom we are communicating.</p>
              <p>Flat18 does not knowingly utilise any third-party metrics service in any project on our servers. We rely on our own in-house metrics and analysis platform that ensures anonymity by excluding third-party plugins or services. The data derived from our service, which may comprise browser technology, accessing IP addresses, and referral URLs, is not used to identify an individual user.</p>
              <p>Whenever any personal (identifiable) data is stored on our servers, we will take every reasonable precaution to prevent breaches of security or leaking of said data. It is not and will never be our policy to disclose to any third party, the total or any part of the organized data collected on individuals which is either anonymous or identifiable; the only exception being formal, documented requests by police or law officials.</p>
              
              <h3>Data Retention and Deletion</h3>
              <p>Flat18 aims to retain user information for 2 years. Users may request the deletion of their data from our accountancy system and our communications platform, provided they are not active clients of ours. We will comply with such requests, ensuring that no other personally-identifiable information is kept. However, we will retain records of IP addresses as part of our growing IP geolocation database, which helps us determine that a user has previously made contact with us.</p>
              
              <h3>Profiling and Analytics</h3>
              <p>Flat18 has identified certain geographical regions from which we encounter a large number of potential scams directed at Flat18. As a result, we actively consider the geographical location of a potential client and may ask additional questions to verify their sincerity. This is our only scope of profiling and does not limit anyone's ability to genuinely access our services. This information is never recorded or shared with third parties and is purely an internal practice which is loosely adhered to.</p>
              
              <h3>Third-Party Payment Processors</h3>
              <p>We use third-party payment processors, such as Stripe and PayPal, for processing fiat-currency transactions. These processors have their own privacy policies, which apply when you visit their domains. It is the user's responsibility to research and understand these policies. We are limited in how we portray PayPal and Stripe on our payments pages.</p>
              
              <h3>User Rights and Requests</h3>
              <p>Users have the right to request the deletion, modification, or access to their data. To make such a request, users should communicate with us from their registered contact method, such as their Telegram handle or email address. We will then verify their identity through follow-up communication, requesting details about their interactions with us, such as the value, currency, and date of their last payment to us. Once verified, we will process the request accordingly.</p>
              
              <h3>Security Measures</h3>
              <p>Flat18 is committed to protecting user data by employing industry-standard security measures. This includes the use of encryption, firewalls, secure access controls, and regular security audits. We ensure that all personal data is stored securely and that only authorized personnel have access to this information. Our security practices are regularly reviewed and updated to mitigate any potential risks and to comply with industry best practices.</p>
            </div>
            <div className={styles.badge}>Partially Updated: June 2024</div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}
