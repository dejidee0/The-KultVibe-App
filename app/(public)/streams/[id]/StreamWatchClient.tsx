'use client'

import React, { useState, useRef, useCallback, useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  EyeIcon,
  VolumeHighIcon,
  VolumeOffIcon,
  FullScreenIcon,
  SidebarRightIcon,
  GiftIcon,
} from '@hugeicons/core-free-icons'
import { type StreamData, streamsData } from '@/lib/streamsData'
import LiveChat from '@/components/stream/LiveChat'
import GiftAnimation from '@/components/stream/GiftAnimation'
import GiftPicker from '@/components/stream/GiftPicker'
import StreamCard from '@/components/ui/StreamCard'
import SocialIcon from '@/components/ui/SocialIcon'
import { useGiftStore } from '@/store/useGiftStore'

function fmtViewers(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}K` : String(n)
}

function useTimer() {
  const [seconds, setSeconds] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setSeconds(s => s + 1), 1000)
    return () => clearInterval(id)
  }, [])
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return h > 0
    ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    : `${m}:${String(s).padStart(2, '0')}`
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="#10B981" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="6" />
      <path d="M4.5 7l2 2 3-3" />
    </svg>
  )
}

export default function StreamWatchClient({ stream }: { stream: StreamData }) {
  const [isMuted, setIsMuted] = useState(true)
  const [theatreMode, setTheatreMode] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { openPicker } = useGiftStore()
  const timer = useTimer()

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current
    if (!el) return
    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  const related = streamsData.filter(s => s.id !== stream.id).slice(0, 4)

  const goalPct = Math.min(100, (stream.goal.current / stream.goal.target) * 100)

  return (
    <div className="flex h-full overflow-hidden">

      {/* ---- Main column ---- */}
      <div className={`flex flex-col flex-1 overflow-hidden no-scrollbar ${!theatreMode ? 'overflow-y-auto' : ''}`}>

        {/* Video area */}
        <div
          ref={containerRef}
          className={`relative flex-shrink-0 group bg-black ${theatreMode ? 'flex-1' : 'h-[480px]'}`}
        >
          {stream.videoSrc ? (
            <video
              ref={videoRef}
              src={stream.videoSrc}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(135deg, ${stream.gradientFrom}, ${stream.gradientTo})` }}
            />
          )}

          {/* Vignette */}
          <div
            className="absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)' }}
          />

          {/* Top-left: LIVE + timer */}
          <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
            <span className="bg-[#FF4D6D] text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              LIVE
            </span>
            <span
              className="text-xs text-white/80 rounded px-2 py-1"
              style={{ background: 'rgba(0,0,0,0.60)', backdropFilter: 'blur(6px)' }}
            >
              {timer}
            </span>
          </div>

          {/* Top-right: viewer count */}
          <div
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded px-2 py-1"
            style={{ background: 'rgba(0,0,0,0.60)', backdropFilter: 'blur(6px)' }}
          >
            <HugeiconsIcon icon={EyeIcon} size={12} color="rgba(255,255,255,0.65)" strokeWidth={1.5} />
            <span className="text-xs text-white/85">{fmtViewers(stream.viewers)} viewers</span>
          </div>

          {/* Bottom-right controls */}
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1">
            <button
              onClick={() => setIsMuted(m => !m)}
              className="p-2 rounded-lg transition-colors text-white/60 hover:text-white hover:bg-white/10"
            >
              <HugeiconsIcon icon={isMuted ? VolumeOffIcon : VolumeHighIcon} size={16} color="currentColor" strokeWidth={1.5} />
            </button>
            <button
              onClick={openPicker}
              className="p-2 rounded-lg transition-colors text-white/60 hover:text-white hover:bg-white/10"
            >
              <HugeiconsIcon icon={GiftIcon} size={16} color="currentColor" strokeWidth={1.5} />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg transition-colors text-white/60 hover:text-white hover:bg-white/10"
            >
              <HugeiconsIcon icon={FullScreenIcon} size={16} color="currentColor" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setTheatreMode(t => !t)}
              className={`p-2 rounded-lg transition-colors ${theatreMode ? 'text-emerald-400 bg-emerald-500/10' : 'text-white/60 hover:text-white hover:bg-white/10'}`}
            >
              <HugeiconsIcon icon={SidebarRightIcon} size={16} color="currentColor" strokeWidth={1.5} />
            </button>
          </div>

          {/* Theatre mode exit overlay */}
          {theatreMode && (
            <button
              onClick={() => setTheatreMode(false)}
              className="absolute top-3 left-1/2 -translate-x-1/2 z-20 text-xs text-white/60 hover:text-white px-3 py-1 rounded-md transition-colors"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}
            >
              Exit theatre mode
            </button>
          )}

          {/* Gift overlays */}
          <GiftAnimation />
          <GiftPicker />
        </div>

        {!theatreMode && (
          <>
            {/* Streamer info bar */}
            <div
              className="flex items-center justify-between px-5 py-3 flex-shrink-0"
              style={{
                background: 'rgba(13,13,20,0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-3">
                <img
                  src={`https://api.dicebear.com/7.x/bottts/svg?seed=${stream.streamer}&backgroundColor=0D0D14`}
                  width={40}
                  height={40}
                  className="rounded-full flex-shrink-0"
                  alt={stream.streamer}
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-base font-semibold text-white">{stream.streamer}</span>
                    <CheckIcon />
                  </div>
                  <p className="text-xs text-white/40">{stream.followers} followers</p>
                </div>
                <span
                  className="text-xs text-emerald-400 rounded-md ml-1 px-2 py-1"
                  style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.30)' }}
                >
                  {stream.game}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="text-xs text-white/70 rounded-md px-4 py-1.5 transition-colors hover:bg-white/5"
                  style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                >
                  Follow
                </button>
                <button className="text-xs bg-[#10B981] text-white font-medium px-4 py-1.5 rounded-md hover:bg-emerald-400 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* About section */}
            <div
              className="px-5 py-5 flex-shrink-0"
              style={{
                background: '#111118',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-sm font-semibold text-white">About {stream.streamer}</h3>
                <CheckIcon />
                <span className="text-xs text-white/35">· {stream.followers} followers</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">{stream.bio}</p>

              {/* Socials */}
              <div className="flex items-center gap-2 mb-5 flex-wrap">
                {stream.socials.map(social => (
                  <a
                    key={social.platform}
                    href={social.url}
                    className="flex items-center gap-1.5 text-xs text-white/50 hover:text-emerald-400 transition-colors rounded-md px-3 py-1.5"
                    style={{ border: '1px solid rgba(255,255,255,0.09)' }}
                  >
                    <SocialIcon platform={social.platform} />
                    {social.platform}
                  </a>
                ))}
              </div>

              {/* Goal progress */}
              <div
                className="rounded-xl p-4"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs text-white/55">{stream.goal.label}</span>
                  <span className="text-xs font-semibold text-white">
                    {stream.goal.current.toLocaleString()} / {stream.goal.target.toLocaleString()}
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="h-full rounded-full bg-[#10B981] transition-all duration-700"
                    style={{ width: `${goalPct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Related streams */}
            <div
              className="px-5 py-5"
              style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
            >
              <h3 className="text-sm font-semibold text-white mb-3">More like this</h3>
              <div className="grid grid-cols-4 gap-3">
                {related.map(s => (
                  <StreamCard
                    key={s.id}
                    id={s.id}
                    title={s.title}
                    streamer={s.streamer}
                    city={s.city}
                    viewers={s.viewers}
                    game={s.game}
                    tags={s.tags}
                    videoSrc={s.videoSrc}
                    gradientFrom={s.gradientFrom}
                    gradientTo={s.gradientTo}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* ---- Chat sidebar ---- */}
      {!theatreMode && (
        <aside
          className="flex-shrink-0 flex flex-col overflow-hidden"
          style={{ width: 320, borderLeft: '1px solid rgba(255,255,255,0.07)' }}
        >
          <LiveChat />
        </aside>
      )}
    </div>
  )
}
