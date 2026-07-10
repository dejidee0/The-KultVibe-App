'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import IconBar from './IconBar';
import ChannelPanel from './ChannelPanel';

export default function Sidebar() {
  const pathname = usePathname();
  const iconOnly = pathname === '/community';

  return (
    <aside className="flex h-full flex-shrink-0">
      <IconBar />
      {!iconOnly && <ChannelPanel />}
    </aside>
  );
}
