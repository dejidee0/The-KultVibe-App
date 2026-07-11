import type { IconSvgElement } from '@hugeicons/react'
import {
  GamepadIcon, GunIcon, Target01Icon, FootballIcon,
  MusicNote01Icon, MusicNote02Icon, Fire02Icon,
  LaptopProgrammingIcon, Shield01Icon, Rocket01Icon,
  EarthIcon, Camera01Icon,
  LiveStreaming01Icon, ChartUpIcon,
  StarIcon, Megaphone01Icon,
} from '@hugeicons/core-free-icons'

export interface CommunityMessage {
  id: string
  user: string
  userSeed: string
  text: string
  timestamp: string
  isSystem?: boolean
}

export interface CommunityRoom {
  id: string
  name: string
  icon: IconSvgElement
  description: string
  members: number
  online: number
  messages: CommunityMessage[]
  readOnly?: boolean
}

export interface CommunityVertical {
  id: string
  label: string
  rooms: CommunityRoom[]
}

export const communityData: CommunityVertical[] = [
  {
    id: 'gaming',
    label: 'Gaming',
    rooms: [
      {
        id: 'gaming-general',
        name: 'General',
        icon: GamepadIcon,
        description: 'General gaming talk, all games welcome',
        members: 1240,
        online: 89,
        messages: [
          { id: '1', user: '@GhostAlpha',  userSeed: 'GhostAlpha',  text: 'Who else is grinding ranked today?',                                         timestamp: '2m ago'  },
          { id: '2', user: '@ZuluSquad',   userSeed: 'ZuluSquad',   text: 'Been on PUBG all morning, squad is locked in fr',                            timestamp: '3m ago'  },
          { id: '3', user: '@QueenPlays',  userSeed: 'QueenPlays',  text: 'Valorant servers were acting up earlier, anyone else?',                      timestamp: '5m ago'  },
          { id: '4', user: '@Shadow_NG',   userSeed: 'Shadow_NG',   text: 'nah it was smooth on my end, might be your ISP',                             timestamp: '6m ago'  },
          { id: '5', user: '@KanoKing',    userSeed: 'KanoKing',    text: 'Lagos internet is the real final boss 😭',                                   timestamp: '7m ago'  },
          { id: '6', user: '@NaijaNinja',  userSeed: 'NaijaNinja',  text: 'facts bro hotspot to the rescue every time',                                 timestamp: '8m ago'  },
          { id: '7', user: '@LagosLoot',   userSeed: 'LagosLoot',   text: 'Anyone entering the CODM cup this week?',                                    timestamp: '10m ago' },
          { id: '8', user: '@GhostAlpha',  userSeed: 'GhostAlpha',  text: 'Already registered, see you in the finals 👀',                               timestamp: '11m ago' },
        ],
      },
      {
        id: 'gaming-codm',
        name: 'COD Mobile',
        icon: GunIcon,
        description: 'COD Mobile tips, loadouts, tournament talk',
        members: 856,
        online: 62,
        messages: [
          { id: '1', user: '@GhostAlpha',    userSeed: 'GhostAlpha',    text: 'Best loadout for ranked right now is HBRa3 with extended mag trust me', timestamp: '1m ago'  },
          { id: '2', user: '@Shadow_NG',     userSeed: 'Shadow_NG',     text: 'I been running Fennec for close range, different vibe',                 timestamp: '4m ago'  },
          { id: '3', user: '@KanoKing',      userSeed: 'KanoKing',      text: 'What perks are you guys running?',                                      timestamp: '6m ago'  },
          { id: '4', user: '@GhostAlpha',    userSeed: 'GhostAlpha',    text: 'Lightweight + Hardline + Dead Silence. no debate',                      timestamp: '7m ago'  },
          { id: '5', user: '@AceShooterPH',  userSeed: 'AceShooterPH',  text: 'Lagos Arena CODM Cup registration closes tomorrow btw',                 timestamp: '9m ago'  },
          { id: '6', user: '@LagosLoot',     userSeed: 'LagosLoot',     text: 'just registered, 26 spots left',                                        timestamp: '11m ago' },
        ],
      },
      {
        id: 'gaming-pubg',
        name: 'PUBG Mobile',
        icon: Target01Icon,
        description: 'PUBG Mobile squads, strategies, tournaments',
        members: 634,
        online: 41,
        messages: [
          { id: '1', user: '@ZuluSquad',    userSeed: 'ZuluSquad',    text: 'Erangel or Miramar for ranked? be honest',                          timestamp: '2m ago' },
          { id: '2', user: '@AceShooterPH', userSeed: 'AceShooterPH', text: 'Erangel always, Miramar is punishment',                             timestamp: '3m ago' },
          { id: '3', user: '@LagosLoot',    userSeed: 'LagosLoot',    text: 'Sanhok for the action tbh',                                         timestamp: '5m ago' },
          { id: '4', user: '@ZuluSquad',    userSeed: 'ZuluSquad',    text: 'squad push strats dropping this week on my stream, stay tuned',     timestamp: '8m ago' },
        ],
      },
      {
        id: 'gaming-eafc',
        name: 'EA FC / Sports',
        icon: FootballIcon,
        description: 'EA FC, FIFA, sports gaming community',
        members: 445,
        online: 28,
        messages: [
          { id: '1', user: '@Kelechi_FC', userSeed: 'Kelechi_FC', text: "EA FC Street League semi finals tomorrow — who's watching?", timestamp: '5m ago' },
          { id: '2', user: '@GhostAlpha', userSeed: 'GhostAlpha', text: 'tuning in after my CODM set',                                 timestamp: '6m ago' },
          { id: '3', user: '@Shadow_NG',  userSeed: 'Shadow_NG',  text: 'Kelechi is too cold on this game man',                        timestamp: '8m ago' },
        ],
      },
    ],
  },
  {
    id: 'music',
    label: 'Music',
    rooms: [
      {
        id: 'music-general',
        name: 'General',
        icon: MusicNote01Icon,
        description: 'Music talk, Afrobeats, beats, collabs',
        members: 589,
        online: 34,
        messages: [
          { id: '1', user: '@AfroBeatz',    userSeed: 'AfroBeatz',    text: 'Beat Battle Lagos round 2 was 🔥🔥🔥 congrats to everyone who participated', timestamp: '3m ago'  },
          { id: '2', user: '@DrumKingKano', userSeed: 'DrumKingKano', text: 'Kano producers need to represent more, we got talent up north',             timestamp: '5m ago'  },
          { id: '3', user: '@AfroBeatz',    userSeed: 'AfroBeatz',    text: 'facts, the variety this season has been mad',                               timestamp: '7m ago'  },
          { id: '4', user: '@LagosVibes',   userSeed: 'LagosVibes',   text: 'Anyone doing collabs? Looking for vocalists',                               timestamp: '10m ago' },
        ],
      },
      {
        id: 'music-production',
        name: 'Production',
        icon: MusicNote02Icon,
        description: 'Beats, production tips, DAW talk',
        members: 312,
        online: 19,
        messages: [
          { id: '1', user: '@DrumKingKano', userSeed: 'DrumKingKano', text: 'FL Studio vs Ableton for Afrobeats production, go',         timestamp: '2m ago' },
          { id: '2', user: '@AfroBeatz',    userSeed: 'AfroBeatz',    text: 'FL Studio no contest, the piano roll is built different',   timestamp: '4m ago' },
          { id: '3', user: '@DrumKingKano', userSeed: 'DrumKingKano', text: 'exactly, Ableton is for the live performance crowd',        timestamp: '6m ago' },
        ],
      },
      {
        id: 'music-battles',
        name: 'Beat Battles',
        icon: Fire02Icon,
        description: 'Beat battle announcements, results, discussions',
        members: 198,
        online: 12,
        messages: [
          { id: '1', user: '@AfroBeatz',    userSeed: 'AfroBeatz',    text: 'Next beat battle theme is MIDNIGHT LAGOS, get your samples ready', timestamp: '1m ago' },
          { id: '2', user: '@DrumKingKano', userSeed: 'DrumKingKano', text: 'already cooking something 👀',                                     timestamp: '3m ago' },
        ],
      },
    ],
  },
  {
    id: 'tech',
    label: 'Tech & Dev',
    rooms: [
      {
        id: 'tech-general',
        name: 'General',
        icon: LaptopProgrammingIcon,
        description: 'Tech talk, dev discussions, industry news',
        members: 423,
        online: 31,
        messages: [
          { id: '1', user: '@ProCoderLagos', userSeed: 'ProCoderLagos', text: 'Anyone watching the AI space rn? things are moving fast',          timestamp: '2m ago' },
          { id: '2', user: '@AbujaCoder',    userSeed: 'AbujaCoder',    text: 'Building with Claude API currently, the tool use feature is crazy', timestamp: '4m ago' },
          { id: '3', user: '@ProCoderLagos', userSeed: 'ProCoderLagos', text: 'facts, shipped a whole product in a week using it',                 timestamp: '5m ago' },
          { id: '4', user: '@AbujaCoder',    userSeed: 'AbujaCoder',    text: 'Nigerian devs are sleeping on AI tools man',                       timestamp: '7m ago' },
        ],
      },
      {
        id: 'tech-ctf',
        name: 'CTF & Hacking',
        icon: Shield01Icon,
        description: 'CTF challenges, ethical hacking, security',
        members: 234,
        online: 18,
        messages: [
          { id: '1', user: '@ProCoderLagos', userSeed: 'ProCoderLagos', text: 'Naija CTF Challenge is open, 64 spots, free entry',       timestamp: '5m ago' },
          { id: '2', user: '@AbujaCoder',    userSeed: 'AbujaCoder',    text: "what's the difficulty level this time?",                  timestamp: '7m ago' },
          { id: '3', user: '@ProCoderLagos', userSeed: 'ProCoderLagos', text: 'beginner to intermediate, good for practice',             timestamp: '8m ago' },
        ],
      },
      {
        id: 'tech-hackathons',
        name: 'Hackathons',
        icon: Rocket01Icon,
        description: 'Hackathon teams, ideas, collaboration',
        members: 178,
        online: 14,
        messages: [
          { id: '1', user: '@AbujaCoder',    userSeed: 'AbujaCoder',    text: 'KultVibe Hackathon Lagos — anyone need a backend dev on their team?', timestamp: '3m ago' },
          { id: '2', user: '@ProCoderLagos', userSeed: 'ProCoderLagos', text: 'DM me, building a fintech solution, need help',                       timestamp: '5m ago' },
        ],
      },
    ],
  },
  {
    id: 'lifestyle',
    label: 'Lifestyle',
    rooms: [
      {
        id: 'lifestyle-general',
        name: 'General',
        icon: EarthIcon,
        description: 'Lagos life, culture, vibes, everything',
        members: 312,
        online: 22,
        messages: [
          { id: '1', user: '@VibeLensLagos', userSeed: 'VibeLensLagos', text: 'Lagos traffic is a different kind of suffering today 😭', timestamp: '4m ago' },
          { id: '2', user: '@LagosVibes',    userSeed: 'LagosVibes',    text: 'Third Mainland or Lekki? pick your pain',                 timestamp: '5m ago' },
          { id: '3', user: '@VibeLensLagos', userSeed: 'VibeLensLagos', text: 'both are suffering in their own way lmao',                timestamp: '6m ago' },
        ],
      },
      {
        id: 'lifestyle-photography',
        name: 'Photography',
        icon: Camera01Icon,
        description: 'Photography tips, Lagos shoots, gear talk',
        members: 189,
        online: 11,
        messages: [
          { id: '1', user: '@VibeLensLagos', userSeed: 'VibeLensLagos', text: 'Golden hour in Lagos is unmatched, shot this yesterday', timestamp: '8m ago'  },
          { id: '2', user: '@LagosVibes',    userSeed: 'LagosVibes',    text: 'what camera are you using?',                             timestamp: '9m ago'  },
          { id: '3', user: '@VibeLensLagos', userSeed: 'VibeLensLagos', text: 'Sony A7IV, game changer for street photography',         timestamp: '10m ago' },
        ],
      },
    ],
  },
  {
    id: 'streaming',
    label: 'Streaming',
    rooms: [
      {
        id: 'streaming-general',
        name: 'General',
        icon: LiveStreaming01Icon,
        description: 'Streaming tips, growth, equipment talk',
        members: 267,
        online: 19,
        messages: [
          { id: '1', user: '@AfroBeatz',  userSeed: 'AfroBeatz',  text: 'Best OBS settings for low bandwidth streaming in Nigeria?',              timestamp: '3m ago' },
          { id: '2', user: '@GhostAlpha', userSeed: 'GhostAlpha', text: '720p 30fps with CBR at 2500 bitrate works for me on MTN',                timestamp: '5m ago' },
          { id: '3', user: '@AfroBeatz',  userSeed: 'AfroBeatz',  text: 'gonna try that, been struggling with 1080p drops',                      timestamp: '6m ago' },
          { id: '4', user: '@ZuluSquad',  userSeed: 'ZuluSquad',  text: 'also try Ethernet over WiFi if you can, night and day difference',      timestamp: '8m ago' },
        ],
      },
      {
        id: 'streaming-growth',
        name: 'Growth & Tips',
        icon: ChartUpIcon,
        description: 'How to grow your audience on KultVibe',
        members: 198,
        online: 15,
        messages: [
          { id: '1', user: '@GhostAlpha', userSeed: 'GhostAlpha', text: 'consistency is the cheat code fr, stream same time every day', timestamp: '6m ago' },
          { id: '2', user: '@QueenPlays', userSeed: 'QueenPlays', text: 'and engage with chat even when you have 5 viewers',             timestamp: '8m ago' },
          { id: '3', user: '@GhostAlpha', userSeed: 'GhostAlpha', text: 'exactly, those 5 become your first 500',                       timestamp: '9m ago' },
        ],
      },
    ],
  },
  {
    id: 'creator',
    label: 'Creator Economy',
    rooms: [
      {
        id: 'creator-general',
        name: 'General',
        icon: StarIcon,
        description: 'Creator economy, brand deals, monetisation',
        members: 156,
        online: 9,
        messages: [
          { id: '1', user: '@AfroBeatz',     userSeed: 'AfroBeatz',     text: 'Anyone landed a brand deal through KultVibe yet?',                                timestamp: '5m ago' },
          { id: '2', user: '@GhostAlpha',    userSeed: 'GhostAlpha',    text: 'Not yet but the media kit feature is going to change things',                    timestamp: '7m ago' },
          { id: '3', user: '@ProCoderLagos', userSeed: 'ProCoderLagos', text: "brands need to see the audience data first, once that's live it'll pop off",     timestamp: '9m ago' },
        ],
      },
      {
        id: 'creator-announcements',
        name: 'Announcements',
        icon: Megaphone01Icon,
        description: 'Official KultVibe announcements',
        members: 1240,
        online: 89,
        readOnly: true,
        messages: [
          { id: '1', user: 'KultVibe', userSeed: 'KultVibe', text: '🎉 Season 1 Alpha launches in 6 days. Get ready to compete.',                    timestamp: '1 hr ago',  isSystem: true },
          { id: '2', user: 'KultVibe', userSeed: 'KultVibe', text: '🏆 Lagos Arena — CODM Cup now open. ₦100,000 prize pool. Register now.',         timestamp: '3 hrs ago', isSystem: true },
          { id: '3', user: 'KultVibe', userSeed: 'KultVibe', text: '👑 @GhostAlpha is now ranked #1 on the Nigeria leaderboard.',                    timestamp: '5 hrs ago', isSystem: true },
          { id: '4', user: 'KultVibe', userSeed: 'KultVibe', text: '🎵 Beat Battle Lagos Round 2 Finals happening this weekend. Watch live.',         timestamp: '8 hrs ago', isSystem: true },
        ],
      },
    ],
  },
]
