import dynamic from 'next/dynamic'

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
