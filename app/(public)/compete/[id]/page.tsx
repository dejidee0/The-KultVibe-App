import { getTournamentById } from '@/lib/tournamentsData'
import { notFound } from 'next/navigation'
import TournamentDetailClient from './TournamentDetailClient'

export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  const tournament = getTournamentById(params.id)
  if (!tournament) notFound()
  return <TournamentDetailClient tournament={tournament} />
}
