export interface LeaderboardPlayer {
  rank: number
  name: string
  city: string
  region: string
  game: string
  vertical: string
  earnings: { week: number; month: number; allTime: number }
  tier: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Obsidian'
  trend: 'up' | 'down' | 'same'
  trendAmount: number
  tournaments: number
  winRate: string
}

export const leaderboardData: LeaderboardPlayer[] = [
  { rank: 1,  name: '@GhostAlpha',    city: 'Lagos',         region: 'nigeria', game: 'COD Mobile',    vertical: 'gaming',    earnings: { week: 45000,  month: 180000, allTime: 450000 }, tier: 'Obsidian', trend: 'same', trendAmount: 0, tournaments: 24, winRate: '68%' },
  { rank: 2,  name: '@ZuluSquad',     city: 'Abuja',         region: 'nigeria', game: 'PUBG Mobile',   vertical: 'gaming',    earnings: { week: 38500,  month: 154000, allTime: 380000 }, tier: 'Diamond',  trend: 'up',   trendAmount: 1, tournaments: 18, winRate: '61%' },
  { rank: 3,  name: '@Kelechi_FC',    city: 'Port Harcourt', region: 'nigeria', game: 'EA FC',         vertical: 'gaming',    earnings: { week: 29000,  month: 116000, allTime: 290000 }, tier: 'Diamond',  trend: 'up',   trendAmount: 2, tournaments: 31, winRate: '55%' },
  { rank: 4,  name: '@AmaGamer',      city: 'Kano',          region: 'nigeria', game: 'Free Fire',     vertical: 'gaming',    earnings: { week: 21500,  month: 86000,  allTime: 215000 }, tier: 'Platinum', trend: 'down', trendAmount: 1, tournaments: 15, winRate: '50%' },
  { rank: 5,  name: '@Shadow_NG',     city: 'Lagos',         region: 'nigeria', game: 'COD Mobile',    vertical: 'gaming',    earnings: { week: 18000,  month: 72000,  allTime: 180000 }, tier: 'Platinum', trend: 'up',   trendAmount: 3, tournaments: 20, winRate: '47%' },
  { rank: 6,  name: '@DrumKingKano',  city: 'Kano',          region: 'nigeria', game: 'Music',         vertical: 'music',     earnings: { week: 15750,  month: 63000,  allTime: 157500 }, tier: 'Gold',     trend: 'up',   trendAmount: 2, tournaments: 12, winRate: '58%' },
  { rank: 7,  name: '@AfroBeatz',     city: 'Lagos',         region: 'nigeria', game: 'Music',         vertical: 'music',     earnings: { week: 14200,  month: 56800,  allTime: 142000 }, tier: 'Gold',     trend: 'down', trendAmount: 2, tournaments: 9,  winRate: '56%' },
  { rank: 8,  name: '@ProCoderLagos', city: 'Lagos',         region: 'nigeria', game: 'Tech & Dev',    vertical: 'tech',      earnings: { week: 12000,  month: 48000,  allTime: 120000 }, tier: 'Gold',     trend: 'up',   trendAmount: 1, tournaments: 7,  winRate: '71%' },
  { rank: 9,  name: '@QueenPlays',    city: 'Lagos',         region: 'nigeria', game: 'Valorant',      vertical: 'gaming',    earnings: { week: 10500,  month: 42000,  allTime: 105000 }, tier: 'Gold',     trend: 'same', trendAmount: 0, tournaments: 14, winRate: '43%' },
  { rank: 10, name: '@NaijaNinja',    city: 'Lagos',         region: 'nigeria', game: 'Mortal Kombat', vertical: 'gaming',    earnings: { week: 9800,   month: 39200,  allTime: 98000  }, tier: 'Silver',   trend: 'up',   trendAmount: 4, tournaments: 11, winRate: '45%' },
  { rank: 11, name: '@LagosLoot',     city: 'Lagos',         region: 'nigeria', game: 'Fortnite',      vertical: 'gaming',    earnings: { week: 8500,   month: 34000,  allTime: 85000  }, tier: 'Silver',   trend: 'down', trendAmount: 1, tournaments: 8,  winRate: '38%' },
  { rank: 12, name: '@AceShooterPH',  city: 'Port Harcourt', region: 'nigeria', game: 'Free Fire',     vertical: 'gaming',    earnings: { week: 7200,   month: 28800,  allTime: 72000  }, tier: 'Silver',   trend: 'up',   trendAmount: 2, tournaments: 6,  winRate: '42%' },
  { rank: 13, name: '@VibeLensLagos', city: 'Lagos',         region: 'nigeria', game: 'Lifestyle',     vertical: 'lifestyle', earnings: { week: 6800,   month: 27200,  allTime: 68000  }, tier: 'Silver',   trend: 'up',   trendAmount: 5, tournaments: 5,  winRate: '60%' },
  { rank: 14, name: '@AbujaCoder',    city: 'Abuja',         region: 'nigeria', game: 'Tech & Dev',    vertical: 'tech',      earnings: { week: 5900,   month: 23600,  allTime: 59000  }, tier: 'Bronze',   trend: 'down', trendAmount: 2, tournaments: 4,  winRate: '50%' },
  { rank: 15, name: '@KanoKing',      city: 'Kano',          region: 'nigeria', game: 'COD Mobile',    vertical: 'gaming',    earnings: { week: 4500,   month: 18000,  allTime: 45000  }, tier: 'Bronze',   trend: 'up',   trendAmount: 1, tournaments: 3,  winRate: '33%' },
]

export const tierColors: Record<string, { bg: string; text: string; border: string }> = {
  Bronze:   { bg: 'rgba(205,127,50,0.15)',  text: '#CD7F32', border: 'rgba(205,127,50,0.3)'  },
  Silver:   { bg: 'rgba(192,192,192,0.15)', text: '#C0C0C0', border: 'rgba(192,192,192,0.3)' },
  Gold:     { bg: 'rgba(240,180,41,0.15)',  text: '#F0B429', border: 'rgba(240,180,41,0.3)'  },
  Platinum: { bg: 'rgba(240,180,41,0.15)',  text: '#F0B429', border: 'rgba(240,180,41,0.3)'  },
  Diamond:  { bg: 'rgba(96,165,250,0.15)',  text: '#60A5FA', border: 'rgba(96,165,250,0.3)'  },
  Obsidian: { bg: 'rgba(167,139,250,0.15)', text: '#A78BFA', border: 'rgba(167,139,250,0.3)' },
}
