import { getTournamentById } from '@/lib/tournamentsData'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import type { TournamentData } from '@/lib/tournamentsData'

const TournamentDetailClient = dynamic(() => import('./TournamentDetailClient'), {
  ssr: false,
  loading: () => <div className="flex-1 bg-kv-base animate-pulse" />,
})

export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  const tournament = getTournamentById(params.id)
  if (!tournament) notFound()
  return <TournamentDetailClient tournament={tournament as TournamentData} />
}
