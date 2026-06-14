const VIDEOS = [
  '/videos/featured-stream.mp4',
  '/videos/stream-pubg.mp4',
  '/videos/stream-beatbattle.mp4',
  '/videos/stream-eafc.mp4',
];

let cached: string[] | null = null;

// Shuffles once per client page load, then returns the same order on every call.
// FeaturedStream takes index 0, StreamGrid takes indices 1-3.
export function getShuffledVideos(): string[] {
  if (cached) return cached;
  const a = [...VIDEOS];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  cached = a;
  return cached;
}
