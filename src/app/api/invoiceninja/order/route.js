import { NextResponse } from 'next/server'
import { createInvoiceInvitation, findOrCreateClient } from '@/lib/invoiceninja'

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

export async function POST(request) {
  try {
    const body = await request.json()
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const orderType = body?.orderType
    const order = ORDERS[orderType]

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !order) {
      return NextResponse.json({ error: 'Enter a valid email and choose an order.' }, { status: 400 })
    }

    const host = process.env.IN_HOST_URL || 'https://accounts.flat18.co.uk'
    const apiToken = process.env.IN_API_TOKEN

    if (!apiToken) {
      return NextResponse.json({ error: 'Direct ordering is not configured yet.' }, { status: 503 })
    }

    const client = await findOrCreateClient(host, apiToken, { name, email })
    const clientId = client?.id || client?.data?.id
    if (!clientId) throw new Error('Invoice Ninja did not return a client id')

    const redirectUrl = await createInvoiceInvitation(host, apiToken, {
      clientId,
      amount: order.amount,
      itemName: order.itemName,
    })

    return NextResponse.json({ redirectUrl })
  } catch (error) {
    console.error('Invoice Ninja order error:', error)
    return NextResponse.json({ error: 'We could not prepare the invoice. Please try again or discuss the work with us.' }, { status: 502 })
  }
}
