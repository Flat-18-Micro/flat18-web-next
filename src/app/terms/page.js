'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Breadcrumbs from '@/components/Breadcrumbs'
import styles from '@/styles/component-css/PageStyles.module.css'

export default function TermsPage() {
  // Toggle state for each section
  const [visibleVersions, setVisibleVersions] = useState({});

  const toggleVersion = (key) => {
    setVisibleVersions(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

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
            <h1 className={styles.pageHeading}>FLAT18 Terms of Service and How We Work Together</h1>
            <div className={styles.badge}>Updated: MAY 2025</div>
            <p className={styles.textContent}>
              This document follows the Flat18 Ease of Communication Standard (F18 EoCS) as of January 2024. Updates to the contents are made using an LLM to enforce the standard.
            </p>
            <div className={`${styles.textContent} ${styles.legalContent}`}>
              <p>
                Hi there! We’re FLAT 18 MICROSYSTEMS DEVELOPMENT LLC, but you might see us called @f18micro, F18, Flat 18, or FLAT18.CO.UK in different places online. Any project under a flat18.co.uk subdomain is covered by these terms too. When we say “you,” we mean you, our awesome customer. When you see “we,” “us,” or “our,” that’s Flat 18.
              </p>
              <p>
                Here’s how we work together and what you can expect from us. We’ve tried to keep everything clear and straightforward.
              </p>
              <ol role="list" className="terms-list">
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Hours of Operation</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('hours')}>
                      Show {visibleVersions['hours'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['hours'] ? (
                      <>We're here for you Monday to Friday, 9am–5pm UTC—though we work flexibly and sometimes outside those hours too. Message us anytime; we'll reply as soon as we can!</>
                    ) : (
                      <>Our standard business hours are 09:00–17:00 UTC (or GMT), Monday to Friday, though our team may operate flexibly across time zones. Communications received outside these hours will be addressed promptly during our next available window.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Getting in Touch</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('contact')}>
                      Show {visibleVersions['contact'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['contact'] ? (
                      <>Got a project or question? Reach out on Telegram (@f18micro), our live-chat at <a href="https://flat18.co.uk/" target="_blank" rel="noopener noreferrer">https://flat18.co.uk</a>, or email <a href="mailto:hello@flat18.co.uk">hello@flat18.co.uk</a>. We'll help you see if Flat 18 is right for you and set up your project space if you join us!</>
                    ) : (
                      <>For project inquiries, contact us via Telegram (@f18micro), website live-chat (<a href="https://flat18.co.uk/" target="_blank" rel="noopener noreferrer">https://flat18.co.uk</a>), or email (<a href="mailto:hello@flat18.co.uk">hello@flat18.co.uk</a>). We will discuss your project scope, requirements, and preferences. Upon agreement, we will create an account for you and manage your project through a suitable project management tool.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Scheduling &amp; The Queue</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('queue')}>
                      Show {visibleVersions['queue'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['queue'] ? (
                      <>Once you pay your invoice, we’ll pop your tasks into our queue and get started! Sometimes your hours are spread out over the month, but you can always ask for an update on where things stand.</>
                    ) : (
                      <>Subscription invoices are payable immediately. Tasks, reviews, and updates are scheduled according to our team's availability and may be distributed throughout the month. Project status updates are available upon request.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Payments</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('payments')}>
                      Show {visibleVersions['payments'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['payments'] ? (
                      <>We accept all sorts of payments: USD, GBP, EUR, Bitcoin, Ethereum, and ERC-20 tokens. If you change your mind after paying and we haven’t started yet, you can get up to 50% back!</>
                    ) : (
                      <>Accepted payment methods include USD, GBP, EUR, Bitcoin, Ethereum, and select ERC-20 tokens. If project work has not commenced within one month of payment (and pending items are not awaiting your input), you may be eligible for a refund of up to 50% of the paid amount.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Discounts &amp; Promotions</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('discounts')}>
                      Show {visibleVersions['discounts'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['discounts'] ? (
                      <>Discounts are only valid until the invoice due date (or the issue date if there’s no due date). Pay late, and the regular price applies!</>
                    ) : (
                      <>Invoice discounts are valid only until the stated due date or, if none is specified, the issue date. Payments made after this period will revert to the standard price as indicated by the invoice reference.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Supplying Materials</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('materials')}>
                      Show {visibleVersions['materials'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['materials'] ? (
                      <>We'll let you know what we need (photos, copy, logos, logins, etc). If you’re late sending things, it can eat into your dev hours, and we can’t roll them over. If delays mean we can’t finish by month’s end, we’ll pause and won’t bill extra until we check in with you.</>
                    ) : (
                      <>Required materials (e.g., images, text, logos, code, credentials, certificates, keys) must be provided as requested. Delays in submission may reduce available development hours, which are non-transferable. Projects delayed beyond the current month may be paused, with additional charges deferred until a mutual review occurs.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Communication</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('communication')}>
                      Show {visibleVersions['communication'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['communication'] ? (
                      <>We love using Issues on your git repo to keep track of feedback and tasks, but you can pick whatever works best for you. Want regular updates or weekly chats? Just say so!</>
                    ) : (
                      <>Project communication may be managed via repository Issues or a preferred channel of your choice. Update frequency is at your discretion. We recommend a brief weekly check-in (10–30 minutes, via text or voice) but can accommodate additional meetings as needed.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Support</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('support')}>
                      Show {visibleVersions['support'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['support'] ? (
                      <>Need help or a revision? Let us know within a month after we finish! You get up to two support requests (at least two weeks apart). If there’s a bug in our code, we’ll fix it! Support ends after a month, and we may pause support if there are unpaid bills.</>
                    ) : (
                      <>Support and revisions are available for one month following project completion, limited to two requests (minimum two weeks apart). Bug fixes are provided for code defects. Support may be suspended for overdue payments and expires after one month if unused.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Changes &amp; Variations</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('changes')}>
                      Show {visibleVersions['changes'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['changes'] ? (
                      <>Want to tweak something? No problem! You can request as many reviews or changes as you like. Small updates can be done in as little as 48 hours, but bigger changes might take longer. If it’s complicated, we’ll pause and chat it over with you first.</>
                    ) : (
                      <>Unlimited change and review requests are permitted. Simple modifications may be completed within 48 hours; complex changes may require additional time. Complicated requests will prompt a project pause until further discussion.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Project Delays</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('delays')}>
                      Show {visibleVersions['delays'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['delays'] ? (
                      <>If your project gets delayed and isn’t finished by the end of the month, we’ll pause it and let you know. Your project will go to the back of our queue, and we’ll reach out when it’s your turn again. Unused hours aren’t refundable, so try to keep things moving!</>
                    ) : (
                      <>Projects not completed by month-end may be paused and rescheduled to the end of our active queue. Unused hours are non-refundable.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Ending a Project</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('ending')}>
                      Show {visibleVersions['ending'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['ending'] ? (
                      <>Need to stop a project? Just tell us on our website live-circle, Telegram, or over a call. We’ll confirm your identity before wrapping things up. Refunds aren’t usual, but we might offer account credit for unused time—just ask!</>
                    ) : (
                      <>Project termination requests must be submitted via approved communication channels and will require identity verification. Refunds are generally not provided, but unused time may be credited at our discretion.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Your Stuff &amp; Permissions</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('permissions')}>
                      Show {visibleVersions['permissions'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['permissions'] ? (
                      <>Please make sure you have permission to use everything you send us—like copy, images, logos, code, or trademarks. If someone claims you didn’t have the rights, you agree to cover us and keep us out of any legal trouble.</>
                    ) : (
                      <>You are responsible for ensuring that all materials provided (e.g., text, images, logos, code, trademarks) are properly licensed or owned. You agree to indemnify and hold us harmless from any claims arising from unauthorized use.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Licensing</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('licensing')}>
                      Show {visibleVersions['licensing'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['licensing'] ? (
                      <>Once you’ve paid in full, you get a licence to use the product, software, and contents for as long as your project runs. If we host something for you, it might have its own licence terms.</>
                    ) : (
                      <>Upon full payment, you are granted a license to use the delivered product, software, and content for the duration of your project. Hosted services may be subject to separate licensing terms.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Search Engines</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('search')}>
                      Show {visibleVersions['search'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['search'] ? (
                      <>We’ll do basic SEO best practices, but we can’t promise you’ll hit a certain spot in search results.</>
                    ) : (
                      <>Basic search engine optimization techniques will be applied, but specific search ranking outcomes cannot be guaranteed.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Consequential Loss</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('loss')}>
                      Show {visibleVersions['loss'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['loss'] ? (
                      <>We’re not responsible for any losses or damages if your project is delayed, including lost sales or leads from downtime or interruptions.</>
                    ) : (
                      <>We disclaim liability for any consequential, incidental, or indirect losses, including but not limited to lost sales, leads, or opportunities resulting from project delays, downtime, or interruptions.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Disclaimer</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('disclaimer')}>
                      Show {visibleVersions['disclaimer'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['disclaimer'] ? (
                      <>We do our best, but except for what’s written here, we don’t make extra promises about our services. If something goes wrong and the law says we’re liable, we’ll choose to fix, replace, or re-supply the service, or refund you for it.</>
                    ) : (
                      <>Except as expressly stated herein, no additional warranties or representations are made regarding our services. Where liability is established by law, our remedy will be limited to repair, replacement, re-supply, or refund at our discretion.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Subcontracting</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('subcontracting')}>
                      Show {visibleVersions['subcontracting'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['subcontracting'] ? (
                      <>Sometimes we bring in trusted partners to help with your project. We’ll make sure they follow these same terms.</>
                    ) : (
                      <>We may engage subcontractors or partners to assist with your project. All such parties are required to adhere to these terms of service.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Privacy &amp; Confidentiality</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('privacy')}>
                      Show {visibleVersions['privacy'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['privacy'] ? (
                      <>We (and anyone we work with) keep your confidential info safe and never share it with outsiders. Anything we collect about you or your project is protected by our privacy policy, and we treat your data with care. When we’re done, we’ll remind you to change passwords or revoke keys you gave us.</>
                    ) : (
                      <>All confidential information is safeguarded and not disclosed to third parties except as required. Data collected is governed by our privacy policy. Upon project completion or as appropriate, we will prompt you to update or revoke credentials previously provided.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Extra Expenses</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('expenses')}>
                      Show {visibleVersions['expenses'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['expenses'] ? (
                      <>If you ask us to buy things like templates, third-party software, stock photos, fonts, domains, or hosting that aren’t in our original plan, you’ll need to cover those costs.</>
                    ) : (
                      <>Any additional purchases (e.g., templates, software, photos, fonts, domains, hosting) requested outside the original project scope will be billed to you at cost.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Backups</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('backups')}>
                      Show {visibleVersions['backups'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['backups'] ? (
                      <>Please keep your own backups of your data. We’re not responsible for restoring lost data, websites, or software unless we messed up. We use third-party backup tools like Webflow and Figma.</>
                    ) : (
                      <>You are responsible for maintaining your own data backups. We are not liable for restoration of lost data, websites, or software except in cases of our direct fault. Third-party backup solutions (e.g., Webflow, Figma) may be utilized.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Domain Names &amp; Hosting</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('domains')}>
                      Show {visibleVersions['domains'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['domains'] ? (
                      <>If we buy domains or hosting for you, we’ll hand over all the login details once you’ve paid us back for those expenses.</>
                    ) : (
                      <>Domain and hosting services purchased on your behalf will be transferred to you, including all credentials, upon reimbursement of associated costs.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Governing Law</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('law')}>
                      Show {visibleVersions['law'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['law'] ? (
                      <>These terms (and any proposals) are under the laws of Trinidad and Tobago. If there’s a dispute, we’ll sort it out there.</>
                    ) : (
                      <>These terms and any related proposals are governed by the laws of Trinidad and Tobago. Disputes will be resolved under the jurisdiction of Trinidad and Tobago.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Best Practice &amp; Compatibility</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('compatibility')}>
                      Show {visibleVersions['compatibility'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['compatibility'] ? (
                      <>We do our best to make sure your project works with current tech and is reasonably backwards compatible. We can’t promise perfection on every platform, but we always follow industry best practices.</>
                    ) : (
                      <>Projects are developed using current technologies and best practices, with reasonable efforts toward backward compatibility. Full compatibility on all platforms is not guaranteed.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>E-Commerce</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('ecommerce')}>
                      Show {visibleVersions['ecommerce'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['ecommerce'] ? (
                      <>You’re in charge of following all the e-commerce rules that apply to you. If there’s a claim or penalty because of your (or your clients’) online shop, you agree to keep us and our partners out of it.</>
                    ) : (
                      <>Compliance with all applicable e-commerce laws and regulations is your responsibility. You agree to indemnify us and our partners against any claims or penalties arising from your (or your clients') online commerce activities.</>
                    )}
                  </div>
                </li>
                <li>
                  <div className={styles.sectionHeader}>
                    <strong>Portfolio &amp; References</strong>
                    <button className={styles.toggleButton} onClick={() => toggleVersion('portfolio')}>
                      Show {visibleVersions['portfolio'] ? 'friendly' : 'formal'} version
                    </button>
                  </div>
                  <div className={styles.textContent}>
                    {visibleVersions['portfolio'] ? (
                      <>We’re proud of our work! We might feature your project on our website, social media, or in case studies—this could mean screenshots, summaries, or links. Not comfortable with us sharing your project? Just let us know and we’ll keep it private, unless we have to reference it for legal reasons.</>
                    ) : (
                      <>We may showcase your project in our portfolio, on social media, or in case studies (including screenshots, summaries, or links). Public code or licensed work may be referenced in technical materials. You may request confidentiality except where legal obligations require disclosure.</>
                    )}
                  </div>
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
