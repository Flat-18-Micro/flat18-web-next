import { NextResponse } from 'next/server'
import { createInvoiceInvitation, findOrCreateClient, getInvoiceCurrency } from '@/lib/invoiceninja'

const ORDERS = {
  project: {
    amount: 500,
    itemName: 'Flat 18 scoped project work',
  },
  monthly: {
    amount: 2995,
    itemName: 'Flat 18 monthly product delivery',
  },
}

const DEFAULT_CURRENCY = 'GBP'
const SUPPORTED_CURRENCIES = new Set(['GBP', 'USD', 'EUR'])

const roundCurrencyAmount = (amount) => Math.round(amount * 100) / 100

export async function POST(request) {
  try {
    const body = await request.json()
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const orderType = body?.orderType
    const order = ORDERS[orderType]
    const currency = typeof body?.currency === 'string'
      ? body.currency.toUpperCase()
      : DEFAULT_CURRENCY

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !order) {
      return NextResponse.json({ error: 'Enter a valid email and choose an order.' }, { status: 400 })
    }

    if (!SUPPORTED_CURRENCIES.has(currency)) {
      return NextResponse.json({ error: 'Invoice Ninja checkout is currently available in GBP, USD and EUR.' }, { status: 400 })
    }

    const host = process.env.IN_HOST_URL || 'https://accounts.flat18.co.uk'
    const apiToken = process.env.IN_API_TOKEN

    if (!apiToken) {
      return NextResponse.json({ error: 'Direct ordering is not configured yet.' }, { status: 503 })
    }

    const invoiceCurrency = await getInvoiceCurrency(host, apiToken, currency)
    const baseCurrency = await getInvoiceCurrency(host, apiToken, DEFAULT_CURRENCY)
    const selectedExchangeRate = Number(invoiceCurrency.exchange_rate)
    const baseExchangeRate = Number(baseCurrency.exchange_rate)

    if (!Number.isFinite(selectedExchangeRate) || !Number.isFinite(baseExchangeRate) || baseExchangeRate <= 0) {
      throw new Error('Invoice Ninja returned invalid currency rates')
    }

    const exchangeRate = selectedExchangeRate / baseExchangeRate
    const amount = roundCurrencyAmount(order.amount * exchangeRate)
    const client = await findOrCreateClient(host, apiToken, {
      name,
      email,
      currencyId: invoiceCurrency.id,
    })
    const clientId = client?.id || client?.data?.id
    if (!clientId) throw new Error('Invoice Ninja did not return a client id')
    const clientContact = client?.contacts?.[0] || client?.data?.contacts?.[0]
    const clientContactId = clientContact?.id || clientContact?.hashed_id

    const redirectUrl = await createInvoiceInvitation(host, apiToken, {
      clientId,
      clientContactId,
      currencyId: invoiceCurrency.id,
      exchangeRate,
      amount,
      itemName: order.itemName,
    })

    return NextResponse.json({ redirectUrl })
  } catch (error) {
    console.error('Invoice Ninja order error:', error)
    return NextResponse.json({ error: 'We could not prepare the invoice. Please try again or discuss the work with us.' }, { status: 502 })
  }
}
