import { getStreamById } from '@/lib/streamsData'
import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import type { StreamData } from '@/lib/streamsData'

const StreamWatchClient = dynamic(() => import('./StreamWatchClient'), {
  ssr: false,
  loading: () => <div className="flex-1 bg-kv-base animate-pulse" />,
})

export default function StreamWatchPage({ params }: { params: { id: string } }) {
  const stream = getStreamById(params.id)
  if (!stream) notFound()
  return <StreamWatchClient stream={stream as StreamData} />
}
