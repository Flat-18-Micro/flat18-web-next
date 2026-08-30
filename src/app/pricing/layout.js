import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Pricing",
  description: "A fixed-scope Tiny Audit, curated MVP sprints, complete product builds and monthly product team capacity.",
  image: '/og/pricing.png',
  path: "/pricing",
})

export default function Layout({ children }) {
  return children
}
