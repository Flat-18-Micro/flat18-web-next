'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from '../styles/component-css/Pricing.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

const BASE_PRICES = { monthly: 2995 }

const formatCurrency = (amount, currencyCode) => {
  try {
    const formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })
    return formatter.format(amount)
  } catch (error) {
    return `${currencyCode} ${amount.toFixed(2)}`
  }
}

const formatBTC = (amount) => `₿${amount.toFixed(6)}`

export default function Pricing() {
  const [currencies, setCurrencies] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('GBP')
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
  const [prices, setPrices] = useState({
    monthly: {
      GBP: '£2,995',
      USD: '$3,800',
      EUR: '€3,500',
      BTC: '₿0.075000'
    }
  })

  const fetchExchangeRates = useCallback(async () => {
    try {
      const response = await fetch('https://f18-pay-backend.vercel.app/api/v1/forex')
      const data = await response.json()

      if (!data.result?.length) return

      setCurrencies(data.result)
      const gbp = data.result.find((currency) => currency.name === 'GBP')
      if (!gbp) return

      if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        const browserLocale = navigator.language || navigator.userLanguage
        let defaultCurrency = 'GBP'

        if (browserLocale.startsWith('en-US')) {
          defaultCurrency = 'USD'
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

        if (data.result.some((currency) => currency.name === defaultCurrency)) {
          setSelectedCurrency(defaultCurrency)
        }
      }

      const updatedPrices = {
        monthly: { GBP: formatCurrency(BASE_PRICES.monthly, 'GBP') }
      }

      data.result.forEach((currency) => {
        if (currency.name !== 'GBP') {
          const exchangeRate = currency.value / gbp.value
          updatedPrices.monthly[currency.name] = formatCurrency(BASE_PRICES.monthly * exchangeRate, currency.name)
        }
      })

      const btcValue = 1 / gbp.value
      updatedPrices.monthly.BTC = formatBTC(BASE_PRICES.monthly * btcValue)

      setPrices(updatedPrices)
    } catch (error) {
      console.error('Error fetching exchange rates:', error)
    }
  }, [])

  useEffect(() => {
    fetchExchangeRates()
  }, [fetchExchangeRates])

  useEffect(() => {
    analytics.pricing.view()
  }, [])

  const toggleCurrencyMenu = () => setShowCurrencyMenu(!showCurrencyMenu)

  const selectCurrency = (currency) => {
    setSelectedCurrency(currency)
    setShowCurrencyMenu(false)
  }

  const subscriptionHighlights = [
    'One active request at a time (unlimited queue)',
    'Unlimited revisions inside scope',
    'Typical turnaround: 48 hours for small tasks',
    'Cancel or pause anytime',
    'Direct Slack/Discord access',
    'Senior design + engineering in one squad'
  ]

  const bespokeReasons = [
    'Just need a landing page or redesign sprint',
    'Roadmap is fuzzy and needs discovery before build',
    'Complex MVP, integration, or migration that warrants a defined scope'
  ]

  const bespokeExamples = [
    {
      label: 'Small',
      detail: 'Landing page / redesign sprint',
      price: 'From £995–£3,500',
      timeline: '1–2 weeks'
    },
    {
      label: 'Core',
      detail: 'Feature bundle / marketing site / integrations light',
      price: '£3,500–£12,000',
      timeline: '3–6 weeks'
    },
    {
      label: 'Large',
      detail: 'Complex build / migrations / MVP',
      price: '£12,000+',
      timeline: '6–12+ weeks'
    }
  ]

  return (
    <section
      className={styles.pricingSection}
      id="pricing"
      data-bg-color={getSectionBackground('pricing')}
      data-text-color={getSectionTextColor('pricing')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Pricing</span>
          <h2 className={styles.sectionTitle}>Pick the route that matches your project</h2>
          <p className={styles.sectionDescription}>
            Keep a monthly subscription running for ongoing momentum or spin up a fixed bespoke quote when you just need a scoped delivery.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          <article className={`${styles.pricingCard} ${styles.subscriptionCard}`}>
            <div className={styles.pricingHeader}>
              <p className={styles.planBadge}>Route A · Subscription</p>
              <h3 className={styles.planTitle}>Monthly subscription</h3>
              <p className={styles.planSubtitle}>
                Ongoing senior design + build capacity for teams who want momentum and don’t want to manage freelancers.
              </p>

              <div className={styles.priceRow}>
                <div className={styles.priceDisplay}>
                  <span className={styles.priceAmount}>{prices.monthly[selectedCurrency] || prices.monthly.GBP}</span>
                  <span className={styles.pricePeriod}>/month</span>
                </div>

                <div className={`${styles.currencySelector} ${styles.currencyInline}`}>
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
              </div>

              <p className={styles.planSupportText}>One subscription covers everything. Spin up requests anytime, pause when you’re done.</p>
            </div>

            <div className={styles.pricingContent}>
              <h4 className={styles.featuresTitle}>Key clarifications</h4>
              <ul className={styles.featuresList}>
                {subscriptionHighlights.map((highlight) => (
                  <li key={highlight} className={styles.featureItem}>
                    <i className="bi bi-check-circle-fill"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.pricingCTA}>
                <Link
                  href="#chat"
                  className="btn btn-primary btn-large"
                  onClick={() => analytics.pricing.bookCall()}
                >
                  Get started today
                </Link>
                <p className={styles.ctaNote}>Book a call to walkthrough onboarding and tooling.</p>
              </div>
            </div>
          </article>

          <article className={`${styles.pricingCard} ${styles.bespokeCard}`}>
            <div className={styles.pricingHeader}>
              <p className={styles.planBadge}>Route B · Bespoke</p>
              <h3 className={styles.planTitle}>One-off project</h3>
              <p className={styles.planSubtitle}>
                Fixed scope, fixed timeline, fixed price. Ideal when you just need a defined project delivered end-to-end.
              </p>
              <p className={styles.planSupportText}>We’ll scope fast, quote clearly, then build to the approved plan.</p>
            </div>

            <div className={styles.pricingContent}>
              <h4 className={styles.featuresTitle}>Best when</h4>
              <ul className={styles.featuresList}>
                {bespokeReasons.map((reason) => (
                  <li key={reason} className={styles.featureItem}>
                    <i className="bi bi-arrow-right-circle"></i>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.examplesMini}>
                {bespokeExamples.map((example) => (
                  <div key={example.label} className={styles.exampleRow}>
                    <div>
                      <p className={styles.exampleLabel}>{example.label}</p>
                      <p className={styles.exampleDetail}>{example.detail}</p>
                    </div>
                    <div className={styles.exampleMetaCompact}>
                      <span>{example.price}</span>
                      <span>{example.timeline}</span>
                    </div>
                  </div>
                ))}
                <p className={styles.examplesFootnote}>Use these as anchors—every bespoke project gets its own quote.</p>
              </div>

              <div className={styles.pricingCTA}>
                <Link
                  href="#chat"
                  className="btn btn-secondary btn-large"
                  onClick={() => analytics.pricing.bookCall()}
                >
                  Request a bespoke quote
                </Link>
                <p className={styles.ctaNote}>Share scope, we’ll return a fixed proposal.</p>
              </div>
            </div>
          </article>
        </div>

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
