'use client'

import { useState } from 'react'
import styles from '../styles/component-css/FAQ.module.css'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'

const faqs = [
  {
    question: 'Can an LLM really speed up serious product work?',
    answer: 'Yes, when it is used by people who understand the work. LLMs help us explore options, draft code, write tests and prepare documentation faster. Senior developers still decide what should be built and whether the result is good enough.',
  },
  {
    question: 'Will the code be production-ready?',
    answer: 'That is the goal. We review architecture, security, performance, accessibility and maintainability before launch. We do not treat AI-generated output as finished just because it compiles.',
  },
  {
    question: 'Can you take over an existing product?',
    answer: 'Yes. We can audit an existing codebase, stabilise the important parts, improve the user experience and then use LLM-assisted workflows to move faster without losing control.',
  },
  {
    question: 'What happens after launch?',
    answer: 'You can keep the product, code and documentation. We can hand over cleanly to your team or stay involved through a monthly product team retainer for improvements, releases and support.',
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
            Straight answers about how we use LLMs, how we protect quality and what you own at the end.
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
