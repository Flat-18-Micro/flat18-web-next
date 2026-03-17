export const BASE_PRICES = {
  monthly: 2995,
}

// Toggle enabled to switch the subscription promo on/off.
export const SUBSCRIPTION_PROMO = {
  enabled: true,
  discountRate: 0.5,
  banner: {
    message: 'Half-price monthly subscription. Limited slots available.',
    cta: 'See pricing',
    href: '/#pricing',
  },
  note: 'Half-price monthly subscription. Limited slots available.',
}

export const getSubscriptionPromoLabel = () => {
  const percent = Math.round(SUBSCRIPTION_PROMO.discountRate * 100)
  return `${percent}% off`
}

export const applySubscriptionPromo = (amount) => {
  if (!SUBSCRIPTION_PROMO.enabled) return amount
  return amount * (1 - SUBSCRIPTION_PROMO.discountRate)
}

export const roundUpToCharmPrice = (amount, currencyCode) => {
  if (currencyCode === 'BTC') return amount
  if (!Number.isFinite(amount)) return amount

  const rounded = Math.ceil(amount)
  const lastDigit = rounded % 10

  if (lastDigit === 5 || lastDigit === 9) {
    return rounded
  }

  const addTo5 = (5 - lastDigit + 10) % 10
  const addTo9 = (9 - lastDigit + 10) % 10
  const add = Math.min(addTo5, addTo9)

  return rounded + add
}

export const formatCurrency = (amount, currencyCode, options = {}) => {
  const { minimumFractionDigits = 0, maximumFractionDigits = 0 } = options

  try {
    const formatter = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits,
      maximumFractionDigits,
    })
    return formatter.format(amount)
  } catch (error) {
    const safeAmount = Number.isFinite(amount) ? amount : 0
    return `${currencyCode} ${safeAmount.toFixed(maximumFractionDigits)}`
  }
}

export const formatPsychologicalCurrency = (amount, currencyCode, options = {}) => {
  const roundedAmount = roundUpToCharmPrice(amount, currencyCode)
  return formatCurrency(roundedAmount, currencyCode, options)
}

export const formatBTC = (amount) => `₿${amount.toFixed(6)}`
