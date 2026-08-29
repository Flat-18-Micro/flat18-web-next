'use client'

import { useState, useEffect, useCallback } from 'react'
import ChatCtaLink from '@/components/ChatCtaLink'
import TitleWords from '@/components/TitleWords'
import styles from '../styles/component-css/Pricing.module.css'
import { analytics, trackMetaPixelEvent, trackSignalConversion, trackSignalEvent } from '@/lib/analytics'
import { getSectionBackground, getSectionTextColor } from '@/hooks/scrollBackgroundUtils'
import {
  BASE_PRICES,
  PROJECT_PRICE,
  SUBSCRIPTION_PROMO,
  applySubscriptionPromo,
  formatBTC,
  formatCurrency,
  formatETH,
  getSubscriptionPromoLabel,
} from '@/lib/pricing'

const PROJECT_ROUTES = [
  {
    title: 'Websites',
    timeline: '1-3 weeks',
    description: 'Landing pages, marketing sites and focused website improvements.',
    gridFill: 12,
  },
  {
    title: 'API feature expansion',
    timeline: '1-3 weeks',
    description: 'A defined feature, endpoint or data flow added to an existing product.',
    gridFill: 10,
  },
  {
    title: 'Scoped integration or expansion',
    timeline: '2-4 weeks',
    description: 'Connect a service or extend an existing workflow without opening a full rebuild.',
    gridFill: 19,
  },
]

const CURRENCY_OPTIONS = ['GBP', 'USD', 'EUR', 'BTC', 'ETH']
const INVOICE_CURRENCIES = new Set(['GBP', 'USD', 'EUR'])
const CRYPTO_CURRENCIES = new Set(['BTC', 'ETH'])
const DEFAULT_CURRENCY = 'USD'

const CURRENCY_BY_REGION = {
  GB: 'GBP',
  IE: 'EUR',
  AT: 'EUR',
  BE: 'EUR',
  CY: 'EUR',
  DE: 'EUR',
  EE: 'EUR',
  ES: 'EUR',
  FI: 'EUR',
  FR: 'EUR',
  GR: 'EUR',
  IT: 'EUR',
  LT: 'EUR',
  LU: 'EUR',
  LV: 'EUR',
  MT: 'EUR',
  NL: 'EUR',
  PT: 'EUR',
  SI: 'EUR',
  SK: 'EUR',
  US: 'USD',
  CA: 'USD',
  AU: 'USD',
  NZ: 'USD',
  SG: 'USD',
}

const CURRENCY_BY_LANGUAGE = {
  de: 'EUR',
  es: 'EUR',
  fi: 'EUR',
  fr: 'EUR',
  it: 'EUR',
  nl: 'EUR',
  pt: 'EUR',
  en: 'USD',
}

const getBrowserCurrency = () => {
  if (typeof navigator === 'undefined') return DEFAULT_CURRENCY

  const locales = navigator.languages?.length
    ? navigator.languages
    : [navigator.language || navigator.userLanguage]
  let languageFallback = DEFAULT_CURRENCY

  for (const locale of locales) {
    if (!locale) continue

    const normalisedLocale = locale.replace('_', '-')
    let region

    try {
      const localeInfo = new Intl.Locale(normalisedLocale)
      region = localeInfo.region
    } catch {
      region = normalisedLocale.split('-')[1]?.toUpperCase()
    }

    if (region && CURRENCY_BY_REGION[region]) {
      return CURRENCY_BY_REGION[region]
    }

    const language = normalisedLocale.split('-')[0].toLowerCase()
    if (CURRENCY_BY_LANGUAGE[language]) {
      languageFallback = CURRENCY_BY_LANGUAGE[language]
    }
  }

  return languageFallback
}

const MONTHLY_ROUTE = {
  icon: 'bi-arrow-repeat',
  title: 'Monthly product delivery',
  description: 'For every kind of project that needs ongoing momentum: websites, features, APIs, integrations and product improvements.',
  cta: 'Discuss monthly work',
}

const ORDER_OPTIONS = {
  project: {
    label: 'Project work',
    amount: PROJECT_PRICE,
    description: 'For one clearly scoped website, feature, API expansion or integration.',
  },
  monthly: {
    label: 'Monthly delivery',
    amount: BASE_PRICES.monthly,
    description: 'For ongoing product delivery, support and iteration across websites, features, APIs and integrations.',
  },
}

function EffortGrid({ route }) {
  return (
    <div className={styles.effortVisual}>
      <div className={styles.effortCopy}>
        <strong>{route.title}</strong>
        {/* <span>{route.description}</span> */}
      </div>
      <div className={styles.effortDisplay} aria-label={`Roughly ${route.timeline}`}>
        <div className={styles.effortGrid} aria-hidden="true">
          {Array.from({ length: 25 }, (_, index) => (
            <span
              key={index}
              className={`${styles.effortCell} ${index < route.gridFill ? styles.effortCellFilled : ''}`}
            />
          ))}
        </div>
        <div className={styles.effortCaption}>
          {/* <span>Roughly</span> */}
          <strong>~ {route.timeline}</strong>
        </div>
      </div>
    </div>
  )
}

export default function Pricing({ headingLevel = 'h2' }) {
  const [selectedCurrency, setSelectedCurrency] = useState(DEFAULT_CURRENCY)
  const [fiatCurrency, setFiatCurrency] = useState(DEFAULT_CURRENCY)
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false)
  const [currencyRates, setCurrencyRates] = useState({})
  const [btcRate, setBtcRate] = useState(0)
  const [orderType, setOrderType] = useState(null)
  const [orderName, setOrderName] = useState('')
  const [orderEmail, setOrderEmail] = useState('')
  const [orderLoading, setOrderLoading] = useState(false)
  const [orderError, setOrderError] = useState('')

  const promoActive = SUBSCRIPTION_PROMO.enabled
  const promoLabel = getSubscriptionPromoLabel()
  const promoPrice = applySubscriptionPromo(BASE_PRICES.monthly)
  const HeadingTag = headingLevel === 'h1' ? 'h1' : 'h2'

  const fetchExchangeRates = useCallback(async () => {
    try {
      const response = await fetch('/api/forex')
      if (!response.ok) throw new Error(`Forex request failed with status ${response.status}`)

      const data = await response.json()

      if (!data.result?.length) return

      const gbp = data.result.find((currency) => currency.name === 'GBP')
      if (!gbp) return
      const gbpValue = Number(gbp.value)
      if (!Number.isFinite(gbpValue) || gbpValue <= 0) return

      const defaultCurrency = getBrowserCurrency()
      if (data.result.some((currency) => currency.name === defaultCurrency)) {
        setSelectedCurrency(defaultCurrency)
        if (INVOICE_CURRENCIES.has(defaultCurrency)) setFiatCurrency(defaultCurrency)
      }

      const rates = { GBP: 1 }

      data.result.forEach((currency) => {
        if (currency.name !== 'GBP' && CURRENCY_OPTIONS.includes(currency.name)) {
          const exchangeRate = Number(currency.value) / gbpValue
          if (!Number.isFinite(exchangeRate)) return

          rates[currency.name] = exchangeRate
        }
      })

      const btcValue = 1 / gbpValue

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
    if (INVOICE_CURRENCIES.has(currency)) setFiatCurrency(currency)
    setOrderError('')
  }

  const openOrderForm = (type) => {
    setOrderType(type)
    setOrderError('')
    trackSignalEvent(`pricing_order_${type}`)
    trackSignalConversion('order_started', {
      order_type: type,
      currency: selectedCurrency,
    })
  }

  const submitOrder = async (event) => {
    event.preventDefault()
    setOrderError('')
    setOrderLoading(true)
    const invoiceCurrency = CRYPTO_CURRENCIES.has(selectedCurrency) ? fiatCurrency : selectedCurrency

    trackSignalConversion('invoice_requested', {
      order_type: orderType,
      currency: invoiceCurrency,
    })

    try {
      const response = await fetch('/api/invoiceninja/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: orderName,
          email: orderEmail,
          orderType,
          currency: invoiceCurrency,
        }),
      })
      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.redirectUrl) {
        trackSignalConversion('invoice_creation_failed', {
          order_type: orderType,
          currency: invoiceCurrency,
          status: response.status,
        })
        setOrderError(data.error || 'We could not prepare the invoice. Please try again.')
        return
      }

      trackSignalConversion('invoice_created', {
        order_type: orderType,
        currency: invoiceCurrency,
      })
      if (orderType === 'monthly') {
        trackMetaPixelEvent('Subscribe', {
          content_name: 'monthly_product_delivery',
          content_category: 'service_subscription',
        })
      }
      trackSignalConversion('payment_redirected', {
        order_type: orderType,
        currency: invoiceCurrency,
      })
      window.location.assign(data.redirectUrl)
    } catch {
      trackSignalConversion('invoice_creation_failed', {
        order_type: orderType,
        currency: invoiceCurrency,
        status: 'network_error',
      })
      setOrderError('We could not connect to the payment service. Please try again or discuss the work with us.')
    } finally {
      setOrderLoading(false)
    }
  }

  const formatFiatAmount = (amount) => {
    if (!amount) return ''

    const multiplier = currencyRates[fiatCurrency]
    if (!Number.isFinite(multiplier)) return `${fiatCurrency}—`

    return formatCurrency(amount * multiplier, fiatCurrency)
  }

  const formatCryptoPrice = (amount) => {
    if (selectedCurrency === 'BTC') {
      const multiplier = currencyRates.BTC || btcRate
      if (!Number.isFinite(multiplier) || multiplier <= 0) return '₿—'
      return formatBTC(amount * multiplier)
    }

    if (selectedCurrency === 'ETH') {
      const multiplier = currencyRates.ETH
      if (!Number.isFinite(multiplier) || multiplier <= 0) return 'ETH—'
      return formatETH(amount * multiplier)
    }

    return ''
  }

  const PriceDisplay = ({ amount, suffix = '', showCrypto = true }) => {
    const cryptoPrice = showCrypto && CRYPTO_CURRENCIES.has(selectedCurrency)
      ? formatCryptoPrice(amount)
      : ''

    return (
      <span className={styles.displayPrice}>
        <span className={styles.fiatPrice}>
          {formatFiatAmount(amount)}
          {suffix ? <span className={styles.priceSuffix}>{suffix}</span> : null}
        </span>
        {cryptoPrice ? <span className={styles.cryptoPrice}>{cryptoPrice} · recalculated at checkout</span> : null}
      </span>
    )
  }

  const cryptoSelected = CRYPTO_CURRENCIES.has(selectedCurrency)
  const basePriceDisplay = <PriceDisplay amount={BASE_PRICES.monthly} suffix="/month" />
  const promoPriceDisplay = <PriceDisplay amount={promoPrice} suffix="/month" />
  return (
    <section
      className={`${styles.pricingSection} ${headingLevel === 'h1' ? styles.pagePricing : ''}`}
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
          {headingLevel !== 'h1' ? (
            <a href="/pricing#routes" className={styles.moreInfoLink}>
              See what each route includes
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <div  id="pricing" className={styles.currencyToolbar}>
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
                {CURRENCY_OPTIONS
                  .filter((currency) => currency !== 'GBP' && currency !== 'BTC')
                  .map((currency) => (
                    <button
                      key={currency}
                      className={`${styles.currencyOption} ${selectedCurrency === currency ? styles.active : ''}`}
                      onClick={() => selectCurrency(currency)}
                      role="option"
                      aria-selected={selectedCurrency === currency}
                    >
                      {currency}
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

        <div className={styles.offerGrid}>
          <article className={styles.projectRouteCard}>
            <div className={styles.projectRouteIntro}>
              <div className={styles.projectCardHeader}>
                <div className={styles.routeIcon}>
                  <i className="bi bi-window-stack" aria-hidden="true" />
                </div>
                <span className={styles.projectKicker}>Per project</span>
              </div>
              <TitleWords as="h3" className={styles.projectRouteTitle}>Curated MVP Sprint</TitleWords>
              <p className={styles.planSubtitle}>For focused first versions with a clear route from scope to handover.</p>
              <div className={styles.projectPriceBlock}>
                <span className={styles.startingAt}>Starting at</span>
                <strong><PriceDisplay amount={PROJECT_PRICE} /></strong>
              </div>
              <ChatCtaLink
                className="btn btn-secondary"
                source="pricing:project-route"
                signalLabel="pricing_project_route"
                variant="icon"
              >
                Discuss a project
              </ChatCtaLink>
            </div>

            <div className={styles.effortStack}>
              {PROJECT_ROUTES.map((route) => (
                <EffortGrid key={route.title} route={route} />
              ))}
            </div>
          </article>

          <article className={`${styles.monthlyCard} ${styles.primaryOffer} ${promoActive ? styles.saleCard : ''}`}>
            <div className={styles.monthlyIntro}>
              <div className={styles.projectCardHeader}>
                <div className={styles.routeIcon}>
                  <i className={`bi ${MONTHLY_ROUTE.icon}`} aria-hidden="true" />
                </div>
                <span className={styles.projectKicker}>Monthly</span>
              </div>
              <div className={styles.badgeRow}>
                <TitleWords as="h3" className={styles.planTitle}>{MONTHLY_ROUTE.title}</TitleWords>
                {promoActive ? <span className={styles.salePill}>{promoLabel}</span> : null}
              </div>
              <p className={styles.monthlyDescription}>{MONTHLY_ROUTE.description}</p>
            </div>

            <ul className={styles.monthlyHighlights}>
              <li><i className="bi bi-check2" aria-hidden="true" /> Feature delivery and iteration</li>
              <li><i className="bi bi-check2" aria-hidden="true" /> Websites, APIs and integrations</li>
              <li><i className="bi bi-check2" aria-hidden="true" /> Ongoing product and technical support</li>
            </ul>

            <div className={styles.monthlyPriceBlock}>
              <span className={styles.startingAt}>Starting at</span>
              {promoActive ? (
                <>
                  <span className={styles.priceOriginal}><PriceDisplay amount={BASE_PRICES.monthly} showCrypto={false} /></span>
                  <p className={styles.priceRange}>{promoPriceDisplay}</p>
                  <p className={styles.priceNote}>{SUBSCRIPTION_PROMO.note}</p>
                </>
              ) : (
                <p className={styles.priceRange}>{basePriceDisplay}</p>
              )}
            </div>

            <ChatCtaLink
              className="btn btn-primary"
              source="pricing:monthly"
              signalLabel="pricing_monthly"
              variant="icon"
            >
              {MONTHLY_ROUTE.cta}
            </ChatCtaLink>
                          <p className={styles.monthlyTerms}>Pause or resume any month.<br></br>Discount is available for retainer commitments.</p>
          </article>
        </div>

        <div className={styles.orderPanel} id="order">
          <div className={styles.orderCopy}>
            <span className={styles.orderKicker}>Ready to get started?</span>
            <TitleWords as="h3" className={styles.orderTitle}>Order straight away</TitleWords>
            <p>Choose a route, enter your details and we’ll prepare a secure Invoice Ninja payment link.</p>
          </div>

          {!orderType ? (
            <div className={styles.orderActions}>
              <button type="button" className="btn btn-primary" onClick={() => openOrderForm('project')}>
                <span className={styles.orderButtonLabel}>Order project work&nbsp;</span>
                <PriceDisplay amount={PROJECT_PRICE} />
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => openOrderForm('monthly')}>
                <span className={styles.orderButtonLabel}>Order monthly&nbsp;</span>
                <PriceDisplay amount={BASE_PRICES.monthly} />
              </button>
              {cryptoSelected ? (
                <p className={styles.orderNote}>Your invoice will use the {fiatCurrency} price. The crypto amount is recalculated at checkout.</p>
              ) : null}
            </div>
          ) : (
            <form className={styles.orderForm} onSubmit={submitOrder}>
              <div className={styles.orderSelection}>
                <div className={styles.orderSelectionCopy}>
                  <strong>{ORDER_OPTIONS[orderType].label}</strong>
                  <p>{ORDER_OPTIONS[orderType].description}</p>
                </div>
                <span><PriceDisplay amount={ORDER_OPTIONS[orderType].amount} suffix="invoice" /></span>
              </div>
              <div className={styles.orderFields}>
                <label className={styles.orderField}>
                  <span>Your name</span>
                  <input
                    type="text"
                    value={orderName}
                    onChange={(event) => setOrderName(event.target.value)}
                    autoComplete="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className={styles.orderField}>
                  <span>Email address</span>
                  <input
                    type="email"
                    value={orderEmail}
                    onChange={(event) => setOrderEmail(event.target.value)}
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <div className={styles.orderFormActions}>
                <button type="submit" className="btn btn-primary" disabled={orderLoading}>
                  {orderLoading ? 'Preparing invoice…' : 'Continue to secure payment'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setOrderType(null)} disabled={orderLoading}>
                  Choose another route
                </button>
              </div>
              <p className={styles.orderLegal}>
                The invoice confirms the selected route and price. Please review our <a href="/terms">terms of service</a>, including cancellation and refunds, before paying.
              </p>
              {orderError ? <p className={styles.orderError} role="alert">{orderError}</p> : null}
              <p className={styles.orderNote}>You’ll review the invoice and payment methods in the Invoice Ninja portal.{cryptoSelected ? ` The ${selectedCurrency} amount is recalculated at checkout.` : ''}</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
