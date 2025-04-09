'use client'

import { useState, useEffect } from 'react'

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  const [currencies, setCurrencies] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('GBP')
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
  const [prices, setPrices] = useState({
    monthly: {
      GBP: '£2,995',
      USD: '$3,800',
      EUR: '€3,500',
      BTC: '₿0.07500'
    },
    quarterly: {
      GBP: '£7,485',
      USD: '$9,500',
      EUR: '€8,750',
      BTC: '₿0.18750'
    },
    monthlySavings: {
      GBP: '£1,500',
      USD: '$1,900',
      EUR: '€1,750',
      BTC: '₿0.03750'
    }
  })
  
  // Base prices in GBP
  const basePrices = {
    monthly: 2995,
    quarterly: 7485,
    monthlySavings: 1500,
    quarterlyMonthly: 2495 // Monthly equivalent when paying quarterly
  }

  useEffect(() => {
    // Fetch exchange rates when component mounts
    fetchExchangeRates()
  }, [])

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch('https://f18-pay-backend.vercel.app/api/v1/forex')
      const data = await response.json()
      
      if (data.result && data.result.length > 0) {
        // Store the currencies for the dropdown
        setCurrencies(data.result)
        
        // Calculate prices in different currencies
        const gbp = data.result.find(currency => currency.name === 'GBP')
        if (gbp) {
          const updatedPrices = {
            monthly: { GBP: formatCurrency(basePrices.monthly, 'GBP') },
            quarterly: { GBP: formatCurrency(basePrices.quarterly, 'GBP') },
            monthlySavings: { GBP: formatCurrency(basePrices.monthlySavings, 'GBP') },
            quarterlyMonthly: { GBP: formatCurrency(basePrices.quarterlyMonthly, 'GBP') }
          }
          
          // Calculate prices for each currency
          data.result.forEach(currency => {
            if (currency.name !== 'GBP') {
              const exchangeRate = currency.value / gbp.value
              
              updatedPrices.monthly[currency.name] = formatCurrency(basePrices.monthly * exchangeRate, currency.name)
              updatedPrices.quarterly[currency.name] = formatCurrency(basePrices.quarterly * exchangeRate, currency.name)
              updatedPrices.monthlySavings[currency.name] = formatCurrency(basePrices.monthlySavings * exchangeRate, currency.name)
              updatedPrices.quarterlyMonthly[currency.name] = formatCurrency(basePrices.quarterlyMonthly * exchangeRate, currency.name)
            }
          })
          
          // Add BTC prices
          const btcValue = 1 / gbp.value
          updatedPrices.monthly.BTC = formatBTC(basePrices.monthly * btcValue)
          updatedPrices.quarterly.BTC = formatBTC(basePrices.quarterly * btcValue)
          updatedPrices.monthlySavings.BTC = formatBTC(basePrices.monthlySavings * btcValue)
          updatedPrices.quarterlyMonthly.BTC = formatBTC(basePrices.quarterlyMonthly * btcValue)
          
          setPrices(updatedPrices)
        }
      }
    } catch (error) {
      console.error('Error fetching exchange rates:', error)
    }
  }
  
  const formatCurrency = (amount, currencyCode) => {
    try {
      // Format the amount based on the currency code
      const formatter = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      })
      
      return formatter.format(amount)
    } catch (error) {
      // Fallback for currencies not supported by Intl
      return `${currencyCode} ${amount.toFixed(2)}`
    }
  }
  
  const formatBTC = (amount) => {
    return `₿${amount.toFixed(6)}`
  }

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === 'monthly' ? 'quarterly' : 'monthly')
  }
  
  const toggleCurrencyMenu = () => {
    setShowCurrencyMenu(!showCurrencyMenu)
  }
  
  const selectCurrency = (currency) => {
    setSelectedCurrency(currency)
    setShowCurrencyMenu(false)
  }

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="text-org">
          <h2 className="gradient-text yellow">Pricing. Simple.</h2>
        </div>
        
        <div className="pricing-details-wrapper">
          <div className="pricing-head">
            <div className="pricing-controls-container">
              <div className="currency-dropdown">
                <button className="currency-dropdown-trigger" onClick={toggleCurrencyMenu}>
                  <span>{selectedCurrency}</span>
                  <i className="bi bi-chevron-down"></i>
                </button>
                {showCurrencyMenu && (
                  <div className="currency-menu">
                    {currencies.map((currency) => (
                      <button 
                        key={currency.name} 
                        className={`currency-option ${selectedCurrency === currency.name ? 'active' : ''}`}
                        onClick={() => selectCurrency(currency.name)}
                      >
                        {currency.name}
                      </button>
                    ))}
                    <button 
                      className={`currency-option ${selectedCurrency === 'BTC' ? 'active' : ''}`}
                      onClick={() => selectCurrency('BTC')}
                    >
                      BTC
                    </button>
                  </div>
                )}
              </div>
              
              <div className="price-wrapper">
                {billingPeriod === 'monthly' ? (
                  <div className="pricing-price">
                    <div className="price-display">
                      <div className="price-amount">{prices.monthly[selectedCurrency] || prices.monthly.GBP}</div>
                      <div className="price-period">/month</div>
                    </div>
                  </div>
                ) : (
                  <div className="pricing-price">
                    <div className="price-display">
                      <div className="price-amount">{prices.quarterlyMonthly[selectedCurrency] || prices.quarterlyMonthly.GBP}</div>
                      <div className="price-period">/month</div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="switch-wrapper">
                <div className={`switch-body ${billingPeriod === 'quarterly' ? 'on' : ''}`} onClick={toggleBillingPeriod}>
                  <div className="switch-indicator"></div>
                </div>
                {billingPeriod === 'quarterly' ? (
                  <div className="switch-label-wrapper">
                    <div className="switch-label">
                      You're saving {prices.monthlySavings[selectedCurrency] || prices.monthlySavings.GBP} with quarterly billing
                    </div>
                  </div>
                ) : (
                  <div className="switch-label-wrapper">
                    <div className="switch-label">
                      Billed Monthly<br />
                      Activate savings with quarterly billing
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="pricing-features-wrapper">
              <div className="pricing-features-section">
                <div className="features-badge">What's included</div>
                <ul className="pricing-features-list">
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Queued Tasks delivered in as little as 48hrs</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Unlimited Development Scopes</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Application staging</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Unlimited Revisions queue</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">AI & Custom Graphics</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Complete Service Management</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Support directly from your developer</span>
                  </li>
                  <li className="pricing-feature-item">
                    <i className="bi bi-check-circle-fill feature-icon"></i>
                    <span className="feature-text">Pause and resume week-by-week. Bank all your unused time</span>
                  </li>
                </ul>
              </div>
              
              <div className="pricing-features-section billing-details">
                <div className="features-badge green">Billing</div>
                <ul className="pricing-features-list">
                  {billingPeriod === 'monthly' ? (
                    <>
                      <li className="pricing-feature-item">
                        <i className="bi bi-calendar-month feature-icon"></i>
                        <span className="feature-text">Monthly billing</span>
                      </li>
                      <li className="pricing-feature-item">
                        <i className="bi bi-credit-card feature-icon"></i>
                        <span className="feature-text">
                          Pre-pay {prices.monthly[selectedCurrency] || prices.monthly.GBP} every month
                        </span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="pricing-feature-item">
                        <i className="bi bi-calendar3 feature-icon"></i>
                        <span className="feature-text">Quarterly billing</span>
                      </li>
                      <li className="pricing-feature-item">
                        <i className="bi bi-piggy-bank feature-icon"></i>
                        <span className="feature-text">
                          Save {prices.monthlySavings[selectedCurrency] || prices.monthlySavings.GBP} vs monthly
                        </span>
                      </li>
                      <li className="pricing-feature-item">
                        <i className="bi bi-credit-card feature-icon"></i>
                        <span className="feature-text">
                          Pre-pay {prices.quarterly[selectedCurrency] || prices.quarterly.GBP} every 3 months
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pricing-actions">
            <a href="/pricing#more-info" className="btn link-light">
              <span>Learn more</span>
              <i className="bi bi-arrow-right ms-2"></i>
            </a>
            <a href="#chat" className="btn hero">
              <span>Let's talk about pricing</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .pricing-details-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          background-color: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .pricing-head {
          margin-bottom: 2rem;
        }
        
        .pricing-controls-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2.5rem;
          gap: 1.5rem;
        }
        
        .currency-dropdown {
          position: relative;
          z-index: 10;
        }
        
        .currency-dropdown-trigger {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.5rem 1rem;
          color: var(--cw-2);
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .currency-dropdown-trigger:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .currency-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: var(--bg-modern-dark);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          margin-top: 0.5rem;
          max-height: 200px;
          overflow-y: auto;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
          z-index: 20;
        }
        
        .currency-option {
          padding: 0.5rem 1rem;
          color: var(--cw-2);
          background: none;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .currency-option:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--white);
        }
        
        .currency-option.active {
          background: rgba(25, 253, 178, 0.1);
          color: var(--primary);
        }
        
        .price-wrapper {
          text-align: center;
        }
        
        .pricing-price {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .price-display {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        
        .price-amount {
          font-size: 3rem;
          font-weight: 700;
          color: var(--white);
          background: linear-gradient(to right, var(--white), var(--cw-2));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .price-period {
          font-size: 1.2rem;
          color: var(--cw-3);
        }
        
        .switch-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
        }
        
        .switch-body {
          width: 60px;
          height: 30px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          position: relative;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .switch-body.on {
          background-color: rgba(25, 253, 178, 0.2);
        }
        
        .switch-indicator {
          width: 24px;
          height: 24px;
          background-color: var(--white);
          border-radius: 50%;
          position: absolute;
          top: 3px;
          left: 3px;
          transition: transform 0.3s ease;
        }
        
        .switch-body.on .switch-indicator {
          transform: translateX(30px);
          background-color: var(--primary);
        }
        
        .switch-label-wrapper {
          text-align: center;
        }
        
        .switch-label {
          font-size: 0.9rem;
          color: var(--cw-2);
          line-height: 1.5;
        }
        
        .pricing-features-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .pricing-features-section {
          background-color: rgba(255, 255, 255, 0.02);
          border-radius: 12px;
          padding: 1.5rem;
        }
        
        .pricing-features-section.billing-details {
          background-color: rgba(0, 0, 0, 0.2);
        }
        
        .features-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background-color: rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--white);
          margin-bottom: 1.5rem;
        }
        
        .features-badge.green {
          background-color: rgba(25, 253, 178, 0.1);
          color: var(--primary);
        }
        
        .pricing-features-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .pricing-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--cw-3);
        }
        
        .feature-icon {
          color: var(--primary);
          font-size: 1rem;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        
        .feature-text {
          font-size: 0.95rem;
          line-height: 1.5;
        }
        
        .pricing-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
        }
        
        .btn.link-light {
          color: var(--cw-1);
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          background: none;
          padding: 0;
          border: none;
        }
        
        .btn.link-light:hover {
          color: var(--primary);
        }
        
        @media (max-width: 768px) {
          .pricing-details-wrapper {
            padding: 1.5rem;
          }
          
          .pricing-features-wrapper {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .pricing-actions {
            flex-direction: column;
            gap: 1.5rem;
          }
          
          .btn.hero {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}
