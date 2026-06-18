import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'BTCPay Server Case Study',
  description:
    'How Flat18 helped turn BTCPay Server from a first website into a multilingual, video-led, case-study-backed home for self-hosted Bitcoin payments.',
  path: '/case-studies/btcpayserver',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
