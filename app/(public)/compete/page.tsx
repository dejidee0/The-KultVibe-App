import type { Metadata } from 'next'
import CompeteClient from './CompeteClient'

export const metadata: Metadata = {
  title: 'Compete | KultVibe',
  description: 'Enter tournaments, win prize money, and climb the leaderboard. Open competitions for COD Mobile, PUBG, EA FC, music and tech across Africa.',
}

export default function CompetePage() {
  return <CompeteClient />
}
