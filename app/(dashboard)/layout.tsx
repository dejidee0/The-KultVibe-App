import React from 'react';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import Topbar from '@/components/layout/Topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-kv-base text-kv-text overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto bg-kv-surface p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
