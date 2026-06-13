import React from 'react';
import StreamCard from '@/components/ui/StreamCard';

const STREAMS = [
  {
    title: 'PUBG Naija Royale',
    streamer: '@ZuluSquad',
    city: 'Abuja',
    viewers: 940,
    game: 'PUBG Mobile',
    tags: ['SQUADS', 'AFRICA'],
    videoSrc: '/videos/stream-pubg.mp4',
    gradientFrom: '#1e3a5f',
    gradientTo: '#0c1a2e',
  },
  {
    title: 'Beat Battle Lagos',
    streamer: '@AfroBeatz',
    city: 'Lagos',
    viewers: 612,
    game: 'Music · Beat Battle',
    tags: ['MUSIC', 'AFROBEATS'],
    videoSrc: '/videos/stream-beatbattle.mp4',
    gradientFrom: '#3b1f0e',
    gradientTo: '#1c0a05',
  },
  {
    title: 'EA FC Street League',
    streamer: '@KelechiFC',
    city: 'Port Harcourt',
    viewers: 388,
    game: 'EA FC',
    tags: ['FIFA', '1V1'],
    videoSrc: '/videos/stream-eafc.mp4',
    gradientFrom: '#064e3b',
    gradientTo: '#022c22',
  },
];

export default function StreamGrid() {
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {STREAMS.map((s) => (
        <StreamCard key={s.title} {...s} />
      ))}
    </div>
  );
}
