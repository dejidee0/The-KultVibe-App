'use client';

import React, { useState } from 'react';

const PILLS = ['All', 'Gaming', 'Tech & Dev', 'Music', 'Lifestyle', 'Streaming', 'Creator Economy'];

export default function CategoryPills() {
  const [active, setActive] = useState('All');

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {PILLS.map((pill) => {
        const isActive = active === pill;
        return (
          <button
            key={pill}
            onClick={() => setActive(pill)}
            className="text-xs font-medium rounded-full border px-3 py-1 transition-all whitespace-nowrap"
            style={{
              background: isActive ? 'rgba(59,130,246,0.15)' : 'rgba(255,255,255,0.04)',
              borderColor: isActive ? 'rgba(59,130,246,0.40)' : 'rgba(255,255,255,0.10)',
              color: isActive ? '#93c5fd' : 'rgba(255,255,255,0.50)',
            }}
          >
            {pill}
          </button>
        );
      })}
    </div>
  );
}
