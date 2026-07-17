import type { Metadata } from 'next'
import CreatorsClient from './CreatorsClient'

export const metadata: Metadata = {
  title: 'Creators | KultVibe',
  description: 'Browse and follow the top African gaming creators, streamers, music producers, and tech builders on KultVibe.',
}

export default function CreatorsPage() {
  return <CreatorsClient />
}
