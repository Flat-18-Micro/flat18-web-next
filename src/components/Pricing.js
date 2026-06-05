'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
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
    title: 'Curated MVP sprint',
    timeline: '2-6 weeks',
    description: 'A tight build for a usable first version, demo or market test.',
    min: 3500,
    max: 12000,
    cta: 'Start a project',
    highlights: [
      'Scope and user flow',
      'UX, UI and full-stack build',
      'Deployment and handover',
    ],
  },
  {
    icon: 'bi-layers',
    title: 'Complete product',
    timeline: '6-12+ weeks',
    description: 'Design and engineering for production software.',
    min: 12000,
    max: null,
    cta: 'Request a quote',
    highlights: [
      'Architecture and product design',
      'Frontend, backend and integrations',
      'QA, launch and documentation',
    ],
  },
]

const PRODUCT_TEAM_HIGHLIGHTS = [
  'Senior design and development capacity',
  'LLM-assisted implementation and review',
  'One active request, clear queue',
  'Pause when done',
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

  const formatRange = (min, max) => {
    const minStr = formatAmountForCurrency(min)
    if (!max) return `${minStr}+`
    const maxStr = formatAmountForCurrency(max)
    return `${minStr}-${maxStr}`
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
          <HeadingTag className={styles.sectionTitle}>Pricing for serious product work</HeadingTag>
          <p className={styles.sectionDescription}>
            Clear starting points. Faster LLM-assisted delivery, still led by senior product and engineering judgement.
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
            <article key={route.title} className={styles.pricingCard}>
              <div className={styles.routeIcon}>
                <i className={`bi ${route.icon}`} aria-hidden="true" />
              </div>
              <div className={styles.pricingHeader}>
                <h3 className={styles.planTitle}>{route.title}</h3>
                <p className={styles.timeline}>{route.timeline}</p>
                <p className={styles.priceRange}>{formatRange(route.min, route.max)}</p>
              </div>
              <p className={styles.planSubtitle}>{route.description}</p>
              <ul className={styles.featuresList}>
                {route.highlights.map((highlight) => (
                  <li key={highlight} className={styles.featureItem}>
                    <i className="bi bi-check2" aria-hidden="true"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#chat"
                className={`btn ${route.title === 'Curated MVP sprint' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => analytics.pricing.bookCall()}
              >
                {route.cta}
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </Link>
            </article>
          ))}

          <article className={`${styles.pricingCard} ${styles.teamCard} ${promoActive ? styles.saleCard : ''}`}>
            <div className={styles.routeIcon}>
              <i className="bi bi-people" aria-hidden="true" />
            </div>
            <div className={styles.teamContent}>
              <div>
                <div className={styles.badgeRow}>
                  <h3 className={styles.planTitle}>Monthly product team</h3>
                  {promoActive ? <span className={styles.salePill}>{promoLabel}</span> : null}
                </div>
                <p className={styles.planSubtitle}>
                  Ongoing senior product work when you need continuous momentum.
                </p>
              </div>

              <div className={styles.teamPriceBlock}>
                {promoActive ? (
                  <>
                    <span className={styles.priceOriginal}>{basePriceDisplay}</span>
                    <div className={styles.priceDisplay}>
                      <span className={styles.priceAmount}>{promoPriceDisplay}</span>
                      <span className={styles.pricePeriod}>/month</span>
                    </div>
                    <p className={styles.priceNote}>{SUBSCRIPTION_PROMO.note}</p>
                  </>
                ) : (
                  <div className={styles.priceDisplay}>
                    <span className={styles.priceAmount}>{basePriceDisplay}</span>
                    <span className={styles.pricePeriod}>/month</span>
                  </div>
                )}
              </div>
            </div>

            <ul className={styles.teamHighlights}>
              {PRODUCT_TEAM_HIGHLIGHTS.map((highlight) => (
                <li key={highlight}>
                  <i className="bi bi-check2" aria-hidden="true"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#chat"
              className="btn btn-primary"
              onClick={() => analytics.pricing.bookCall()}
            >
              Start a project
              <i className="bi bi-arrow-right" aria-hidden="true"></i>
            </Link>
          </article>
        </div>

        <div className={styles.bottomCTA}>
          <div className={styles.ctaContent}>
            <h3>Not sure which route fits?</h3>
            <p>Share your goal and constraints. We will recommend the leanest responsible route.</p>
          </div>
          <Link
            href="#chat"
            className="btn btn-secondary"
            onClick={() => analytics.pricing.bookCall()}
          >
            Ask for guidance
          </Link>
        </div>
      </div>
    </section>
  )
}
