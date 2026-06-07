'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import TitleWords from '@/components/TitleWords'
import styles from '../styles/component-css/Pricing.module.css'
import { analytics } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import {
  BASE_PRICES,
  SUBSCRIPTION_PROMO,
  applySubscriptionPromo,
  formatBTC,
  formatCurrency,
  getSubscriptionPromoLabel,
} from '@/lib/pricing'

const PROJECT_ROUTES = [
  {
    icon: 'bi-lightning-charge',
    title: 'Curated MVP Sprint',
    timeline: '2-6 weeks',
    description: 'For focused first versions.',
    bestFor: 'MVPs, demos and early user testing',
    min: 3500,
    period: null,
    cta: 'Start an MVP',
    highlights: [
      'Product scoping',
      'UX/UI design direction',
      'Full-stack MVP build',
      'Deployment support',
      'Handover notes',
    ],
  },
  {
    icon: 'bi-layers',
    title: 'Complete Product Build',
    timeline: '6-12+ weeks',
    description: 'For serious end-to-end launches.',
    bestFor: 'Dashboards, web apps and product systems',
    min: 12000,
    period: null,
    cta: 'Plan a build',
    highlights: [
      'Product planning',
      'Interface design',
      'Frontend and backend development',
      'Auth, database and integrations',
      'Testing and deployment',
    ],
  },
  {
    icon: 'bi-people',
    title: 'Monthly Product Team',
    timeline: 'Monthly',
    description: 'For ongoing product work.',
    bestFor: 'Live products with a steady backlog',
    min: BASE_PRICES.monthly,
    period: '/month',
    cta: 'Work monthly',
    highlights: [
      'Monthly development capacity',
      'Feature iteration',
      'UX improvements',
      'Technical maintenance',
      'Product experiments',
    ],
    isMonthly: true,
  },
]

export default function Pricing({ headingLevel = 'h2' }) {
  const [currencies, setCurrencies] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState('GBP')
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
  const [currencyRates, setCurrencyRates] = useState({ GBP: 1 })
  const [btcRate, setBtcRate] = useState(0)
  const [prices, setPrices] = useState({
    monthly: {
      GBP: formatCurrency(BASE_PRICES.monthly, 'GBP'),
      USD: '$3,800',
      EUR: '€3,500',
      BTC: '₿0.075000'
    }
  })

  const promoActive = SUBSCRIPTION_PROMO.enabled
  const promoLabel = getSubscriptionPromoLabel()
  const promoPrice = applySubscriptionPromo(BASE_PRICES.monthly)

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
          updatedPrices.monthly[currency.name] = formatCurrency(
            BASE_PRICES.monthly * exchangeRate,
            currency.name
          )
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

  const basePriceDisplay = prices.monthly[selectedCurrency] || prices.monthly.GBP
  const promoPriceDisplay = formatAmountForCurrency(promoPrice)
  const HeadingTag = headingLevel === 'h1' ? 'h1' : 'h2'

  return (
    <section
      className={`${styles.pricingSection} ${headingLevel === 'h1' ? styles.pagePricing : ''}`}
      id="pricing"
      data-bg-color={getSectionBackground('pricing')}
      data-text-color={getSectionTextColor('pricing')}
    >
      <div className={`${styles.container} max-w-content mx-auto px-6 sm:px-8`}>
        <div className={styles.sectionHeading}>
          <span className="label-uppercase">Pricing</span>
          <TitleWords as={HeadingTag} className={styles.sectionTitle}>Pricing for serious product work</TitleWords>
          <p className={styles.sectionDescription}>
            Clear routes for MVPs, builds and retained product support.
          </p>
        </div>

        <div className={styles.currencyToolbar}>
          <span className={styles.currencyLabel}>Show pricing in</span>
          <div className={styles.currencyDropdown}>
            <button
              className={styles.dropdownTrigger}
              onClick={toggleCurrencyMenu}
              aria-haspopup="listbox"
              aria-expanded={showCurrencyMenu}
              aria-controls="currency-menu"
            >
              <span>{selectedCurrency}</span>
              <i className="bi bi-chevron-down" aria-hidden="true"></i>
            </button>
            {showCurrencyMenu && (
              <div className={styles.currencyMenu} id="currency-menu" role="listbox" aria-label="Currency options">
                <button
                  className={`${styles.currencyOption} ${selectedCurrency === 'GBP' ? styles.active : ''}`}
                  onClick={() => selectCurrency('GBP')}
                  role="option"
                  aria-selected={selectedCurrency === 'GBP'}
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
                      role="option"
                      aria-selected={selectedCurrency === currency.name}
                    >
                      {currency.name}
                    </button>
                  ))}
                <button
                  className={`${styles.currencyOption} ${selectedCurrency === 'BTC' ? styles.active : ''}`}
                  onClick={() => selectCurrency('BTC')}
                  role="option"
                  aria-selected={selectedCurrency === 'BTC'}
                >
                  BTC
                </button>
              </div>
            )}
          </div>
        </div>

        <div className={styles.pricingGrid}>
          {PROJECT_ROUTES.map((route) => (
            <article
              key={route.title}
              className={`${styles.pricingCard} ${route.isMonthly && promoActive ? styles.saleCard : ''}`}
            >
              <div className={styles.routeIcon}>
                <i className={`bi ${route.icon}`} aria-hidden="true" />
              </div>
              <div className={styles.pricingHeader}>
                <div className={styles.badgeRow}>
                  <TitleWords as="h3" className={styles.planTitle}>{route.title}</TitleWords>
                  {route.isMonthly && promoActive ? <span className={styles.salePill}>{promoLabel}</span> : null}
                </div>
                <p className={styles.timeline}>{route.timeline}</p>
                <div className={styles.priceBlock}>
                  <span className={styles.startingAt}>Starting at</span>
                  {route.isMonthly && promoActive ? (
                    <>
                      <span className={styles.priceOriginal}>{basePriceDisplay}</span>
                      <p className={styles.priceRange}>
                        {promoPriceDisplay}
                        <span>{route.period}</span>
                      </p>
                      <p className={styles.priceNote}>{SUBSCRIPTION_PROMO.note}</p>
                    </>
                  ) : (
                    <p className={styles.priceRange}>
                      {formatAmountForCurrency(route.min)}
                      {route.period ? <span>{route.period}</span> : null}
                    </p>
                  )}
                </div>
              </div>
              <p className={styles.planSubtitle}>{route.description}</p>
              <div className={styles.bestFor}>
                <span>Best for</span>
                <strong>{route.bestFor}</strong>
              </div>
              <ul className={styles.featuresList}>
                {route.highlights.map((highlight) => (
                  <li key={highlight} className={styles.featureItem}>
                    <i className="bi bi-check2" aria-hidden="true"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#contact"
                className={`btn ${route.title === 'Curated MVP Sprint' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => analytics.pricing.bookCall()}
              >
                {route.cta}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
          ))}
        </div>

        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <TitleWords as="h3">Not sure which route fits?</TitleWords>
            <p>Share your goal and constraints. We will recommend the leanest responsible route.</p>
          </div>
          <Link
            href="#contact"
            className="btn btn-secondary"
            onClick={() => analytics.pricing.bookCall()}
          >
            Start a project
          </Link>
        </div>
      </div>
    </section>
  )
}
