'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { Award01Icon, Search01Icon } from '@hugeicons/core-free-icons';
import TournamentCard from '@/components/ui/TournamentCard';
import { tournamentsData, type TournamentData } from '@/lib/tournamentsData';

type Vertical = { id: string; label: string; count: number };

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
    [...tournamentsData]
      .filter((t: TournamentData) => {
        const matchesVertical = activeVertical === 'all' || t.vertical === activeVertical;
        const q = search.trim().toLowerCase();
        return matchesVertical && (!q || t.name.toLowerCase().includes(q) || t.game.toLowerCase().includes(q));
      })
      .sort((a: TournamentData, b: TournamentData) => {
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
                <Link key={t.id} href={`/compete/${t.id}`} className="block">
                  <TournamentCard
                    name={t.name}
                    game={t.game}
                    prize={t.prize}
                    spotsLeft={t.spotsLeft}
                    totalSpots={t.totalSpots}
                    imageSrc={t.imageSrc}
                  />
                </Link>
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
