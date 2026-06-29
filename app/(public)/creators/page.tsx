'use client'

import React, { useState, useEffect, useRef, useMemo } from 'react'
import Link from 'next/link'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  StarIcon,
  CheckmarkCircle01Icon,
  GameController02Icon,
  MusicNote01Icon,
  CodeIcon,
  Camera01Icon,
  LiveStreaming01Icon,
  DollarCircleIcon,
} from '@hugeicons/core-free-icons'
import { creatorsData, verticalCounts, type CreatorData } from '@/lib/creatorsData'
import { useAuthStore } from '@/store/useAuthStore'

const VERTICAL_ICONS: Record<string, typeof GameController02Icon> = {
  'Gaming':          GameController02Icon,
  'Music':           MusicNote01Icon,
  'Tech & Dev':      CodeIcon,
  'Lifestyle':       Camera01Icon,
  'Streaming':       LiveStreaming01Icon,
  'Creator Economy': DollarCircleIcon,
}

const SELECT_STYLE = {
  background: '#111118',
  border: '1px solid rgba(255,255,255,0.10)',
  color: 'rgba(255,255,255,0.60)',
  outline: 'none',
}

const BATCH = 8

function CreatorCardSkeleton() {
  return (
    <div
      className="rounded-xl overflow-hidden animate-pulse"
      style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
    >
      <div className="h-[56px]" style={{ background: 'rgba(255,255,255,0.06)' }} />
      <div className="px-4 pb-4">
        <div className="w-10 h-10 rounded-full -mt-5 mb-3" style={{ background: 'rgba(255,255,255,0.10)' }} />
        <div className="h-2.5 rounded w-2/3 mb-1.5" style={{ background: 'rgba(255,255,255,0.07)' }} />
        <div className="h-2 rounded w-1/3 mb-3" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="h-2 rounded w-1/2 mb-4" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="flex justify-between mb-4">
          <div className="h-6 rounded w-1/3" style={{ background: 'rgba(255,255,255,0.05)' }} />
          <div className="h-6 rounded w-1/3" style={{ background: 'rgba(255,255,255,0.05)' }} />
        </div>
        <div className="h-7 rounded-md" style={{ background: 'rgba(255,255,255,0.05)' }} />
      </div>
    </div>
  )
}

function FeaturedCreatorCard({ creator }: { creator: CreatorData }) {
  return (
    <Link href={`/creators/${creator.id}`} className="block">
      <div
        className="rounded-xl overflow-hidden cursor-pointer transition-all group"
        style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(16,185,129,0.30)')}
        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)')}
      >
        <div
          className="h-[80px] relative"
          style={{ background: `linear-gradient(135deg, ${creator.bannerFrom}, ${creator.bannerTo})` }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.20)' }} />
        </div>

        <div className="px-4 pb-4">
          <div className="-mt-6 mb-2 flex items-end justify-between">
            <img
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${creator.name}&backgroundColor=0D0D14`}
              width={48}
              height={48}
              className="rounded-full flex-shrink-0"
              style={{ border: '2px solid #111118' }}
              alt={creator.name}
            />
            {creator.verified && (
              <span className="mb-1">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={16} color="#10B981" strokeWidth={1.5} />
              </span>
            )}
          </div>

          <p className="text-sm font-medium text-white mb-0.5">{creator.name}</p>
          <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.40)' }}>{creator.city}</p>

          <span
            className="text-[10px] px-2 py-1 rounded-md inline-block mb-3"
            style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.50)' }}
          >
            {creator.vertical}
          </span>

          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-xs font-medium text-white">{creator.followers}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>followers</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-medium" style={{ color: '#F0B429' }}>{creator.earnings}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>earned</p>
            </div>
          </div>

          <button
            className="w-full text-xs py-1.5 rounded-md transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.50)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(16,185,129,0.40)'
              ;(e.currentTarget as HTMLButtonElement).style.color = '#10B981'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)'
              ;(e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.50)'
            }}
          >
            Follow
          </button>
        </div>
      </div>
    </Link>
  )
}

function CreatorCard({ creator }: { creator: CreatorData }) {
  return (
    <Link href={`/creators/${creator.id}`} className="block">
      <div
        className="rounded-xl overflow-hidden cursor-pointer transition-all"
        style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(16,185,129,0.25)')}
        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.07)')}
      >
        <div
          className="h-[56px] relative"
          style={{ background: `linear-gradient(135deg, ${creator.bannerFrom}, ${creator.bannerTo})` }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.25)' }} />
        </div>

        <div className="px-3 pb-3">
          <div className="-mt-5 mb-2 flex items-end justify-between">
            <img
              src={`https://api.dicebear.com/7.x/bottts/svg?seed=${creator.name}&backgroundColor=0D0D14`}
              width={40}
              height={40}
              className="rounded-full flex-shrink-0"
              style={{ border: '2px solid #111118' }}
              alt={creator.name}
            />
            {creator.verified && (
              <span className="mb-0.5">
                <HugeiconsIcon icon={CheckmarkCircle01Icon} size={13} color="#10B981" strokeWidth={1.5} />
              </span>
            )}
          </div>

          <p className="text-xs font-medium text-white mb-0.5 truncate">{creator.name}</p>
          <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.40)' }}>{creator.city}</p>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-white">{creator.followers}</span>
            <span className="text-xs font-medium" style={{ color: '#F0B429' }}>{creator.earnings}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function CreatorsPage() {
  const [activeVertical, setActiveVertical] = useState('All')
  const [sort,           setSort]           = useState('Most followers')
  const [city,           setCity]           = useState('all')
  const [visibleCount,   setVisibleCount]   = useState(BATCH)
  const [isLoadingMore,  setIsLoadingMore]  = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)
  const { openModal } = useAuthStore()

  const filteredCreators = useMemo(() => {
    return [...creatorsData]
      .filter(c =>
        (activeVertical === 'All' || c.vertical === activeVertical) &&
        (city === 'all' || c.city === city)
      )
      .sort((a, b) => {
        if (sort === 'Most followers') return b.followersNum - a.followersNum
        if (sort === 'Most earnings')  return parseInt(b.earnings.replace(/\D/g, '')) - parseInt(a.earnings.replace(/\D/g, ''))
        return 0
      })
  }, [activeVertical, city, sort])

  const top4           = useMemo(() => [...creatorsData].sort((a, b) => b.followersNum - a.followersNum).slice(0, 4), [])
  const visibleCreators = filteredCreators.slice(0, visibleCount)
  const hasMore         = visibleCount < filteredCreators.length

  useEffect(() => {
    setVisibleCount(BATCH)
    setIsLoadingMore(false)
  }, [activeVertical, city, sort])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLoadingMore && hasMore) {
          setIsLoadingMore(true)
          setTimeout(() => {
            setVisibleCount(c => c + 4)
            setIsLoadingMore(false)
          }, 800)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [isLoadingMore, hasMore])

  return (
    <div className="p-6 flex flex-col gap-8">

      {/* Header + filters */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-medium text-white mb-1">Creators</h1>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.40)' }}>Discover Africa's top competitive creators</p>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={sort}
            onChange={e => setSort(e.target.value)}
            className="rounded-lg px-3 py-2 text-xs cursor-pointer"
            style={SELECT_STYLE}
          >
            {['Most followers', 'Most earnings', 'Newest'].map(o => (
              <option key={o} style={{ background: '#0D0D14' }}>{o}</option>
            ))}
          </select>
          <select
            value={city}
            onChange={e => setCity(e.target.value)}
            className="rounded-lg px-3 py-2 text-xs cursor-pointer"
            style={SELECT_STYLE}
          >
            {[
              { value: 'all',           label: 'All regions'   },
              { value: 'Lagos',         label: 'Lagos'         },
              { value: 'Abuja',         label: 'Abuja'         },
              { value: 'Port Harcourt', label: 'Port Harcourt' },
              { value: 'Kano',          label: 'Kano'          },
            ].map(o => (
              <option key={o.value} value={o.value} style={{ background: '#0D0D14' }}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Vertical filter pills */}
      <div className="flex items-center gap-2 flex-wrap -mt-4">
        {['All', 'Gaming', 'Music', 'Tech & Dev', 'Lifestyle', 'Streaming', 'Creator Economy'].map(v => {
          const isActive = activeVertical === v
          return (
            <button
              key={v}
              onClick={() => setActiveVertical(v)}
              className="px-4 py-2 rounded-full text-xs font-medium transition-all"
              style={{
                background: isActive ? 'rgba(16,185,129,0.15)' : 'transparent',
                border:     isActive ? '1px solid rgba(16,185,129,0.40)' : '1px solid rgba(255,255,255,0.10)',
                color:      isActive ? '#10B981' : 'rgba(255,255,255,0.50)',
              }}
              onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.20)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.70)' } }}
              onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.10)'; (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.50)' } }}
            >
              {v}
            </button>
          )
        })}
      </div>

      {/* Featured creators */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <HugeiconsIcon icon={StarIcon} size={16} color="#10B981" strokeWidth={1.5} />
          <span className="text-sm font-medium text-white">Featured creators</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {top4.map(creator => (
            <FeaturedCreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
      </div>

      {/* All creators grid */}
      <div>
        <div className="mb-4">
          <span className="text-sm font-medium text-white">{filteredCreators.length} creator{filteredCreators.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {visibleCreators.map(creator => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
          {isLoadingMore && Array.from({ length: 4 }).map((_, i) => (
            <CreatorCardSkeleton key={`sk-${i}`} />
          ))}
        </div>
        {hasMore && !isLoadingMore && <div ref={sentinelRef} className="h-1 mt-4" />}
      </div>

      {/* Vertical breakdown */}
      <div>
        <h3 className="text-sm font-medium text-white mb-4">Browse by vertical</h3>
        <div className="grid grid-cols-6 gap-3">
          {verticalCounts.map(v => {
            const icon = VERTICAL_ICONS[v.vertical] ?? GameController02Icon
            return (
              <button
                key={v.vertical}
                onClick={() => setActiveVertical(v.vertical)}
                className="rounded-xl p-4 flex flex-col items-center gap-2 transition-colors"
                style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)')}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.07)')}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: `${v.color}1A` }}
                >
                  <HugeiconsIcon icon={icon} size={18} color={v.color} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-medium text-white text-center leading-tight">{v.vertical}</span>
                <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>{v.count} creators</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Brand deals CTA banner */}
      <div className="relative rounded-xl overflow-hidden">
        <div
          className="absolute inset-0 rounded-xl"
          style={{ background: '#111118', zIndex: 0 }}
        />
        <div
          className="absolute inset-0 rounded-xl"
          style={{ background: 'linear-gradient(to right, rgba(6,78,59,0.40), rgba(6,78,59,0.15), transparent)', zIndex: 1 }}
        />
        <div
          className="relative p-8 flex items-center justify-between rounded-xl"
          style={{ border: '1px solid rgba(16,185,129,0.20)', zIndex: 2 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-xs text-emerald-400 px-2 py-1 rounded-md"
                style={{ background: 'rgba(16,185,129,0.20)', border: '1px solid rgba(16,185,129,0.40)' }}
              >
                For Brands
              </span>
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Find your next creator partner</h3>
            <p className="text-sm max-w-md" style={{ color: 'rgba(255,255,255,0.50)' }}>
              Connect with Africa's top gaming, music, and lifestyle creators. Run sponsored tournaments, brand activations, and content campaigns on KultVibe.
            </p>
          </div>

          <div className="flex flex-col items-end gap-3 flex-shrink-0 ml-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-center">
                <p className="text-lg font-medium text-white">12K+</p>
                <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.40)' }}>Active creators</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.10)' }} />
              <div className="text-center">
                <p className="text-lg font-medium text-white">6</p>
                <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.40)' }}>Verticals</p>
              </div>
              <div className="w-px h-8" style={{ background: 'rgba(255,255,255,0.10)' }} />
              <div className="text-center">
                <p className="text-lg font-medium text-white">Nigeria</p>
                <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.40)' }}>&amp; all Africa</p>
              </div>
            </div>
            <button
              onClick={() => openModal('register')}
              className="bg-[#10B981] text-white font-medium px-6 py-3 rounded-lg text-sm hover:bg-emerald-400 transition-colors"
            >
              Get started as a brand
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
