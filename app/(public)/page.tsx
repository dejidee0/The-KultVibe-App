import React from 'react';
import { Award01Icon } from '@hugeicons/core-free-icons';
import SectionHeader from '@/components/ui/SectionHeader';
import FeaturedStream from '@/components/stream/FeaturedStream';
import StreamGrid from '@/components/stream/StreamGrid';
import TournamentList from '@/components/tournament/TournamentList';
import LeaderboardStrip from '@/components/leaderboard/LeaderboardStrip';
import StatsBar from '@/components/ui/StatsBar';
import CreatorsGrid from '@/components/stream/CreatorsGrid';
import UpcomingStrip from '@/components/tournament/UpcomingStrip';

export default function Homepage() {
  return (
    <div
      className="flex flex-col"
      style={{ padding: 24, gap: 32, background: '#08080D', minHeight: '100%' }}
    >
      <FeaturedStream />

      <section className="flex flex-col gap-3">
        <SectionHeader badge="LIVE" title="More streams" cta="View all" />
        <StreamGrid />
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeader icon={Award01Icon} title="Open tournaments" cta="All tournaments" />
        <TournamentList />
      </section>

      <section>
        <LeaderboardStrip />
      </section>

      <StatsBar />

      <CreatorsGrid />

      <UpcomingStrip />
    </div>
  );
}
