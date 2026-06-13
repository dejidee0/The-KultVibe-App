'use client';

import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { GamepadIcon, Wallet01Icon } from '@hugeicons/core-free-icons';
import { topNavItems } from './sidebarData';

export default function IconBar() {
  return (
    <div
      className="flex flex-col items-center py-4"
      style={{
        width: 56,
        background: '#0D0D14',
        borderRight: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center justify-center rounded-lg flex-shrink-0"
        style={{ width: 40, height: 40, background: '#10B981' }}
      >
        <HugeiconsIcon icon={GamepadIcon} size={20} color="#fff" strokeWidth={1.5} />
      </div>

      <div className="flex-1" />

      {/* Nav - vertically centred */}
      <nav className="flex flex-col gap-1">
        {topNavItems.map(({ icon, label }) => {
          const isActive = label === 'Home';
          return (
            <div key={label} className="relative group/tip">
              <button
                className="flex items-center justify-center rounded-lg transition-all duration-150"
                style={{
                  width: 40,
                  height: 40,
                  color: isActive ? '#10B981' : 'rgba(255,255,255,0.4)',
                  background: isActive ? 'rgba(16,185,129,0.12)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (isActive) return;
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  if (isActive) return;
                  (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                  (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)';
                }}
              >
                <HugeiconsIcon icon={icon} size={20} color="currentColor" strokeWidth={1.5} />
              </button>
              {/* Tooltip */}
              <div
                className="pointer-events-none absolute left-[48px] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150"
                style={{
                  background: 'rgba(20,20,32,0.95)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  zIndex: 100,
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
      </nav>

      <div className="flex-1" />

      {/* Wallet + avatar pinned at bottom */}
      <div className="flex flex-col items-center gap-3 flex-shrink-0">
        <div style={{ width: 32, borderTop: '1px solid rgba(255,255,255,0.06)' }} />
        <div className="relative group/tip">
          <button
            className="flex items-center justify-center rounded-lg transition-colors"
            style={{ width: 40, height: 40, color: 'rgba(255,255,255,0.4)' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.07)';
              (e.currentTarget as HTMLButtonElement).style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
              (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)';
            }}
          >
            <HugeiconsIcon icon={Wallet01Icon} size={20} color="currentColor" strokeWidth={1.5} />
          </button>
          <div
            className="pointer-events-none absolute left-[48px] top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover/tip:opacity-100 transition-opacity duration-150"
            style={{
              background: 'rgba(20,20,32,0.95)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              zIndex: 100,
            }}
          >
            Wallet
          </div>
        </div>
        <img
          src="https://api.dicebear.com/7.x/adventurer/svg?seed=kultvibe-user&backgroundColor=10B981"
          alt="Your avatar"
          className="rounded-full"
          style={{ width: 32, height: 32 }}
        />
      </div>
    </div>
  );
}
