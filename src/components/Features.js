'use client'

export default function Features() {
  const features = [
    {
      icon: '&#xF44E;',
      title: 'Web Development',
      description: 'Custom websites built with modern frameworks like Next.js, optimized for performance and SEO.'
    },
    {
      icon: '&#xF441;',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
    },
    {
      icon: '&#xF6C3;',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces designed with your users in mind.'
    },
    {
      icon: '&#xF425;',
      title: 'E-commerce Solutions',
      description: 'Scalable online stores with secure payment processing and inventory management.'
    },
    {
      icon: '&#xF465;',
      title: 'API Integration',
      description: 'Seamless integration with third-party services and custom API development.'
    },
    {
      icon: '&#xF6B8;',
      title: 'Maintenance & Support',
      description: '24/7 technical support and regular updates to keep your digital assets running smoothly.'
    }
  ]

  return (
    <div className="content features-wrapper" id="features">
      <div className="text-org">
        <h2 className="gradient-text blue">Our Services</h2>
        <p className="subtitle">Comprehensive solutions for your digital needs</p>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">
              <span className="icon" dangerouslySetInnerHTML={{ __html: feature.icon }}></span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .features-wrapper {
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
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
        }
        .feature-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 2rem;
          transition: transform 0.3s ease;
        }
        .feature-card:hover {
          transform: translateY(-5px);
        }
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--accent-color);
        }
        .feature-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .feature-description {
          color: var(--text-secondary);
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
} 