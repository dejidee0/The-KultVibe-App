import type { Metadata } from 'next'
import LeaderboardsClient from './LeaderboardsClient'

export const metadata: Metadata = {
  title: 'Leaderboards | KultVibe',
  description: 'See the top-ranked players and creators on KultVibe. Track earnings, wins, and rankings across gaming, music, tech, and lifestyle verticals.',
}

export default function LeaderboardsPage() {
  return <LeaderboardsClient />
}
