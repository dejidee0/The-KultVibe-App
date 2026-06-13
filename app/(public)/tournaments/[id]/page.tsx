export default function TournamentDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-kv-text">Tournament Detail Page ({params.id})</h1>
    </div>
  );
}
