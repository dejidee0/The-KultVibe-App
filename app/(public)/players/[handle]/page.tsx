import { getPlayerByHandle } from '@/lib/playersData'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import type { PlayerData } from '@/lib/playersData'

export function generateMetadata({ params }: { params: { handle: string } }): Metadata {
  const player = getPlayerByHandle(params.handle)
  if (!player) return { title: 'Player Not Found | KultVibe' }
  return {
    title: `${player.handle} — ${player.primaryGame} | KultVibe`,
    description: `${player.handle} is ranked ${player.rank} on KultVibe. ${player.wins} wins, ${player.totalEarnings} earned. ${player.bio}`,
  }
}

const PlayerProfileClient = dynamic(() => import('./PlayerProfileClient'), {
  ssr: false,
  loading: () => <div className="flex-1 bg-kv-base animate-pulse" />,
})

export default function PlayerProfilePage({ params }: { params: { handle: string } }) {
  const player = getPlayerByHandle(params.handle)
  if (!player) notFound()
  return <PlayerProfileClient player={player as PlayerData} />
}
