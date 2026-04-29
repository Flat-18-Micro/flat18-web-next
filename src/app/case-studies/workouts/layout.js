import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Workouts Case Study',
  description: 'How Flat18 turned workout planning, schedule selection, set logging, recovery context, and progress signals into one practical training system.',
  path: '/case-studies/workouts',
  image: '/og/case-studies.png',
})

export default function Layout({ children }) {
  return children
}
