'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/component-css/Pricing.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground } from '@/hooks/useScrollBackground'

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

    // Track pricing view
    analytics.pricing.view()
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

  // Example project costs data
  const exampleProjects = [
    {
      title: 'Landing Page',
      description: 'Marketing website with 5-8 pages',
      timeframe: '2-3 weeks',
      cost: billingPeriod === 'monthly' ? '1 month' : '0.8 months'
    },
    {
      title: 'Web App MVP',
      description: 'Full-stack application with auth & database',
      timeframe: '6-8 weeks',
      cost: billingPeriod === 'monthly' ? '2 months' : '1.6 months'
    },
    {
      title: 'E-commerce Platform',
      description: 'Complete online store with payments',
      timeframe: '8-12 weeks',
      cost: billingPeriod === 'monthly' ? '3 months' : '2.4 months'
    }
  ]

  return (
    <section
      className={styles.pricingSection}
      id="pricing"
      data-bg-color={getSectionBackground('pricing')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        {/* F18-style section heading */}
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Pricing</span>
          <h2 className={styles.sectionTitle}>Simple, transparent pricing</h2>
          <p className={styles.sectionDescription}>
            One subscription covers everything. No hidden fees, no surprises.
          </p>
        </div>

        {/* Currency selector */}
        <div className={styles.currencySelector}>
          <div className={styles.currencyDropdown}>
            <button className={styles.dropdownTrigger} onClick={toggleCurrencyMenu}>
              <span>{selectedCurrency}</span>
              <i className="bi bi-chevron-down"></i>
            </button>
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
        </div>

        {/* Main pricing card */}
        <div className={styles.pricingCard}>
          <div className={styles.pricingHeader}>
            {/* F18-style large typography */}
            <div className={styles.priceDisplay}>
              <span className={styles.priceAmount}>
                {billingPeriod === 'monthly'
                  ? prices.monthly[selectedCurrency] || prices.monthly.GBP
                  : prices.quarterlyMonthly[selectedCurrency] || prices.quarterlyMonthly.GBP
                }
              </span>
              <span className={styles.pricePeriod}>/month</span>
            </div>

            {/* Monthly/quarterly toggle */}
            <div className={styles.billingToggle}>
              <div className={styles.toggleWrapper}>
                <button
                  className={`${styles.toggleOption} ${billingPeriod === 'monthly' ? styles.active : ''}`}
                  onClick={() => setBillingPeriod('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`${styles.toggleOption} ${billingPeriod === 'quarterly' ? styles.active : ''}`}
                  onClick={() => setBillingPeriod('quarterly')}
                >
                  Quarterly
                  <span className={styles.savingsBadge}>Save 20%</span>
                </button>
              </div>
              {billingPeriod === 'quarterly' && (
                <p className={styles.savingsNote}>
                  You're saving {prices.monthlySavings[selectedCurrency] || prices.monthlySavings.GBP} per month
                </p>
              )}
            </div>
          </div>

          <div className={styles.pricingContent}>
            {/* What's included */}
            <div className={styles.featuresSection}>
              <h3 className={styles.featuresTitle}>What's included</h3>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Unlimited requests & revisions</span>
                </li>
                <li className={styles.featureItem}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>48-hour turnaround on most tasks</span>
                </li>
                <li className={styles.featureItem}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Direct Slack/Discord communication</span>
                </li>
                <li className={styles.featureItem}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Staging environments included</span>
                </li>
                <li className={styles.featureItem}>
                  <i className="bi bi-check-circle-fill"></i>
                  <span>Pause or cancel anytime</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className={styles.pricingCTA}>
              <Link
                href="#chat"
                className="btn btn-primary btn-large"
                onClick={() => analytics.pricing.bookCall()}
              >
                Get started today
              </Link>
              <p className={styles.ctaNote}>
                Book a call to discuss your project
              </p>
            </div>
          </div>
        </div>

        {/* Example project costs */}
        <div className={styles.examplesSection}>
          <h3 className={styles.examplesTitle}>Example project costs</h3>
          <p className={styles.examplesDescription}>
            Here's how our subscription model works for different project types
          </p>

          <div className={styles.examplesGrid}>
            {exampleProjects.map((project, index) => (
              <div key={index} className={styles.exampleCard}>
                <h4 className={styles.exampleTitle}>{project.title}</h4>
                <p className={styles.exampleDescription}>{project.description}</p>
                <div className={styles.exampleMeta}>
                  <div className={styles.exampleTimeframe}>
                    <i className="bi bi-clock"></i>
                    <span>{project.timeframe}</span>
                  </div>
                  <div className={styles.exampleCost}>
                    <span className={styles.costLabel}>Subscription cost:</span>
                    <span className={styles.costValue}>{project.cost}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3>Ready to get started?</h3>
            <p>Book a discovery call to discuss your project needs</p>
          </div>
          <Link
            href="#chat"
            className="btn btn-primary"
            onClick={() => analytics.pricing.bookCall()}
          >
            Book a call
          </Link>
        </div>
      </div>
    </section>
  )
}
