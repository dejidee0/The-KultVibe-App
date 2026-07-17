import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Community | KultVibe',
  description: 'Join the KultVibe community. Chat with gamers, producers, coders, and creators across Africa in real-time rooms.',
}

const CommunityClient = dynamic(() => import('./CommunityClient'), {
  ssr: false,
  loading: () => <div className="flex-1 bg-kv-base animate-pulse" />,
})

export default function CommunityPage() {
  return (
    <div className="h-full overflow-hidden">
      <CommunityClient />
    </div>
  )
}
