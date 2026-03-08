import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Services",
  description: "Product and UX design, web engineering, fintech and web3 delivery, plus retainers for ongoing momentum.",
  image: '/og/services.png',
  path: "/services",
})

export default function Layout({ children }) {
  return children
}
