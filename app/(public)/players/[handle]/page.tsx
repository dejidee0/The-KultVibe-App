export default function PlayerProfilePage({ params }: { params: { handle: string } }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-kv-text">Player Profile Page (@{params.handle})</h1>
    </div>
  );
}
