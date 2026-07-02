import type { IconSvgElement } from '@hugeicons/react';
import {
  Home01Icon,
  Compass01Icon,
  Award01Icon,
  StarIcon,
  UserGroupIcon,

  GameController02Icon,
  CodeIcon,
  MusicNote01Icon,
  Sun01Icon,
  LiveStreaming01Icon,
} from '@hugeicons/core-free-icons';

export type NavItem = { icon: IconSvgElement; label: string; href: string };

export type Channel = {
  name: string;
  game: string;
  viewers: number;
  avatarColor: string;
  initials: string;
  isLive: boolean;
  streamTitle?: string;
};

export type Category = { id: string; name: string; icon: IconSvgElement };

export const topNavItems: NavItem[] = [
  { icon: Home01Icon,      label: 'Home',      href: '/' },
  { icon: Compass01Icon,   label: 'Discover',  href: '/discover' },
  { icon: Award01Icon,     label: 'Compete',   href: '/compete' },
  { icon: LiveStreaming01Icon, label: 'Streams', href: '/streams' },
  { icon: StarIcon,        label: 'Creators',  href: '/creators' },
  { icon: UserGroupIcon,   label: 'Community', href: '/community' },
];

export const liveChannels: Channel[] = [
  { name: '@GhostAlpha', game: 'COD Mobile', viewers: 1200, avatarColor: '#F0B429', initials: 'GA', isLive: true, streamTitle: 'CODM Lagos Qualifiers — Season 1 Alpha' },
  { name: '@ZuluSquad', game: 'PUBG Mobile', viewers: 940, avatarColor: '#DB2777', initials: 'ZS', isLive: true, streamTitle: 'PUBG Naija Royale — Squad Push' },
  { name: '@QueenPlays', game: 'Valorant', viewers: 892, avatarColor: '#EC4899', initials: 'QP', isLive: true, streamTitle: 'Valorant ACT III Ranked — Radiant or Bust' },
  { name: '@LagosLoot', game: 'Fortnite', viewers: 543, avatarColor: '#0EA5E9', initials: 'LL', isLive: true, streamTitle: 'Fortnite Chapter 5 — Solo Arena Grind' },
  { name: '@AfroBeatz', game: 'Music · Beat Battle', viewers: 612, avatarColor: '#F59E0B', initials: 'AB', isLive: true, streamTitle: 'Beat Battle Lagos — Round 2 Finals' },
  { name: '@AceShooterPH', game: 'Free Fire', viewers: 415, avatarColor: '#DC2626', initials: 'AS', isLive: true, streamTitle: 'Free Fire Clash Squad — Diamond Ranked' },
  { name: '@KelechiFC', game: 'EA FC', viewers: 388, avatarColor: '#F0B429', initials: 'KF', isLive: true, streamTitle: 'EA FC Street League — 1v1 Ranked' },
  { name: '@DrumKingKano', game: 'Music · Afrobeats', viewers: 309, avatarColor: '#F0B429', initials: 'DK', isLive: true, streamTitle: 'Afrobeats Production Session — New EP Beats' },
  { name: '@Shadow_NG', game: 'Free Fire', viewers: 241, avatarColor: '#6366F1', initials: 'SN', isLive: true, streamTitle: 'Free Fire Solo Grind — Diamond Push' },
  { name: '@NaijaNinja', game: 'Mortal Kombat 1', viewers: 187, avatarColor: '#EF4444', initials: 'NN', isLive: true, streamTitle: 'MK1 Ranked Ladder — Road to God of War' },
];

export const followingChannels: Channel[] = [
  { name: '@AmaGamer', game: 'COD Mobile', viewers: 0, avatarColor: '#374151', initials: 'AG', isLive: false },
  { name: '@ProCoderLagos', game: 'Tech · CTF', viewers: 0, avatarColor: '#374151', initials: 'PL', isLive: false },
];

export const categories: Category[] = [
  { id: 'gaming', name: 'Gaming', icon: GameController02Icon },
  { id: 'tech', name: 'Tech & Dev', icon: CodeIcon },
  { id: 'music', name: 'Music', icon: MusicNote01Icon },
  { id: 'lifestyle', name: 'Lifestyle', icon: Sun01Icon },
  { id: 'streaming', name: 'Streaming', icon: LiveStreaming01Icon },
  { id: 'creator', name: 'Creator Economy', icon: StarIcon },
];
