'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from '../styles/component-css/Pricing.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/useScrollBackground'

const BASE_PRICES = { monthly: 2995 }

const SUBSCRIPTION_HIGHLIGHTS = [
  'One active request at a time (unlimited queue)',
  'Unlimited revisions inside scope',
  'Typical turnaround: 48 hours for small tasks',
  'Cancel or pause anytime',
  'Direct Slack/Discord access',
  'Senior design + engineering in one squad'
]

const BESPOKE_PACKAGES = [
  {
    label: 'Small project',
    detail: 'Landing page / redesign sprint',
    min: 995,
    max: 3500,
    timeline: 'Up to 2 weeks'
  },
  {
    label: 'Large project',
    detail: 'MVP / integrations / migrations',
    min: 12000,
    max: null,
    timeline: '2-12 weeks (up to 3 months)'
  }
]

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
  const [currencyRates, setCurrencyRates] = useState({ GBP: 1 })
  const [btcRate, setBtcRate] = useState(0)
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

      const rates = { GBP: 1 }

      const updatedPrices = {
        monthly: { GBP: formatCurrency(BASE_PRICES.monthly, 'GBP') }
      }

      data.result.forEach((currency) => {
        if (currency.name !== 'GBP') {
          const exchangeRate = currency.value / gbp.value
          updatedPrices.monthly[currency.name] = formatCurrency(BASE_PRICES.monthly * exchangeRate, currency.name)
          rates[currency.name] = exchangeRate
        }
      })

      const btcValue = 1 / gbp.value
      updatedPrices.monthly.BTC = formatBTC(BASE_PRICES.monthly * btcValue)

      setPrices(updatedPrices)
      setCurrencyRates(rates)
      setBtcRate(btcValue)
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

  const formatAmountForCurrency = (amount) => {
    if (!amount) return ''

    if (selectedCurrency === 'BTC') {
      if (!btcRate) return '₿—'
      return formatBTC(amount * btcRate)
    }

    const multiplier = currencyRates[selectedCurrency] ?? 1
    return formatCurrency(amount * multiplier, selectedCurrency)
  }

  const formatRange = (min, max) => {
    const minStr = formatAmountForCurrency(min)
    if (!max) return `${minStr}+`
    const maxStr = formatAmountForCurrency(max)
    return `${minStr}-${maxStr}`
  }

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
          <h2 className={styles.sectionTitle}>Two ways to engage</h2>
          <p className={styles.sectionDescription}>
            Keep momentum with a monthly subscription or run a fixed-scope project with a clear quote.
          </p>
        </div>

        <div className={styles.currencyToolbar}>
          <span className={styles.currencyLabel}>Show pricing in</span>
          <div className={styles.currencyDropdown}>
            <button className={styles.dropdownTrigger} onClick={toggleCurrencyMenu}>
              <span>{selectedCurrency}</span>
              <i className="bi bi-chevron-down"></i>
            </button>
            {showCurrencyMenu && (
              <div className={styles.currencyMenu}>
                <button
                  className={`${styles.currencyOption} ${selectedCurrency === 'GBP' ? styles.active : ''}`}
                  onClick={() => selectCurrency('GBP')}
                >
                  GBP
                </button>
                {currencies
                  .filter((currency) => currency.name !== 'GBP')
                  .map((currency) => (
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

        <div className={styles.pricingGrid}>
          <article className={`${styles.pricingCard} ${styles.subscriptionCard}`}>
            <div className={styles.pricingHeader}>
              <p className={styles.planBadge}>Route A · Subscription</p>
              <h3 className={styles.planTitle}>Monthly subscription</h3>
              <p className={styles.planSubtitle}>
                Ongoing senior design + build capacity for teams who want momentum without hiring.
              </p>

              <div className={styles.priceDisplay}>
                <span className={styles.priceAmount}>{prices.monthly[selectedCurrency] || prices.monthly.GBP}</span>
                <span className={styles.pricePeriod}>/month</span>
              </div>

              <p className={styles.planSupportText}>One subscription covers everything. Queue requests anytime, pause when you're done.</p>
            </div>

            <div className={styles.pricingContent}>
              <h4 className={styles.featuresTitle}>Key clarifications</h4>
              <ul className={styles.featuresList}>
                {SUBSCRIPTION_HIGHLIGHTS.map((highlight) => (
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
                  Book a fit call
                </Link>
                <p className={styles.ctaNote}>We'll confirm fit, scope, and next steps.</p>
              </div>
            </div>
          </article>

          <article className={`${styles.pricingCard} ${styles.bespokeCard}`}>
            <div className={styles.pricingHeader}>
              <p className={styles.planBadge}>Route B · Bespoke</p>
              <h3 className={styles.planTitle}>One-off project</h3>
              <p className={styles.planSubtitle}>
                Fixed scope, fixed timeline, fixed price. Ideal when you need a defined delivery end-to-end.
              </p>
              <p className={styles.planSupportText}>We'll scope fast, quote clearly, then build to the approved plan.</p>
            </div>

            <div className={styles.pricingContent}>
              <div className={styles.bespokeSummary}>
                <p className={styles.bespokeIntro}>
                  Defined-scope projects delivered in as little as 2 weeks and no longer than 3 months.
                </p>
                <div className={styles.bespokePackages}>
                  {BESPOKE_PACKAGES.map((pkg) => (
                    <div key={pkg.label} className={styles.packageCard}>
                      <div className={styles.packageHeader}>
                        <p className={styles.packageLabel}>{pkg.label}</p>
                        <span className={styles.packageTimeline}>{pkg.timeline}</span>
                      </div>
                      <p className={styles.packageDetail}>{pkg.detail}</p>
                      <p className={styles.packagePrice}>{formatRange(pkg.min, pkg.max)}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.pricingCTA}>
                <Link
                  href="#chat"
                  className="btn btn-secondary btn-large"
                  onClick={() => analytics.pricing.bookCall()}
                >
                  Request a bespoke quote
                </Link>
                <p className={styles.ctaNote}>Share scope, we'll return a fixed proposal.</p>
              </div>
            </div>
          </article>
        </div>

        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3>Ready to move?</h3>
            <p>We'll respond fast with clear next steps.</p>
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
