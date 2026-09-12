'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/component-css/ApprovedClientProof.module.css'

const testimonials = [
  {
    id: 'archimedes-finance',
    approved: true,
    name: 'Archimedes Finance',
    quote: 'They converted a deeply complex structural brief into a coherent, deployable product without losing the financial rigour the platform demands.',
    attribution: 'Ben Beveridge · Archimedes Finance · 2026',
    context: 'Archimedes Financial Systems investor platform',
    href: '/selected-work/archimedes-finance',
  },
  {
    id: 'forgingblock',
    approved: true,
    name: 'ForgingBlock',
    quote: 'Ed did incredible work across backend, smart contract and frontend development. His ability to adapt swiftly to challenges in this ever-changing environment was nothing short of extraordinary. Delivering a full voting system in just three months, followed by two months of smart contract development, is a testament to our team’s synergy, trust and shared vision.',
    attribution: 'Jaqen · ForgingBlock · 2024',
    context: 'Backend, smart contract and frontend delivery across BeraVote and ForgingBlock',
    status: 'Client feedback',
    href: '/selected-work/forgingblock-dashboard',
  },
  {
    id: 'walletscrutiny',
    approved: true,
    name: 'WalletScrutiny',
    quote: 'Thank you very much for your hard work! You touched so many details. I will deploy it soon. Just some minor fixes.',
    attribution: 'Leo Wandersleb · WalletScrutiny · 2021',
    context: 'Interface and product improvements across WalletScrutiny',
    status: 'Public GitLab feedback',
    href: '/case-studies/walletscrutiny',
    sourceHref: 'https://gitlab.com/walletscrutiny/walletScrutinyCom/-/merge_requests/77',
    sourceLabel: 'View GitLab review',
  },
  {
    id: 'btcpayserver',
    approved: true,
    name: 'BTCPay Server',
    quote: "Ah much needed! Look at this, isn't it beautiful",
    attribution: 'pavlenex · BTCPay Server · 2020',
    context: 'Responsive website and integrations interface for BTCPay Server',
    status: 'Open-source maintainer feedback',
    heading: 'What a BTCPay Server maintainer said.',
    href: '/selected-work/btcpayserver',
    sourceHref: 'https://github.com/btcpayserver/btcpayserver.org/pull/115#issuecomment-620076111',
    sourceLabel: 'View GitHub review',
  },
  {
    id: 'saltwater',
    approved: true,
    name: 'SaltWater Lab',
    quote: 'We have continued to work with Flat18 because they understand the context quickly, communicate plainly and help make complex work manageable.',
    attribution: 'SaltWater Lab',
    context: 'Product and web work across several projects',
    status: 'Client feedback',
  },
]

const showDraftTestimonials = process.env.NODE_ENV !== 'production'
const visibleTestimonials = showDraftTestimonials ? testimonials : testimonials.filter((testimonial) => testimonial.approved)
const QUOTE_PREVIEW_LENGTH = 220

function getQuotePreview(quote, expanded) {
  if (expanded || quote.length <= QUOTE_PREVIEW_LENGTH) return quote

  return `${quote.slice(0, QUOTE_PREVIEW_LENGTH).trimEnd()}…`
}

export default function ApprovedClientProof({ compact = false, clientId = null, className = '' }) {
  const clientTestimonials = clientId
    ? visibleTestimonials.filter((testimonial) => testimonial.id === clientId)
    : visibleTestimonials
  const [activeId, setActiveId] = useState(clientTestimonials[0]?.id)
  const [expandedId, setExpandedId] = useState(null)
  const activeTestimonial = clientTestimonials.find((testimonial) => testimonial.id === activeId) || clientTestimonials[0]
  const isExpanded = expandedId === activeTestimonial?.id
  const quotePreview = getQuotePreview(activeTestimonial?.quote || '', isExpanded)
  const rootClassName = [styles.proof, compact ? styles.compact : styles.full, className].filter(Boolean).join(' ')

  if (!activeTestimonial) return null

  if (compact) {
    return (
      <section id="client-evidence" className={rootClassName} aria-labelledby="client-proof-title">
        <div className={styles.container}>
          <span id="client-proof-title" className={styles.eyebrow}>Delivery evidence</span>
          <blockquote className={styles.quote}>“{quotePreview}”</blockquote>
          {activeTestimonial.quote.length > QUOTE_PREVIEW_LENGTH && <button type="button" className={styles.showMore} onClick={() => setExpandedId(isExpanded ? null : activeTestimonial.id)} aria-expanded={isExpanded}>{isExpanded ? 'Show less' : 'Show more'}</button>}
          <footer className={styles.attribution}><strong>{activeTestimonial.attribution}</strong><span>{activeTestimonial.context}</span></footer>
        </div>
      </section>
    )
  }

  return (
    <section id="client-evidence" className={rootClassName} aria-labelledby="client-proof-title">
      <div className={styles.container}>
        <div className={styles.fullHeader}>
          <div className={styles.heading}>
            <span id="client-proof-title" className={styles.eyebrow}>Delivery evidence</span>
            <h2>{clientId ? (activeTestimonial.heading || `What ${activeTestimonial.name} said.`) : 'Proof from people who worked with us.'}</h2>
          </div>
          <p className={styles.intro}>
            {clientId
              ? activeTestimonial.context
              : showDraftTestimonials
              ? 'Selected feedback from clients, collaborators and product users.'
              : 'Selected feedback from clients, collaborators, and product users.'}
          </p>
        </div>

        <div className={`${styles.evidenceLayout} ${clientId ? styles.singleClient : ''}`}>
          {!clientId && <nav className={styles.clientList} aria-label="Client testimonials">
            {clientTestimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                className={`${styles.clientButton} ${activeTestimonial.id === testimonial.id ? styles.clientButtonActive : ''}`}
                aria-pressed={activeTestimonial.id === testimonial.id}
                onClick={() => { setActiveId(testimonial.id); setExpandedId(null) }}
              >
                <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
                <span className={styles.clientButtonText}>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.status || (testimonial.approved ? 'Approved' : 'Draft')}</small>
                </span>
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </button>
            ))}
          </nav>}

          <article className={styles.featuredQuote} aria-live="polite">
            <span className={styles.quoteMark} aria-hidden="true">“</span>
            <blockquote className={styles.cardQuote}>
              <p>{quotePreview}</p>
              {activeTestimonial.quote.length > QUOTE_PREVIEW_LENGTH && <button type="button" className={styles.showMore} onClick={() => setExpandedId(isExpanded ? null : activeTestimonial.id)} aria-expanded={isExpanded}>{isExpanded ? 'Show less' : 'Show more'}</button>}
            </blockquote>
            <footer className={styles.cardAttribution}>
              <div>
                <strong>{activeTestimonial.attribution}</strong>
                <span>{activeTestimonial.context}</span>
              </div>
              {activeTestimonial.href && !clientId && (
                <Link href={activeTestimonial.href} className={styles.caseStudyLink}>
                  See the work <i className="bi bi-arrow-right" aria-hidden="true" />
                </Link>
              )}
              {activeTestimonial.sourceHref && (
                <a href={activeTestimonial.sourceHref} target="_blank" rel="noopener noreferrer" className={styles.caseStudyLink}>
                  {activeTestimonial.sourceLabel || 'View source'} <i className="bi bi-arrow-up-right" aria-hidden="true" />
                </a>
              )}
              {!activeTestimonial.sourceHref && !(activeTestimonial.href && !clientId) && (
                <span className={styles.status}>
                  {activeTestimonial.status || (activeTestimonial.approved ? 'Approved client feedback' : 'Draft · approval requested')}
                </span>
              )}
            </footer>
          </article>
        </div>
      </div>
    </section>
  )
}
