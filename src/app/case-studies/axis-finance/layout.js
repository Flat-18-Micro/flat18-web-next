import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Axis Finance Case Study',
  description:
    'How Flat18 shaped Axis Finance into a quiet, privacy-first dashboard for live positions, prices, alerts, and read-only wallet tracking.',
  path: '/case-studies/axis-finance',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
