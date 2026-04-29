import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Felt Weather Case Study',
  description: 'How Flat18 turned official forecasts and public local chatter into a map-based view of how the weather feels on the ground.',
  path: '/case-studies/felt-weather',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
