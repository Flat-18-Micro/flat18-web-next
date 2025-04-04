'use client'

import { useState } from 'react'

export default function FAQ() {
  const faqs = [
    {
      question: "What is Availability?",
      answer: "We operate with limited active spaces per month, usually no more than 2 active clients per developer. This ensures you and your project get the attention required for success."
    },
    {
      question: "How much does it cost?",
      answer: "Our pricing starts at £37.50 per hour. For a typical project with around 80 development hours per month, this comes to approximately £3,000 per month. We offer discounts for longer commitments, with quarterly billing offering around 15% savings."
    },
    {
      question: "Why the subscription model?",
      answer: "Our subscription model ensures consistent, dedicated development time for your project. It allows us to plan resources effectively and offer better rates for longer commitments."
    },
    {
      question: "What if I need a different timeframe?",
      answer: "We're flexible and can accommodate different project timeframes. Contact us to discuss your specific needs and we'll find a solution that works for you."
    },
    {
      question: "How long will my project take to complete?",
      answer: "Project timelines vary depending on complexity. A typical website takes 4-8 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with teams?",
      answer: "Yes, we collaborate effectively with in-house teams and other contractors. Our experience in team environments helps ensure smooth integration with your existing workflow."
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="content faq-wrapper" id="faq">
      <div className="text-org">
        <h2 className="gradient-text orange">Commonly Asked Questions</h2>
        <p className="subtitle">Find answers to common questions about our services</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <div className="faq-icon">
                <i className={`bi ${openIndex === index ? 'bi-dash' : 'bi-plus'}`}></i>
              </div>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .faq-wrapper {
          padding: 6rem 0;
        }
        .text-org {
          text-align: center;
          margin-bottom: 4rem;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-top: 1rem;
        }
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .faq-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          margin-bottom: 1rem;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          background: rgba(255, 255, 255, 0.08);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
        }
        .faq-question h3 {
          margin: 0;
          font-size: 1.1rem;
          color: var(--text-primary);
        }
        .faq-icon {
          font-size: 1.5rem;
          color: var(--accent-color);
          transition: transform 0.3s ease;
        }
        .faq-answer {
          max-height: 0;
          opacity: 0;
          transition: all 0.3s ease;
          padding: 0 1.5rem;
        }
        .faq-item.open .faq-answer {
          max-height: 500px;
          opacity: 1;
          padding: 0 1.5rem 1.5rem;
        }
        .faq-answer p {
          margin: 0;
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
} 