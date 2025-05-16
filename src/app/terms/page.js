'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function TermsPage() {
  useEffect(() => {
    // Set page title
    document.title = 'Flat18 — Terms of Service'
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
      <section className={styles.pageWrapper}>
        <Breadcrumbs />
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
            <h1 className={styles.pageHeading}>FLAT18 Terms of Service and General Procedural Guidelines</h1>
            <div className={styles.badge}>Partially Updated: JUNE 2024</div>
            <p className={styles.textContent}>This document is compatible with Flat18 Ease of Communication Standard (F18 EoCS) as of January 2024.</p>

            <div className={`${styles.textContent} ${styles.legalContent}`}>
              <p>Our limited liability company, FLAT 18 MICROSYSTEMS DEVELOPMENT LLC, is sometimes called: @f18micro, F18, Flat 18, FLAT18.CO.UK on different social and internet platforms. Flat 18 and any project under a flat18.co.uk subdomain are also covered by this document. We'll call you, the customer, "you" or "your". Flat 18, the service provider, will be referred to as "us", "we", or "our".</p>
              <p>Our interactions with you and the work we do for you are governed by the terms and guidelines below.</p>
              <ol role="list" className="terms-list">
                <li><strong>Hours of Operation</strong>
                  <ul role="list">
                    <li>We work on flexible schedules across multiple time zones. Our availability to answer your questions and handle queries, requests, and other correspondences is limited to 09:00 - 17:00 UTC (or GMT), Monday to Friday.</li>
                    <li>You can always message us outside of those hours and on weekends, but we might respond a bit slower.</li>
                  </ul>
                </li>
                <li><strong>Engaging Flat 18 for Work</strong>
                  <ul role="list">
                    <li>You can reach out to us about your project via Telegram (@f18micro), website live-chat (<a href="https://flat18.co.uk/">https://flat18.co.uk</a>), or email (<a href="mailto:hello@flat18.co.uk">hello@flat18.co.uk</a>).</li>
                    <li>In our chats, we help you decide if Flat 18 is the right fit for your project. We'll ask for details like the type of project (website, branding, app development, or a mix), the problems you're facing, and practical info like brand colours, imagery, and style preferences.</li>
                    <li>If you choose us for your project, we'll create an account for you, identified by a name, nickname, pseudonym, or contact detail. The scope of your project will be tracked in a Mattermost Focalboard or similar tools like Trello.</li>
                  </ul>
                </li>
                <li><strong>Scheduling and Queueing</strong>
                  <ul role="list">
                    <li>Invoices for our subscriptions are due immediately. We queue tasks, reviews, jobs, changes, and updates based on developer schedules and workflow. This might mean your development hours are spread out over a calendar month. You can always ask us for a more detailed update.</li>
                  </ul>
                </li>
                <li><strong>Payment</strong>
                  <ul role="list">
                    <li>We accept payments in USD, GBP, EUR, Bitcoin, Ethereum, and several ERC-20 tokens.</li>
                    <li>If you change your mind about a project after payment, you can get a refund of up to 50% if we haven't started the project within one month of receiving instructions/initial consultation, provided there are no outstanding tasks on your side.</li>
                  </ul>
                </li>
                <li><strong>Discounts and Promotions Validity</strong>
                  <ul role="list">
                    <li>Discounted prices on invoices are valid only until the due date. If no due date is shown, the issue date is the due date. Invoice numbers always show the issue date (e.g., INV-20230113-XXX for 13th January, 2023). Invoices paid late will be at full price with no discount.</li>
                  </ul>
                </li>
                <li><strong>Supply of Materials</strong>
                  <ul role="list">
                    <li>You need to provide all materials and info we specify, such as photos, written content, logos, source codes, log-in details, SSL certificates, and API keys. Delays in providing these can waste development hours, and unused hours won't roll over.</li>
                    <li>If your delay causes a project to pause before completion by the end of the month, your project will be automatically paused, and we won't invoice for extra hours until we review the project with you.</li>
                  </ul>
                </li>
                <li><strong>Communication</strong>
                  <ul role="list">
                    <li>We encourage using Issues on your git repository to track feedback and implementation. You can choose your preferred method and frequency for progress updates.</li>
                    <li>We'll suggest at least one day each week for a 10-30 minute text chat on your website live-circle, Telegram, or a voice call to discuss progress and any concerns. Additional meetings may be scheduled if needed.</li>
                  </ul>
                </li>
                <li><strong>Support</strong>
                  <ul role="list">
                    <li>We'll honour reasonable requests for technical support or revision for up to one month after project completion. We limit support requests to 2 requests no less than 2 weeks apart. A reasonable request includes instances where our delivered code contains detrimental bugs. Support ends after 1 month (or the specified period) even if no requests have been made. We reserve the right to withhold support if payment is outstanding.</li>
                  </ul>
                </li>
                <li><strong>Variations</strong>
                  <ul role="list">
                    <li>You can request as many reviews or changes to your project scope as you like. Changes might be made in as little as 48 hours. More complex updates may need more time.</li>
                    <li>If a change or variation is complex, we'll inform you and pause development until we review it with you.</li>
                  </ul>
                </li>
                <li><strong>Project Delays and Client Liability</strong>
                  <ul role="list">
                    <li>If your delay causes a project to pause before completion by the end of the month, it will be automatically paused. We'll notify you of the delay and lower your project's priority, placing it at the end of our queue. When it reaches the front of the queue again, we'll contact you.</li>
                    <li>You won't be eligible for a refund of unused hours.</li>
                  </ul>
                </li>
                <li><strong>Termination of Service</strong>
                  <ul role="list">
                    <li>You can terminate a project anytime via our website live-circle, Telegram, or a voice call. You'll need to verify your identity and approve the termination.</li>
                    <li>Refunds are generally not available. We may apply credit to your account for unused time on a case-by-case basis.</li>
                  </ul>
                </li>
                <li><strong>Warranty by You as to Ownership of Intellectual Property Rights</strong>
                  <ul role="list">
                    <li>You must have all necessary permissions for all materials you supply to us, such as copy, graphic images, registered logos, names, trademarks, code, frameworks, applications, and programs.</li>
                    <li>You agree to indemnify us and hold us harmless from any claims or legal actions related to your project content.</li>
                  </ul>
                </li>
                <li><strong>Licensing</strong>
                  <ul role="list">
                    <li>Once you've paid us in full, we grant you a licence to use the product and its related software and contents for the life of the project, except for software or content hosted by us, which may have separate licensing policies.</li>
                  </ul>
                </li>
                <li><strong>Search Engines</strong>
                  <ul role="list">
                    <li>We don't guarantee any specific search engine ranking for your website. We perform basic SEO according to best practices.</li>
                  </ul>
                </li>
                <li><strong>Consequential Loss</strong>
                  <ul role="list">
                    <li>We aren't liable for any loss or damage you may suffer due to delays in our contract performance or completion, however that delay arises. This includes situations where you lose sales or leads due to expected downtimes or interruptions caused by our work.</li>
                  </ul>
                </li>
                <li><strong>Disclaimer</strong>
                  <ul role="list">
                    <li>To the full extent permitted by law, all terms, conditions, warranties, undertakings, inducements, or representations (other than those expressly stated in these terms of service) related to our services are excluded. Any liability of FLAT18 that can't be excluded by law is limited, at our option, to the replacement, re-repair, or re-supply of services, or the cost of the services we were contracted to perform.</li>
                  </ul>
                </li>
                <li><strong>Subcontracting</strong>
                  <ul role="list">
                    <li>We reserve the right to subcontract any services we've agreed to perform for you.</li>
                  </ul>
                </li>
                <li><strong>Privacy &amp; Non-Disclosure</strong>
                  <ul role="list">
                    <li>We (and any subcontractors we engage) won't disclose any of your confidential information to third parties. All data collected about you, your business, and your project is protected under our privacy policy. We handle user data in a manner similar to the Data Protection Act (DPA).</li>
                    <li>We'll inform you to change passwords or revoke keys or security details provided to us for a project once it's completed or no longer needed.</li>
                  </ul>
                </li>
                <li><strong>Additional Expenses</strong>
                  <ul role="list">
                    <li>You agree to reimburse us for any requested expenses not included in our proposal, like templates, third-party software, stock photos, fonts, domain registration, project hosting, or similar expenses, meaning any development or creative monetary expense incurred but not listed.</li>
                  </ul>
                </li>
                <li><strong>Backups</strong>
                  <ul role="list">
                    <li>You're responsible for maintaining your own backups. We're not liable for restoring any client data, websites, or software unless data loss results from our negligence. We rely on backup solutions from third parties like Webflow and Figma.</li>
                  </ul>
                </li>
                <li><strong>Ownership of Domain Names and Hosting</strong>
                  <ul role="list">
                    <li>We'll give you account credentials for domain registration and project hosting that we purchased on your behalf once you reimburse us for incurred expenses.</li>
                  </ul>
                </li>
                <li><strong>Governing Law</strong>
                  <ul role="list">
                    <li>These terms of service and any proposals are governed by the laws of the Republic of Trinidad and Tobago. You and FLAT18 submit to the non-exclusive jurisdiction of its courts for any disputes.</li>
                  </ul>
                </li>
                <li><strong>Best Practice &amp; Compatibility</strong>
                  <ul role="list">
                    <li>We aim to ensure projects are compatible with current technologies while maintaining reasonable backwards compatibility. Perfect compatibility with any single platform or technology isn't guaranteed, but we adhere to industry-standard best practices.</li>
                  </ul>
                </li>
                <li><strong>E-Commerce</strong>
                  <ul role="list">
                    <li>You're responsible for complying with all relevant e-commerce laws and will hold harmless, protect, and indemnify FLAT18.CO.UK and its subcontractors from any claim, penalty, tax, tariff, loss, or damage arising from your or your clients' use of Internet e-commerce.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  )
}
