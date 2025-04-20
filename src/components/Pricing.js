'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/component-css/Pricing.module.css'

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
    },
    quarterlyMonthly: {
      GBP: '£2,495',
      USD: '$3,167',
      EUR: '€2,917',
      BTC: '₿0.06250'
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
            if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
              // Auto-detect currency from browser locale
              const browserLocale = navigator.language || navigator.userLanguage
              let defaultCurrency = 'GBP'
              if (browserLocale.startsWith('en-US')) {
                defaultCurrency = 'USD'
              } else if (browserLocale.startsWith('en-GB')) {
                defaultCurrency = 'GBP'
              } else if (
                browserLocale.startsWith('de') || 
                browserLocale.startsWith('fr') || 
                browserLocale.startsWith('es') || 
                browserLocale.startsWith('it') || 
                browserLocale.startsWith('nl') || 
                browserLocale.startsWith('pt') ||
                browserLocale.startsWith('fi') ||
                browserLocale.startsWith('sv') ||
                browserLocale.startsWith('da')
              ) {
                defaultCurrency = 'EUR'
              }
              
              if (data.result.some(currency => currency.name === defaultCurrency)) {
                setSelectedCurrency(defaultCurrency)
              }
            }
          
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
    <section className={styles.pricingSection} id="pricing">
      <div className="container">
        <div className={styles.pricingHeading}>
          <h2 className="gradient-text">Pricing. Simple.</h2>
          <p>Transparent, value-based pricing for your digital projects</p>
        </div>
        
        <div className={styles.currencyDropdown}>
          <button className={styles.dropdownTrigger} onClick={toggleCurrencyMenu}>
            <span>{selectedCurrency}</span>
            <i className="bi bi-chevron-down"></i>
          </button>
          <span
            className={styles.currencyInfoIcon}
          title={`${selectedCurrency} automatically selected based on your browser language (${typeof navigator !== 'undefined' ? navigator.language : 'unknown'}). Final invoice may vary slightly due to exchange rates.`}
          >
            <i className="bi bi-info-circle"></i>
          </span>
          {showCurrencyMenu && (
            <div className={styles.currencyMenu}>
              {currencies.map((currency) => (
                <button 
                  key={currency.name} 
                  className={`${styles.currencyOption} ${selectedCurrency === currency.name ? styles.active : ''}`}
                  onClick={() => selectCurrency(currency.name)}
                >
                  {currency.name}
                </button>
              ))}
              <button 
                className={`${styles.currencyOption} ${selectedCurrency === 'BTC' ? styles.active : ''}`}
                onClick={() => selectCurrency('BTC')}
              >
                BTC
              </button>
            </div>
          )}
        </div>
        
        <div className={styles.pricingGrid}>
          <div className={styles.leftPanel}>
            <div className={styles.priceDisplayBox}>
              <div className={styles.priceAmount}>
                {billingPeriod === 'monthly' 
                  ? prices.monthly[selectedCurrency] || prices.monthly.GBP
                  : prices.quarterlyMonthly[selectedCurrency] || prices.quarterlyMonthly.GBP
                }
              </div>
              <div className={styles.pricePeriod}>/month</div>
            </div>
            
            <div className={styles.switchWrapper}>
              <div 
                className={`${styles.switchBody} ${billingPeriod === 'quarterly' ? styles.on : ''}`} 
                onClick={toggleBillingPeriod}
              >
                <div className={styles.switchIndicator}></div>
              </div>
              <div className={styles.switchLabel}>
                {billingPeriod === 'quarterly' 
                  ? `You're saving ${prices.monthlySavings[selectedCurrency] || prices.monthlySavings.GBP} with quarterly billing`
                  : `Billed Monthly. Activate savings with quarterly billing`
                }
              </div>
            </div>
          </div>
          
          <div className={styles.rightPanel}>
            <div className={styles.featureSection}>
              <div className={styles.featureBadge}>What's included</div>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <i className={`bi bi-check-circle-fill ${styles.featureIcon}`}></i>
                  <span className={styles.featureText}>Queued Tasks delivered in as little as 48hrs</span>
                </li>
                <li className={styles.featureItem}>
                  <i className={`bi bi-check-circle-fill ${styles.featureIcon}`}></i>
                  <span className={styles.featureText}>Unlimited Development Scopes</span>
                </li>
                <li className={styles.featureItem}>
                  <i className={`bi bi-check-circle-fill ${styles.featureIcon}`}></i>
                  <span className={styles.featureText}>Application staging</span>
                </li>
                <li className={styles.featureItem}>
                  <i className={`bi bi-check-circle-fill ${styles.featureIcon}`}></i>
                  <span className={styles.featureText}>Unlimited Revisions queue</span>
                </li>
              </ul>
            </div>
            
            <div className={styles.featureSection}>
              <div className={`${styles.featureBadge} ${styles.green}`}>Billing</div>
              <ul className={styles.featuresList}>
                {billingPeriod === 'monthly' ? (
                  <>
                    <li className={styles.featureItem}>
                      <i className={`bi bi-calendar-month ${styles.featureIcon}`}></i>
                      <span className={styles.featureText}>Monthly billing</span>
                    </li>
                    <li className={styles.featureItem}>
                      <i className={`bi bi-credit-card ${styles.featureIcon}`}></i>
                      <span className={styles.featureText}>
                        Pre-pay {prices.monthly[selectedCurrency] || prices.monthly.GBP} every month
                      </span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className={styles.featureItem}>
                      <i className={`bi bi-calendar3 ${styles.featureIcon}`}></i>
                      <span className={styles.featureText}>Quarterly billing</span>
                    </li>
                    <li className={styles.featureItem}>
                      <i className={`bi bi-piggy-bank ${styles.featureIcon}`}></i>
                      <span className={styles.featureText}>
                        Save {prices.monthlySavings[selectedCurrency] || prices.monthlySavings.GBP} vs monthly
                      </span>
                    </li>
                    <li className={styles.featureItem}>
                      <i className={`bi bi-credit-card ${styles.featureIcon}`}></i>
                      <span className={styles.featureText}>
                        Pre-pay {prices.quarterly[selectedCurrency] || prices.quarterly.GBP} every 3 months
                      </span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.pricingActions}>
          <Link href="/pricing#more-info" className={styles.linkLight}>
            <span>Learn more</span>
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
          <Link href="#chat" className="btn btn-primary">
            <span>Let's talk about pricing</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
