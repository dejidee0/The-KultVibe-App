import type { Metadata } from 'next'
import DiscoverClient from './DiscoverClient'

export const metadata: Metadata = {
  title: 'Discover | KultVibe',
  description: 'Discover rising creators, trending streams, and upcoming tournaments across Africa\'s gaming and esports scene.',
}

export default function DiscoverPage() {
  return <DiscoverClient />
}
