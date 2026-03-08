import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Pricing",
  description: "Transparent pricing for subscription and fixed-scope engagements with a senior team.",
  image: '/og/pricing.png',
  path: "/pricing",
})

export default function Layout({ children }) {
  return children
}
