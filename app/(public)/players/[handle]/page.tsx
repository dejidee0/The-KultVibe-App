import { getPlayerByHandle } from '@/lib/playersData'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import type { PlayerData } from '@/lib/playersData'

const PlayerProfileClient = dynamic(() => import('./PlayerProfileClient'), {
  ssr: false,
  loading: () => <div className="flex-1 bg-kv-base animate-pulse" />,
})

export default function PlayerProfilePage({ params }: { params: { handle: string } }) {
  const player = getPlayerByHandle(params.handle)
  if (!player) notFound()
  return <PlayerProfileClient player={player as PlayerData} />
}
