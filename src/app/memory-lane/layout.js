import { generatePageMetadata } from '@/lib/seo'

export const metadata = generatePageMetadata({
  title: 'Memory lane',
  description: 'A small archive of Flat 18 website deployments, kept with the commits that shaped them.',
  path: '/memory-lane',
})

export default function Layout({ children }) {
  return children
}
