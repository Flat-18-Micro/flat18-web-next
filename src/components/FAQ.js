'use client'

import { useState } from 'react'
import styles from '../styles/component-css/FAQ.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const faqs = [
  {
    question: 'Can an LLM really speed up serious product work?',
    answer: 'Yes, when experienced people use it. LLMs help us explore options, draft code, write tests and prepare documentation faster. Senior developers still decide what is good enough to ship.',
  },
  {
    question: 'Will the code be production-ready?',
    answer: 'That is the goal for product builds. We review architecture, security, performance, accessibility and maintainability before launch.',
  },
  {
    question: 'Can an MVP become the long-term product?',
    answer: 'Yes, if that is the plan. We scope MVPs to prove the important behaviour quickly without choosing throwaway foundations.',
  },
  {
    question: 'Can you take over an existing product?',
    answer: 'Yes. We can audit the codebase, stabilise the important parts, improve the UX and then move faster with LLM-assisted workflows.',
  },
  {
    question: 'Do you put confidential project data into public AI tools?',
    answer: 'We agree working boundaries before sensitive work starts. Where privacy or commercial risk matter, human judgement takes priority over convenience.',
  },
  {
    question: 'What happens after launch?',
    answer: 'You keep the product, code and documentation. We can hand over to your team or stay involved through monthly support.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section
      className={styles.faqWrapper}
      id="faq"
      data-bg-color={getSectionBackground('faq')}
      data-text-color={getSectionTextColor('faq')}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeader}>
          <span className="label-uppercase">FAQ</span>
          <h2 className={styles.title}>Common questions</h2>
          <p className={styles.subtitle}>
            Short answers about LLMs, quality and ownership.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <aside className={styles.sideNote}>
            <h3>Still weighing it up?</h3>
            <p>
              Send us the idea, the risk and the deadline. We will tell you which route fits, or whether we are not the right team.
            </p>
            <a href="#chat" className="btn btn-secondary">
              Ask us directly
            </a>
          </aside>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const answerId = `faq-answer-${index}`
              const isOpen = openIndex === index

              return (
                <div
                  key={faq.question}
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                >
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                  >
                    <span className={styles.questionText}>{faq.question}</span>
                    <span className={styles.faqIcon} aria-hidden="true">
                      <i className={`bi ${isOpen ? 'bi-dash' : 'bi-plus'}`}></i>
                    </span>
                  </button>
                  <div className={styles.faqAnswer} id={answerId} hidden={!isOpen}>
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
