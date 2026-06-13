import React from 'react';
import IconBar from './IconBar';
import ChannelPanel from './ChannelPanel';

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-shrink-0">
      <IconBar />
      <ChannelPanel />
    </aside>
  );
}
