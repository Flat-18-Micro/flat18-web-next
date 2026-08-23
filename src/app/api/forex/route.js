import { NextResponse } from 'next/server'

const FOREX_ENDPOINT = 'https://f18-pay-backend.vercel.app/api/v1/forex'

export const revalidate = 300

export async function GET() {
  try {
    const response = await fetch(FOREX_ENDPOINT, {
      next: { revalidate },
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'The forex service returned an error.' },
        { status: 502 }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Forex proxy error:', error)
    return NextResponse.json(
      { error: 'The forex service could not be reached.' },
      { status: 502 }
    )
  }
}
