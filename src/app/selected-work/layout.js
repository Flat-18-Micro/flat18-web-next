import { generatePageMetadata } from '@/lib/seo'
import CaseStudyJourneyScroll from '@/components/CaseStudyJourneyScroll'

export const metadata = generatePageMetadata({
  title: 'Selected work',
  description: 'Selected work showing how Flat18 finds the costly friction in products and services, then designs and ships fixes that make them easier to trust, sell or operate.',
  image: '/og/selected-work.png',
  path: '/selected-work',
  keywords: [
    'Flat 18 selected work',
    'product design selected work',
    'web development selected work',
    'portfolio',
    'client work',
  ],
})

export default function Layout({ children }) {
  return (
    <>
      <CaseStudyJourneyScroll />
      {children}
    </>
  )
}
