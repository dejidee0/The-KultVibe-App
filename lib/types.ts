export interface User {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface Stream {
  id: string;
  title: string;
  viewerCount: number;
  isLive: boolean;
  gameCategory: string;
  thumbnailUrl?: string;
}

export interface Tournament {
  id: string;
  name: string;
  game: string;
  status: 'upcoming' | 'active' | 'completed';
  prizePool: string;
  startDate: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  team1: string;
  team2: string;
  score1?: number;
  score2?: number;
  status: 'scheduled' | 'live' | 'completed';
}
