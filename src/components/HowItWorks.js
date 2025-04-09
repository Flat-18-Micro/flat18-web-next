'use client'

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="text-org">
          <h2 className="gradient-text yellow">The Flat 18 Way</h2>
          <p className="subtitle">Our simple 3-step process</p>
        </div>
        
        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3 className="step-title">Discover</h3>
              <div className="step-icon">
                <i className="bi bi-chat-dots"></i>
              </div>
              <p className="step-description">
                Chat with us about your project. This Discovery session will help us understand exactly what you need.
              </p>
              <a href="#chat" className="step-link">
                Start a Discovery session <i className="bi bi-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3 className="step-title">Develop</h3>
              <div className="step-icon">
                <i className="bi bi-code-slash"></i>
              </div>
              <p className="step-description">
                Choose a subscription and we'll take care of everything else. You'll get text updates as frequently as you or your team require.
              </p>
              <a href="#pricing" className="step-link">
                Subscriptions <i className="bi bi-tag ms-2"></i>
              </a>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3 className="step-title">Deliver</h3>
              <div className="step-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <p className="step-description">
                Receive initial samples in 2-3 days, with subsequent requests queued on your project board and delivered within 48 hours.
              </p>
              <a href="#work" className="step-link">
                See our past work <i className="bi bi-grid-3x3-gap ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .how-it-works-section {
          padding: 6rem 0;
          background: linear-gradient(to bottom, var(--blue-0), var(--bg-modern));
          position: relative;
        }
        
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 4rem;
          margin-top: 4rem;
          position: relative;
        }
        
        .process-steps::before {
          content: '';
          position: absolute;
          top: 0;
          left: 2.5rem;
          width: 1px;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(255, 255, 255, 0.1), 
            rgba(25, 253, 178, 0.3), 
            rgba(255, 255, 255, 0.1)
          );
          z-index: 0;
        }
        
        .process-step {
          display: flex;
          position: relative;
          z-index: 1;
        }
        
        .step-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          width: 5rem;
          flex-shrink: 0;
        }
        
        .step-content {
          flex-grow: 1;
        }
        
        .step-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 1.5rem;
        }
        
        .step-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: var(--primary);
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .process-step:hover .step-icon {
          transform: scale(1.1);
          background: rgba(25, 253, 178, 0.1);
        }
        
        .step-description {
          color: var(--cw-3);
          margin-bottom: 1.5rem;
          max-width: 600px;
          line-height: 1.6;
        }
        
        .step-link {
          color: var(--cw-1);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }
        
        .step-link:hover {
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .process-steps::before {
            left: 1.5rem;
          }
          
          .step-number {
            width: 3rem;
          }
          
          .step-title {
            font-size: 1.5rem;
          }
          
          .step-icon {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}
