'use client'

import styles from '../styles/component-css/Features.module.css'

export default function Features() {
  const features = [
    {
      icon: 'bi-globe',
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks like Next.js, optimized for performance and SEO.'
    },
    {
      icon: 'bi-phone',
      title: 'App Development',
      description: 'Scalable apps built with Node.js, reactive frameworks, and serverless backends.'
    },
    {
      icon: 'bi-palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind.'
    },
    {
      icon: 'bi-shield-lock',
      title: 'Web3 & Blockchain',
      description: 'Smart contract development, wallet integration, and decentralised apps tailored for the blockchain ecosystem.'
    },
    {
      icon: 'bi-code-slash',
      title: 'API Integration',
      description: 'Seamless integration with third-party services and custom API development.'
    },
    {
      icon: 'bi-gear',
      title: 'Maintenance & Support',
      description: '24/7 technical support and regular updates to keep your digital assets running smoothly.'
    }
  ]

  return (
    <div className={styles['features-wrapper']} id="features">
      <div className='container'>
      <div className={styles['text-org']}>
        <h2 className={styles['gradient-text']}>Our Services</h2>
        <p className={styles['subtitle']}>Comprehensive solutions for your digital needs</p>
      </div>
      <div className={styles['features-grid']}>
        {features.map((feature, index) => (
          <div key={index} className={styles['feature-card']}>
            <div className={styles['feature-icon']}>
              <i className={`bi ${feature.icon}`}></i>
            </div>
            <h3 className={styles['feature-title']}>{feature.title}</h3>
            <p className={styles['feature-description']}>{feature.description}</p>
          </div>
        ))}
      </div></div>
    </div>
  )
}