'use client'

import Button from './Button'

export default function Pricing() {
  const plans = [
    {
      name: 'Monthly',
      description: 'Perfect for short-term projects',
      price: '£3,000/month',
      features: [
        '80 Development Hours',
        'Full-Stack Development',
        'UI/UX Design',
        'Technical Support',
        'Project Management',
        'Monthly Billing',
      ],
    },
    {
      name: 'Quarterly',
      description: 'Best value for ongoing projects',
      price: '£2,550/month',
      features: [
        'Everything in Monthly',
        '15% Discount Applied',
        'Priority Support',
        'Quarterly Planning',
        'Resource Dedication',
        'Extended Support Hours',
      ],
      highlighted: true,
    },
    {
      name: 'Custom',
      description: 'For specialized requirements',
      price: 'Contact Us',
      features: [
        'Flexible Hours',
        'Custom Team Size',
        'Dedicated Resources',
        'Custom Timeline',
        'Enterprise Support',
        'Bespoke Solutions',
      ],
    },
  ]

  return (
    <div className="content pricing-wrapper" id="pricing">
      <div className="text-org">
        <h2 className="gradient-text green">Full Service Development</h2>
        <p className="subtitle">Comprehensive solutions with transparent pricing</p>
      </div>
      <div className="pricing-description">
        <p>We are full-stack developers with a flair for design. That means, you'll get a comprehensive service with the full scope managed under one roof.</p>
        <p>By applying our hourly rate of £37.50 to an estimated 80 development hours per month, we arrive at a monthly cost of £3,000. We operate with limited active spaces to ensure each project gets the attention it deserves.</p>
        <p>Booking our services for longer periods helps with our scheduling projections, and we reward this commitment with better rates. Quarterly billing offers you the best value with a 15% discount.</p>
      </div>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
            <div className="pricing-header">
              <h3 className="plan-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <div className="plan-price">{plan.price}</div>
            </div>
            <ul className="features-list">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="feature-item">
                  <i className="bi bi-check2-circle"></i>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="pricing-cta">
              <Button href="#chat" variant={plan.highlighted ? 'hero' : 'default'}>
                Get Started
              </Button>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .pricing-wrapper {
          padding: 6rem 0;
        }
        .text-org {
          text-align: center;
          margin-bottom: 2rem;
        }
        .subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-top: 1rem;
        }
        .pricing-description {
          max-width: 800px;
          margin: 0 auto 4rem;
          padding: 0 2rem;
          text-align: center;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .pricing-description p {
          margin-bottom: 1rem;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
        }
        .pricing-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease;
        }
        .pricing-card.highlighted {
          background: rgba(var(--accent-color-rgb), 0.1);
          border: 2px solid var(--accent-color);
          transform: scale(1.05);
        }
        .pricing-card:hover {
          transform: translateY(-5px);
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .plan-name {
          font-size: 1.5rem;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }
        .plan-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }
        .plan-price {
          font-size: 2rem;
          font-weight: bold;
          color: var(--accent-color);
        }
        .features-list {
          list-style: none;
          padding: 0;
          margin: 0;
          flex-grow: 1;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        .feature-item i {
          color: var(--accent-color);
          font-size: 1.2rem;
        }
        .pricing-cta {
          margin-top: 2rem;
          text-align: center;
        }
      `}</style>
    </div>
  )
} 