'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Pricing from '@/components/Pricing'
import Contact from '@/components/Contact'

export default function PricingPage() {
  useEffect(() => {
    // Initialize any necessary scripts or analytics
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
      if (location.href.indexOf("300") < 0) {
        location.href = location.href.replace("http://", "https://")
      }
    }

    // Fetch metrics data if needed
    const q = localStorage && localStorage.getItem("webM") ? `&webM=${localStorage.getItem("webM")}` : ""
    fetch('https://api.flat18.co.uk/metrics/webm/index.php?geo=1' + q)
      .then(response => response.json())
      .then(data => {
        window.webM = data.webM
        window.geoCityCountry = data.geo
        let persist = localStorage && localStorage.getItem("webM") ? localStorage.getItem("webM") : data.webM
        localStorage.setItem("webM", persist)
      })
      .catch(error => console.log('Metrics fetch error:', error))
      
    // Currency conversion functionality
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch('https://api.flat18.co.uk/forex/rates.php')
        const data = await response.json()
        if (data.result) {
          const gbp = data.result.find(item => item.name === "GBP")
          document.querySelectorAll(".price-exchange").forEach((ele) => {
            const raw = ele.innerHTML.replace(/[^0-9]/g, '')
            const btcValue = Number(raw) / Number(gbp.value)
            
            // Store original GBP value
            ele.setAttribute('data-value-gbp', ele.innerHTML)
            
            // Calculate and store values for other currencies
            for (const currency of data.result) {
              const exchangedValue = Number(currency.value) * btcValue
              let fraction = exchangedValue > 1000 ? 0 : 2
              let workingValue = exchangedValue > 1000
                ? (Math.ceil(exchangedValue / 10) * 10) - 5
                : exchangedValue
                
              const formatted = new Intl.NumberFormat(navigator.language, {
                style: 'currency',
                minimumFractionDigits: fraction,
                maximumFractionDigits: fraction,
                currency: currency.name
              }).format(workingValue)
              
              ele.setAttribute(`data-value-${currency.name.toLowerCase()}`, formatted)
            }
            
            // Add BTC value
            const btcFormatted = new Intl.NumberFormat(navigator.language, {
              style: 'decimal',
              minimumFractionDigits: 5,
              maximumFractionDigits: 5
            }).format(btcValue)
            ele.setAttribute('data-value-btc', `₿${btcFormatted}`)
          })
        }
      } catch (error) {
        console.error('Error fetching forex data:', error)
      }
    }
    
    fetchCurrencyData()
  }, [])

  return (
    <main>
      <Navbar />
      <div className="body-contents-wrapper">
        <div className="content pricing-page">
          <h1 className="gradient-text doc-heading">Our Pricing</h1>
          
          <div className="pricing-intro">
            <p>At Flat 18, we believe in transparent, value-based pricing that aligns with your business goals. Our subscription model ensures you receive consistent, high-quality support for your digital presence.</p>
            
            <div className="currency-selector">
              <div className="currency-display">
                <span>Currency: </span>
                <span className="current-currency">GBP</span>
                <span className="currency-toggle">▼</span>
              </div>
              <div className="currency-menu">
                <a className="currency-link active">GBP</a>
                <a className="currency-link">USD</a>
                <a className="currency-link">EUR</a>
                <a className="currency-link">BTC</a>
              </div>
            </div>
          </div>
          
          <div className="pricing-plans">
            <div className="pricing-card">
              <div className="pricing-image"></div>
              <h3 className="pricing-title gradient-text">Monthly</h3>
              <p className="pricing-subtitle">Perfect for short-term projects</p>
              <div className="pricing-price price-exchange">£3,000</div>
              <p className="pricing-period">per month</p>
              
              <div className="pricing-divider"></div>
              
              <ul className="pricing-feature-list">
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>80 Development Hours</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Full-Stack Development</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>UI/UX Design</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Technical Support</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Project Management</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Monthly Billing</div>
                </li>
              </ul>
              
              <a href="#chat" className="btn">
                <div className="button-background"></div>
                <div className="button-text">Get Started</div>
                <div className="icon right">&#xF135;</div>
              </a>
            </div>
            
            <div className="pricing-card featured-pricing">
              <div className="pricing-image main"></div>
              <h3 className="pricing-title gradient-text">Quarterly</h3>
              <p className="pricing-subtitle">Best value for ongoing projects</p>
              <div className="pricing-price quarterly price-exchange">£7,485</div>
              <p className="pricing-period">every 3 months</p>
              
              <div className="pricing-divider"></div>
              
              <ul className="pricing-feature-list">
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Everything in Monthly</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>15% Discount Applied</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Priority Support</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Quarterly Planning</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Resource Dedication</div>
                </li>
                <li className="pricing-feature">
                  <div className="feature-icon">✓</div>
                  <div>Extended Support Hours</div>
                </li>
              </ul>
              
              <a href="#chat" className="btn hero">
                <div className="button-background hero"></div>
                <div className="button-text">Get Started</div>
                <div className="icon right">&#xF135;</div>
              </a>
            </div>
          </div>
          
          <div id="more-info" className="pricing-details">
            <h2>What's Included</h2>
            
            <div className="pricing-details-grid">
              <div className="pricing-detail-item">
                <h3>Full-Stack Development</h3>
                <p>Our team handles both frontend and backend development, ensuring a seamless, integrated solution for your digital needs.</p>
              </div>
              
              <div className="pricing-detail-item">
                <h3>UI/UX Design</h3>
                <p>We create intuitive, engaging user interfaces and experiences that align with your brand and business goals.</p>
              </div>
              
              <div className="pricing-detail-item">
                <h3>Technical Support</h3>
                <p>Ongoing support to address any technical issues or questions that arise during and after development.</p>
              </div>
              
              <div className="pricing-detail-item">
                <h3>Project Management</h3>
                <p>Dedicated project management to ensure your project stays on track, on budget, and meets all requirements.</p>
              </div>
              
              <div className="pricing-detail-item">
                <h3>Responsive Design</h3>
                <p>All our websites and applications are built to work flawlessly across all devices and screen sizes.</p>
              </div>
              
              <div className="pricing-detail-item">
                <h3>SEO Optimization</h3>
                <p>We implement best practices for search engine optimization to help your site rank higher in search results.</p>
              </div>
            </div>
          </div>
        </div>
        
        <Contact />
      </div>
      <Footer />
      
      <style jsx>{`
        .pricing-page {
          padding: 4rem 2rem;
        }
        
        .pricing-intro {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }
        
        .pricing-intro p {
          max-width: 600px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--cw-3);
        }
        
        .currency-selector {
          position: relative;
        }
        
        .currency-display {
          display: flex;
          align-items: center;
          cursor: pointer;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        .current-currency {
          font-weight: bold;
          margin: 0 0.5rem;
        }
        
        .currency-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: var(--bg-modern-dark);
          border-radius: 4px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          padding: 0.5rem;
          display: none;
          z-index: 10;
        }
        
        .currency-menu.open {
          display: block;
        }
        
        .currency-link {
          display: block;
          padding: 0.5rem 1rem;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .currency-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .currency-link.active {
          background: var(--primary);
          color: var(--black);
        }
        
        .pricing-plans {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }
        
        .pricing-card {
          border: 1px solid var(--blue-2);
          background-color: var(--blue-0);
          box-shadow: 0 4px 80px -20px var(--black);
          border-radius: 10px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .pricing-card.featured-pricing {
          background-color: var(--blue-0);
          background-image: radial-gradient(circle farthest-corner at 50% 100%, var(--blue-0), var(--black));
          box-shadow: 0 0 130px -50px var(--cw-0);
          transform: scale(1.05);
          z-index: 1;
        }
        
        .pricing-image {
          width: 100px;
          height: 100px;
          border-radius: 7px;
          background-image: radial-gradient(circle farthest-corner at 0% 100%, var(--blue-1), var(--blue-2));
          margin-bottom: 1rem;
        }
        
        .pricing-image.main {
          background-image: radial-gradient(circle farthest-corner at 0% 100%, var(--black), var(--blue-1));
        }
        
        .pricing-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        
        .pricing-subtitle {
          color: var(--primary);
          font-size: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .pricing-price {
          color: var(--azure-blue);
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.5rem;
        }
        
        .pricing-price.quarterly {
          color: var(--primary);
        }
        
        .pricing-period {
          color: var(--cw-4);
          margin-bottom: 2rem;
        }
        
        .pricing-divider {
          width: 100%;
          height: 1px;
          background-color: var(--azure-blue);
          opacity: 0.3;
          margin: 1rem 0 2rem;
        }
        
        .pricing-feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          width: 100%;
        }
        
        .pricing-feature {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          color: var(--cw-3);
        }
        
        .feature-icon {
          color: var(--primary);
          margin-right: 0.5rem;
          font-weight: bold;
        }
        
        .pricing-details {
          padding-top: 4rem;
        }
        
        .pricing-details h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2rem;
          color: var(--white);
        }
        
        .pricing-details-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .pricing-detail-item {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 1.5rem;
        }
        
        .pricing-detail-item h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }
        
        .pricing-detail-item p {
          color: var(--cw-3);
          line-height: 1.6;
        }
        
        @media (max-width: 768px) {
          .pricing-intro {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .currency-selector {
            margin-top: 1.5rem;
          }
          
          .pricing-card.featured-pricing {
            transform: none;
          }
        }
      `}</style>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          // Currency selector functionality
          document.addEventListener('DOMContentLoaded', function() {
            const currencyDisplay = document.querySelector('.currency-display');
            const currencyMenu = document.querySelector('.currency-menu');
            const currencyLinks = document.querySelectorAll('.currency-link');
            
            if (currencyDisplay) {
              currencyDisplay.addEventListener('click', function() {
                currencyMenu.classList.toggle('open');
              });
            }
            
            if (currencyLinks) {
              currencyLinks.forEach(link => {
                link.addEventListener('click', function() {
                  const currency = this.textContent;
                  document.querySelector('.current-currency').textContent = currency;
                  
                  // Update prices
                  document.querySelectorAll('.price-exchange').forEach(price => {
                    const dataAttr = \`data-value-\${currency.toLowerCase()}\`;
                    if (price.hasAttribute(dataAttr)) {
                      price.textContent = price.getAttribute(dataAttr);
                    }
                  });
                  
                  // Update active state
                  currencyLinks.forEach(l => l.classList.remove('active'));
                  this.classList.add('active');
                  
                  // Close menu
                  currencyMenu.classList.remove('open');
                });
              });
            }
            
            // Close menu when clicking outside
            document.addEventListener('click', function(event) {
              if (!event.target.closest('.currency-selector') && currencyMenu) {
                currencyMenu.classList.remove('open');
              }
            });
          });
        `
      }} />
    </main>
  )
}
