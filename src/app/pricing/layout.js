import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: "Pricing",
  description: "Pricing routes for curated MVP sprints, complete product builds and monthly product team capacity.",
  image: '/og/pricing.png',
  path: "/pricing",
})

export default function Layout({ children }) {
  return children
}
