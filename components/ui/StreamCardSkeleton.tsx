export default function StreamCardSkeleton() {
  return (
    <div
      className="bg-kv-card rounded-xl overflow-hidden animate-pulse"
      style={{ border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="h-[110px]" style={{ background: 'rgba(255,255,255,0.05)' }} />
      <div className="p-2.5 flex flex-col gap-2">
        <div className="h-3 rounded w-3/4" style={{ background: 'rgba(255,255,255,0.08)' }} />
        <div className="h-2.5 rounded w-1/2" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="flex gap-1.5 mt-0.5">
          <div className="h-4 rounded w-12" style={{ background: 'rgba(255,255,255,0.05)' }} />
          <div className="h-4 rounded w-10" style={{ background: 'rgba(255,255,255,0.05)' }} />
        </div>
      </div>
    </div>
  );
}
