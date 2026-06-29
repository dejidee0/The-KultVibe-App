'use client';

import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import ChannelRow from '@/components/ui/ChannelRow';
import { liveChannels, followingChannels, categories } from './sidebarData';

export default function ChannelPanel() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div
      className="flex flex-col h-full"
      style={{
        width: 220,
        background: '#0D0D14',
        borderRight: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Live Now - scrolls internally */}
      <p
        className="px-3 pb-2 font-semibold tracking-widest uppercase flex-shrink-0"
        style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', paddingTop: 12 }}
      >
        Live Now
      </p>
      <div className="flex flex-col gap-0.5 px-1 overflow-y-auto no-scrollbar flex-1 min-h-0">
        {liveChannels.map((ch) => (
          <ChannelRow key={ch.name} {...ch} />
        ))}
      </div>

      {/* Following - pinned */}
      <div className="flex-shrink-0">
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '10px 12px' }} />
        <p
          className="px-3 pb-2 font-semibold tracking-widest uppercase"
          style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)' }}
        >
          Following
        </p>
        <div className="flex flex-col gap-0.5 px-1">
          {followingChannels.map((ch) => (
            <ChannelRow key={ch.name} {...ch} />
          ))}
        </div>
      </div>

      {/* Browse - pinned at bottom */}
      <div className="flex-shrink-0">
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '10px 12px' }} />
        <p
          className="uppercase tracking-widest"
          style={{
            fontSize: 10,
            color: 'rgba(255,255,255,0.4)',
            padding: '4px 12px 8px 12px',
            fontWeight: 600,
          }}
        >
          Browse
        </p>
        <div className="flex flex-col gap-0.5 px-1 pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.name;
            return (
              <div
                key={cat.id}
                onClick={() => setActiveCategory((prev) => (prev === cat.name ? null : cat.name))}
                className={`flex items-center gap-[10px] cursor-pointer transition-colors hover:bg-white/5 ${
                  isActive
                    ? 'text-white bg-blue-500/10 rounded-md pl-3'
                    : 'text-white/50 rounded-md pl-3'
                }`}
                style={{ paddingTop: 6, paddingBottom: 6, paddingRight: 12 }}
              >
                <HugeiconsIcon icon={cat.icon} size={20} color="currentColor" strokeWidth={1.5} />
                <span className="font-medium" style={{ fontSize: 13 }}>
                  {cat.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
