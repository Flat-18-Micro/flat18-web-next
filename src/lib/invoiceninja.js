const getApiBase = (host) => new URL('/api/v1', host).toString().replace(/\/$/, '')
const apiHeaders = (apiToken, includeJson = false) => ({
  'X-Api-Token': apiToken,
  'X-Requested-With': 'XMLHttpRequest',
  ...(includeJson ? { 'Content-Type': 'application/json' } : {}),
})

export async function getInvoiceCurrency(host, apiToken, currencyCode) {
  const base = getApiBase(host)
  const response = await fetch(`${base}/statics`, {
    headers: apiHeaders(apiToken),
    cache: 'no-store',
  })

  if (!response.ok) throw new Error(`Invoice Ninja currency lookup failed: ${response.status}`)

  const data = await response.json()
  const currencies = data?.data?.currencies || data?.currencies || []
  const currency = currencies.find((item) => item?.code === currencyCode)

  if (!currency?.id) throw new Error(`Invoice Ninja does not support ${currencyCode}`)

  return currency
}

export async function findOrCreateClient(host, apiToken, { name, email, currencyId }) {
  const base = getApiBase(host)
  const search = await fetch(`${base}/clients?filter=${encodeURIComponent(email)}`, {
    headers: apiHeaders(apiToken),
    cache: 'no-store',
  })

  if (search.ok) {
    const data = await search.json()
    const clients = Array.isArray(data?.data) ? data.data : []
    const match = clients.find((client) => (
      client?.contacts || []
    ).some((contact) => contact?.email?.toLowerCase() === email.toLowerCase()))

    if (match) return match
  }

  const create = await fetch(`${base}/clients`, {
    method: 'POST',
    headers: apiHeaders(apiToken, true),
    body: JSON.stringify({
      name: name || email,
      contacts: [{ email, name: name || email }],
      currency_id: currencyId,
    }),
  })

  if (!create.ok) throw new Error(`Invoice Ninja client creation failed: ${create.status}`)

  const created = await create.json()
  return created?.data ?? created
}

export async function createInvoiceInvitation(host, apiToken, {
  clientId,
  clientContactId,
  currencyId,
  exchangeRate,
  amount,
  itemName,
}) {
  const base = getApiBase(host)
  const invoiceResponse = await fetch(`${base}/invoices`, {
    method: 'POST',
    headers: apiHeaders(apiToken, true),
    body: JSON.stringify({
      client_id: clientId,
      currency_id: currencyId,
      exchange_rate: exchangeRate,
      line_items: [
        {
          cost: amount,
          product_key: itemName,
          notes: itemName,
          quantity: 1,
        },
      ],
      invitations: clientContactId ? [{ client_contact_id: clientContactId }] : undefined,
    }),
  })

  if (!invoiceResponse.ok) throw new Error(`Invoice Ninja invoice creation failed: ${invoiceResponse.status}`)

  const invoiceData = await invoiceResponse.json()
  const invoice = invoiceData?.data ?? invoiceData
  const existingInvitation = invoice?.invitations?.[0]

  if (existingInvitation?.link) return existingInvitation.link

  const invitation = invoice?.invitations?.[0]
  if (invitation?.key) return `${host.replace(/\/$/, '')}/client/invoice/${invitation.key}`

  throw new Error('Invoice Ninja did not return an invoice link')
}
