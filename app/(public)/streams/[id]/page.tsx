import { getStreamById } from '@/lib/streamsData'
import { notFound } from 'next/navigation'
import StreamWatchClient from './StreamWatchClient'

export default function StreamWatchPage({ params }: { params: { id: string } }) {
  const stream = getStreamById(params.id)
  if (!stream) notFound()
  return <StreamWatchClient stream={stream} />
}
