'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Award01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import TournamentCard from '@/components/ui/TournamentCard';

type Vertical   = { id: string; label: string; count: number };
type Tournament = {
  id: string; name: string; game: string; vertical: string;
  prize: string; spotsLeft: number; totalSpots: number; imageSrc: string;
};

const VERTICALS: Vertical[] = [
  { id: 'all',           label: 'All',             count: 45 },
  { id: 'gaming',        label: 'Gaming',          count: 8  },
  { id: 'fps',           label: 'FPS / Shooter',   count: 6  },
  { id: 'battle-royale', label: 'Battle Royale',   count: 5  },
  { id: 'sports',        label: 'Sports',          count: 4  },
  { id: 'fighting',      label: 'Fighting',        count: 3  },
  { id: 'music',         label: 'Music',           count: 4  },
  { id: 'afrobeats',     label: 'Afrobeats',       count: 3  },
  { id: 'tech',          label: 'Tech & Dev',      count: 4  },
  { id: 'coding',        label: 'Coding',          count: 3  },
  { id: 'moba',          label: 'MOBA',            count: 2  },
  { id: 'lifestyle',     label: 'Lifestyle',       count: 2  },
  { id: 'streaming',     label: 'Streaming',       count: 2  },
  { id: 'creator',       label: 'Creator Economy', count: 2  },
];

const TOURNAMENTS: Tournament[] = [
  { id: 'codm-cup',           name: 'Lagos Arena CODM Cup',            game: 'COD Mobile',        vertical: 'gaming',        prize: '₦100,000', spotsLeft: 26,  totalSpots: 128, imageSrc: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop' },
  { id: 'eafc-league',        name: 'EA FC Street League',             game: 'EA FC 25',          vertical: 'gaming',        prize: '₦50,000',  spotsLeft: 13,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop' },
  { id: 'mortal-kombat',      name: 'Mortal Kombat Naija Invitational',game: 'Mortal Kombat 1',   vertical: 'gaming',        prize: '₦70,000',  spotsLeft: 8,   totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop' },
  { id: 'pes-classic',        name: 'PES Classic Revival Cup',         game: 'eFootball',         vertical: 'gaming',        prize: '₦35,000',  spotsLeft: 22,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400&h=200&fit=crop' },
  { id: 'rocket-league-wa',   name: 'Rocket League West Africa Open',  game: 'Rocket League',     vertical: 'gaming',        prize: '₦85,000',  spotsLeft: 16,  totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop' },
  { id: 'gta-races',          name: 'GTA Online Race Circuits Nigeria', game: 'GTA Online',       vertical: 'gaming',        prize: '₦40,000',  spotsLeft: 30,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop' },
  { id: 'minecraft-build',    name: 'Minecraft Build Battle Africa',   game: 'Minecraft',         vertical: 'gaming',        prize: '₦55,000',  spotsLeft: 45,  totalSpots: 100, imageSrc: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=200&fit=crop' },
  { id: 'fortnite-solos',     name: 'Fortnite Solos Naija Sprint',     game: 'Fortnite',          vertical: 'gaming',        prize: '₦65,000',  spotsLeft: 60,  totalSpots: 128, imageSrc: 'https://images.unsplash.com/photo-1636622433525-127afcd89f88?w=400&h=200&fit=crop' },
  { id: 'valorant-open',      name: 'Valorant Lagos Open',             game: 'Valorant',          vertical: 'fps',           prize: '₦120,000', spotsLeft: 38,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop' },
  { id: 'codm-ranked',        name: 'COD Mobile Ranked Series S2',     game: 'COD Mobile',        vertical: 'fps',           prize: '₦90,000',  spotsLeft: 14,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop&crop=right' },
  { id: 'cs2-africa',         name: 'CS2 Africa Qualifiers',           game: 'CS2',               vertical: 'fps',           prize: '₦200,000', spotsLeft: 22,  totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop' },
  { id: 'apex-naija',         name: 'Apex Legends Naija Cup',          game: 'Apex Legends',      vertical: 'fps',           prize: '₦110,000', spotsLeft: 18,  totalSpots: 60,  imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop&crop=left' },
  { id: 'overwatch-abuja',    name: 'Overwatch 2 Abuja Open',          game: 'Overwatch 2',       vertical: 'fps',           prize: '₦75,000',  spotsLeft: 30,  totalSpots: 60,  imageSrc: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=200&fit=crop' },
  { id: 'warzone-ng',         name: 'Warzone Nigeria Solos',           game: 'Warzone',           vertical: 'fps',           prize: '₦60,000',  spotsLeft: 55,  totalSpots: 128, imageSrc: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&crop=top' },
  { id: 'pubg-royale',        name: 'PUBG Naija Royale',               game: 'PUBG Mobile',       vertical: 'battle-royale', prize: '₦250,000', spotsLeft: 20,  totalSpots: 100, imageSrc: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop' },
  { id: 'freefire-clash',     name: 'Free Fire Abuja Clash',           game: 'Free Fire',         vertical: 'battle-royale', prize: '₦60,000',  spotsLeft: 44,  totalSpots: 128, imageSrc: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=400&h=200&fit=crop&crop=top' },
  { id: 'pubg-squads',        name: 'PUBG Mobile Squads Port Harcourt',game: 'PUBG Mobile',       vertical: 'battle-royale', prize: '₦140,000', spotsLeft: 32,  totalSpots: 80,  imageSrc: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop&crop=top' },
  { id: 'freefire-kano',      name: 'Free Fire Kano Grand Prix',       game: 'Free Fire',         vertical: 'battle-royale', prize: '₦50,000',  spotsLeft: 70,  totalSpots: 100, imageSrc: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop&crop=bottom' },
  { id: 'apex-br-ng',         name: 'Apex BR Nigeria Championship',    game: 'Apex Legends',      vertical: 'battle-royale', prize: '₦180,000', spotsLeft: 10,  totalSpots: 60,  imageSrc: 'https://images.unsplash.com/photo-1636622433525-127afcd89f88?w=400&h=200&fit=crop&crop=top' },
  { id: 'nba2k-league',       name: 'NBA 2K West Africa League',       game: 'NBA 2K25',          vertical: 'sports',        prize: '₦45,000',  spotsLeft: 6,   totalSpots: 16,  imageSrc: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop' },
  { id: 'f1-mania',           name: 'F1 24 West Africa GP',            game: 'F1 24',             vertical: 'sports',        prize: '₦55,000',  spotsLeft: 18,  totalSpots: 24,  imageSrc: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=200&fit=crop' },
  { id: 'wwe2k-naija',        name: 'WWE 2K Nigeria Championship',     game: 'WWE 2K24',          vertical: 'sports',        prize: '₦40,000',  spotsLeft: 9,   totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=200&fit=crop' },
  { id: 'efootball-league',   name: 'eFootball Africa League S3',      game: 'eFootball 24',      vertical: 'sports',        prize: '₦30,000',  spotsLeft: 24,  totalSpots: 48,  imageSrc: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=200&fit=crop&crop=top' },
  { id: 'tekken-cup',         name: 'Tekken 8 West Africa Cup',        game: 'Tekken 8',          vertical: 'fighting',      prize: '₦80,000',  spotsLeft: 12,  totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop&crop=bottom' },
  { id: 'sf6-lagos',          name: 'Street Fighter 6 Lagos Invitational', game: 'SF6',           vertical: 'fighting',      prize: '₦95,000',  spotsLeft: 5,   totalSpots: 16,  imageSrc: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop&crop=top' },
  { id: 'kof-africa',         name: 'King of Fighters Africa Open',    game: 'KOF XV',            vertical: 'fighting',      prize: '₦50,000',  spotsLeft: 10,  totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop&crop=top' },
  { id: 'beat-battle',        name: 'Beat Battle Lagos',               game: 'Music',             vertical: 'music',         prize: '₦75,000',  spotsLeft: 19,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=200&fit=crop' },
  { id: 'dj-battle-ph',       name: 'DJ Battle Port Harcourt',         game: 'DJ Set',            vertical: 'music',         prize: '₦60,000',  spotsLeft: 14,  totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=200&fit=crop' },
  { id: 'producer-wars',      name: 'Producer Wars West Africa',       game: 'Music Production',  vertical: 'music',         prize: '₦110,000', spotsLeft: 20,  totalSpots: 50,  imageSrc: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=200&fit=crop&crop=top' },
  { id: 'band-clash',         name: 'Band Clash Abuja Edition',        game: 'Live Band',         vertical: 'music',         prize: '₦80,000',  spotsLeft: 8,   totalSpots: 20,  imageSrc: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=200&fit=crop' },
  { id: 'afrobeats-open',     name: 'Afrobeats Producers Open',        game: 'Music Production',  vertical: 'afrobeats',     prize: '₦90,000',  spotsLeft: 8,   totalSpots: 32,  imageSrc: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=200&fit=crop' },
  { id: 'naija-vibes',        name: 'Naija Vibes Beat Competition',    game: 'Beat Making',       vertical: 'afrobeats',     prize: '₦55,000',  spotsLeft: 22,  totalSpots: 50,  imageSrc: 'https://images.unsplash.com/photo-1520869562399-e772f042f422?w=400&h=200&fit=crop' },
  { id: 'afro-mixtape',       name: 'Afro Mixtape Challenge Season 2', game: 'DJ / Mix',          vertical: 'afrobeats',     prize: '₦45,000',  spotsLeft: 35,  totalSpots: 60,  imageSrc: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=200&fit=crop&crop=top' },
  { id: 'ctf-challenge',      name: 'Naija CTF Challenge',             game: 'Cybersecurity',     vertical: 'tech',          prize: '₦150,000', spotsLeft: 64,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop' },
  { id: 'ai-showdown',        name: 'AI Model Showdown Lagos',         game: 'AI / ML',           vertical: 'tech',          prize: '₦200,000', spotsLeft: 40,  totalSpots: 50,  imageSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop' },
  { id: 'open-source-sprint', name: 'Open Source Sprint Africa',       game: 'Open Source',       vertical: 'tech',          prize: '₦80,000',  spotsLeft: 55,  totalSpots: 80,  imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop' },
  { id: 'devops-cup',         name: 'DevOps and Cloud Nigeria Cup',    game: 'Cloud / DevOps',    vertical: 'tech',          prize: '₦120,000', spotsLeft: 30,  totalSpots: 40,  imageSrc: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=200&fit=crop' },
  { id: 'hackathon-lagos',    name: 'KultVibe Hackathon Lagos',        game: 'Coding',            vertical: 'coding',        prize: '₦300,000', spotsLeft: 50,  totalSpots: 80,  imageSrc: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop' },
  { id: 'leetcode-battle',    name: 'LeetCode Battle West Africa',     game: 'Algorithms',        vertical: 'coding',        prize: '₦85,000',  spotsLeft: 42,  totalSpots: 64,  imageSrc: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop' },
  { id: 'web-dev-wars',       name: 'Web Dev Wars UI Sprint',          game: 'Web Dev',           vertical: 'coding',        prize: '₦70,000',  spotsLeft: 28,  totalSpots: 50,  imageSrc: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=200&fit=crop&crop=top' },
  { id: 'mlbb-ng',            name: 'Mobile Legends Nigeria Open',     game: 'Mobile Legends',    vertical: 'moba',          prize: '₦130,000', spotsLeft: 16,  totalSpots: 40,  imageSrc: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?w=400&h=200&fit=crop&crop=top' },
  { id: 'lol-africa',         name: 'League of Legends Africa Rift',   game: 'League of Legends', vertical: 'moba',          prize: '₦180,000', spotsLeft: 20,  totalSpots: 50,  imageSrc: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=200&fit=crop&crop=bottom' },
  { id: 'chess-ng',           name: 'Online Chess Blitz Nigeria',      game: 'Chess',             vertical: 'lifestyle',     prize: '₦30,000',  spotsLeft: 80,  totalSpots: 200, imageSrc: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=200&fit=crop&crop=top' },
  { id: 'trivia-lagos',       name: 'Lagos Trivia Night Championship', game: 'Trivia',            vertical: 'lifestyle',     prize: '₦25,000',  spotsLeft: 60,  totalSpots: 100, imageSrc: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=400&h=200&fit=crop&crop=top' },
  { id: 'stream-wars',        name: 'KultVibe Stream Wars',            game: 'Live Streaming',    vertical: 'streaming',     prize: '₦100,000', spotsLeft: 48,  totalSpots: 60,  imageSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop&crop=top' },
  { id: 'watch-party-cup',    name: 'Watch Party Engagement Cup',      game: 'Streaming',         vertical: 'streaming',     prize: '₦50,000',  spotsLeft: 35,  totalSpots: 50,  imageSrc: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=200&fit=crop&crop=top' },
  { id: 'creator-cup',        name: 'KultVibe Creator Cup',            game: 'Content Creation',  vertical: 'creator',       prize: '₦200,000', spotsLeft: 100, totalSpots: 100, imageSrc: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=200&fit=crop' },
  { id: 'short-film-ng',      name: 'Short Film Creator Sprint',       game: 'Video Production',  vertical: 'creator',       prize: '₦150,000', spotsLeft: 25,  totalSpots: 40,  imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop&crop=top' },
];

function TournamentSkeleton() {
  return (
    <div
      className="rounded-xl overflow-hidden animate-pulse"
      style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="h-[160px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
      <div className="p-3 flex flex-col gap-2.5">
        <div className="h-2.5 rounded w-3/4"   style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="flex items-center justify-between">
          <div className="h-2 rounded w-1/3"   style={{ background: 'rgba(255,255,255,0.05)' }} />
          <div className="h-2 rounded w-1/4"   style={{ background: 'rgba(255,255,255,0.05)' }} />
        </div>
        <div className="h-1 rounded-full"       style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="h-8 rounded-lg mt-0.5" style={{ background: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  );
}

const BATCH = 9;

export default function CompetePage() {
  const [activeVertical, setActiveVertical] = useState('all');
  const [isLoading,      setIsLoading]      = useState(true);
  const [isLoadingMore,  setIsLoadingMore]  = useState(false);
  const [search,         setSearch]         = useState('');
  const [sort, setSort] = useState<'Most prize' | 'Spots available' | 'Alphabetical'>('Most prize');
  const [visibleCount,   setVisibleCount]   = useState(BATCH);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    setVisibleCount(BATCH);
    setIsLoadingMore(false);
  }, [activeVertical, search, sort]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoadingMore && !isLoading) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount(c => c + BATCH);
            setIsLoadingMore(false);
          }, 700);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [isLoadingMore, isLoading]);

  const handleVerticalChange = (id: string) => {
    setActiveVertical(id);
    setSearch('');
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 600);
  };

  const activeMeta = VERTICALS.find(v => v.id === activeVertical)!;

  const filtered = useMemo(() => (
    [...TOURNAMENTS]
      .filter(t => {
        const matchesVertical = activeVertical === 'all' || t.vertical === activeVertical;
        const q = search.trim().toLowerCase();
        return matchesVertical && (!q || t.name.toLowerCase().includes(q) || t.game.toLowerCase().includes(q));
      })
      .sort((a, b) => {
        if (sort === 'Most prize')      return parseInt(b.prize.replace(/\D/g, '')) - parseInt(a.prize.replace(/\D/g, ''));
        if (sort === 'Spots available') return b.spotsLeft - a.spotsLeft;
        return a.name.localeCompare(b.name);
      })
  ), [activeVertical, search, sort]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
      <style>{`
        @keyframes kv-fade-up {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="p-6 flex flex-col gap-8">

        {/* Category rail */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: 'none' }}>
          {VERTICALS.map(v => {
            const isActive = activeVertical === v.id;
            return (
              <button
                key={v.id}
                onClick={() => handleVerticalChange(v.id)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-200"
                style={{
                  color:      isActive ? '#10B981' : 'rgba(255,255,255,0.48)',
                  background: isActive ? 'rgba(16,185,129,0.10)' : 'transparent',
                  border:     isActive ? '1px solid rgba(16,185,129,0.40)' : '1px solid rgba(255,255,255,0.09)',
                  boxShadow:  isActive ? '0 0 18px rgba(16,185,129,0.11)' : 'none',
                }}
                onMouseEnter={e => {
                  if (isActive) return;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.20)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.72)';
                }}
                onMouseLeave={e => {
                  if (isActive) return;
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.09)';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.48)';
                }}
              >
                {v.label}
                <span
                  className="text-[10px] rounded-full px-1.5 py-0.5 leading-none"
                  style={{
                    background: isActive ? 'rgba(16,185,129,0.18)' : 'rgba(255,255,255,0.07)',
                    color:      isActive ? '#10B981' : 'rgba(255,255,255,0.38)',
                  }}
                >
                  {v.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls row */}
        <div className="flex items-center">
          <div className="flex-1">
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)' }}>
              {isLoading ? ' ' : `${filtered.length} tournament${filtered.length !== 1 ? 's' : ''} open`}
            </span>
          </div>

          <div className="flex justify-center flex-1">
            <div className="relative w-96">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <HugeiconsIcon icon={Search01Icon} size={13} color="rgba(255,255,255,0.28)" strokeWidth={1.5} />
              </div>
              <input
                type="text"
                placeholder="Search by name or game..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full rounded-lg pl-9 py-2 text-xs text-white placeholder:text-white/30 outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  paddingRight: search ? 28 : 12,
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'rgba(16,185,129,0.45)')}
                onBlur={e  => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)')}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors text-xs leading-none"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-end">
            <div className="relative flex items-center">
              <select
                value={sort}
                onChange={e => setSort(e.target.value as typeof sort)}
                className="rounded-lg text-xs outline-none cursor-pointer appearance-none"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  color: 'rgba(255,255,255,0.58)',
                  padding: '7px 30px 7px 12px',
                }}
              >
                <option style={{ background: '#0D0D14' }}>Most prize</option>
                <option style={{ background: '#0D0D14' }}>Spots available</option>
                <option style={{ background: '#0D0D14' }}>Alphabetical</option>
              </select>
              <svg
                className="absolute pointer-events-none"
                style={{ right: 9, top: '50%', transform: 'translateY(-50%)' }}
                width="10" height="10" viewBox="0 0 10 10"
                fill="none" stroke="rgba(255,255,255,0.32)" strokeWidth="1.5" strokeLinecap="round"
              >
                <path d="M1.5 3.5 5 7 8.5 3.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tournament grid */}
        {isLoading ? (
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 9 }).map((_, i) => <TournamentSkeleton key={i} />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            >
              <HugeiconsIcon icon={Award01Icon} size={24} color="rgba(255,255,255,0.18)" strokeWidth={1} />
            </div>
            <p className="text-sm font-semibold text-white mb-1">No open tournaments in {activeMeta.label}</p>
            <p className="text-xs text-white/40 mb-5">Check back soon or browse other categories</p>
            <button
              onClick={() => handleVerticalChange('all')}
              className="text-xs font-medium text-emerald-400 px-4 py-2 rounded-md transition-colors"
              style={{ background: 'rgba(16,185,129,0.14)', border: '1px solid rgba(16,185,129,0.28)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(16,185,129,0.24)')}
              onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(16,185,129,0.14)')}
            >
              Browse all
            </button>
          </div>
        ) : (
          <>
            <div
              key={`${activeVertical}-${search}-${sort}`}
              className="grid grid-cols-3 gap-3"
              style={{ animation: 'kv-fade-up 0.28s ease both' }}
            >
              {visible.map(t => (
                <TournamentCard
                  key={t.id}
                  name={t.name}
                  game={t.game}
                  prize={t.prize}
                  spotsLeft={t.spotsLeft}
                  totalSpots={t.totalSpots}
                  imageSrc={t.imageSrc}
                />
              ))}
              {isLoadingMore && Array.from({ length: 3 }).map((_, i) => (
                <TournamentSkeleton key={`sk-${i}`} />
              ))}
            </div>
            {hasMore && !isLoadingMore && <div ref={sentinelRef} className="h-4" />}
          </>
        )}

      </div>
    </>
  );
}
