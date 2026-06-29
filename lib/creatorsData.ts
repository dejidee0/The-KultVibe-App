export interface CreatorData {
  id: string
  name: string
  city: string
  region: string
  vertical: string
  game: string
  followers: string
  followersNum: number
  earnings: string
  bio: string
  verified: boolean
  bannerFrom: string
  bannerTo: string
  socials: number
  tournaments: number
  winRate: string
  tags: string[]
}

export const creatorsData: CreatorData[] = [
  { id: 'ghostalpha',    name: '@GhostAlpha',     city: 'Lagos',         region: 'nigeria', vertical: 'Gaming',          game: 'COD Mobile',  followers: '24.5K', followersNum: 24500, earnings: '₦450,000', bio: 'Pro COD Mobile player. Top 50 Africa. Streaming daily from Lagos.',           verified: true,  bannerFrom: '#1e1b4b', bannerTo: '#312e81', socials: 5, tournaments: 24, winRate: '68%', tags: ['Gaming', 'COD Mobile', 'Lagos']    },
  { id: 'afrobeatz',     name: '@AfroBeatz',      city: 'Lagos',         region: 'nigeria', vertical: 'Music',           game: 'Music',       followers: '18.2K', followersNum: 18200, earnings: '₦142,000', bio: 'Afrobeats producer. Beat battles every week. Lagos studio sessions live.',    verified: true,  bannerFrom: '#1c1917', bannerTo: '#292524', socials: 4, tournaments: 9,  winRate: '56%', tags: ['Music', 'Afrobeats', 'Producer']   },
  { id: 'zulusquad',     name: '@ZuluSquad',      city: 'Abuja',         region: 'nigeria', vertical: 'Gaming',          game: 'PUBG Mobile', followers: '18.1K', followersNum: 18100, earnings: '₦380,000', bio: 'PUBG Mobile squad leader. Abuja based. Daily squad push streams.',           verified: true,  bannerFrom: '#0f172a', bannerTo: '#1e3a5f', socials: 3, tournaments: 18, winRate: '61%', tags: ['Gaming', 'PUBG', 'Squads']         },
  { id: 'procoderlagos', name: '@ProCoderLagos',  city: 'Lagos',         region: 'nigeria', vertical: 'Tech & Dev',      game: 'Tech & Dev',  followers: '9.4K',  followersNum: 9400,  earnings: '₦120,000', bio: 'Full stack dev. CTF competitor. Building in public from Lagos.',             verified: true,  bannerFrom: '#1e3a5f', bannerTo: '#1e40af', socials: 4, tournaments: 7,  winRate: '71%', tags: ['Tech', 'Coding', 'CTF']            },
  { id: 'naijaninja',    name: '@NaijaNinja',     city: 'Lagos',         region: 'nigeria', vertical: 'Gaming',          game: 'Mortal Kombat',followers: '8.2K', followersNum: 8200,  earnings: '₦98,000',  bio: 'MK1 Lagos champion. Fighting game specialist. Daily ranked streams.',        verified: false, bannerFrom: '#450a0a', bannerTo: '#7f1d1d', socials: 2, tournaments: 11, winRate: '45%', tags: ['Gaming', 'Fighting', 'MK1']        },
  { id: 'drumkingkano',  name: '@DrumKingKano',   city: 'Kano',          region: 'nigeria', vertical: 'Music',           game: 'Music',       followers: '7.8K',  followersNum: 7800,  earnings: '₦157,500', bio: 'Beat maker from Kano. Northern Nigeria music culture. Afrobeats fusion.',    verified: false, bannerFrom: '#431407', bannerTo: '#7c2d12', socials: 3, tournaments: 12, winRate: '58%', tags: ['Music', 'Beats', 'Kano']           },
  { id: 'queensplays',   name: '@QueenPlays',     city: 'Lagos',         region: 'nigeria', vertical: 'Gaming',          game: 'Valorant',    followers: '7.1K',  followersNum: 7100,  earnings: '₦105,000', bio: 'Valorant agent specialist. Lagos female gamer. Breaking barriers daily.',    verified: true,  bannerFrom: '#2e1065', bannerTo: '#4c1d95', socials: 4, tournaments: 14, winRate: '43%', tags: ['Gaming', 'Valorant', 'Female']     },
  { id: 'vibeslenslags', name: '@VibeLensLagos',  city: 'Lagos',         region: 'nigeria', vertical: 'Lifestyle',       game: 'Lifestyle',   followers: '6.5K',  followersNum: 6500,  earnings: '₦68,000',  bio: 'Lagos street photographer. Culture documentarian. Visual storyteller.',      verified: false, bannerFrom: '#064e3b', bannerTo: '#065f46', socials: 3, tournaments: 5,  winRate: '60%', tags: ['Lifestyle', 'Photography', 'Culture']},
  { id: 'aceshooterph',  name: '@AceShooterPH',   city: 'Port Harcourt', region: 'nigeria', vertical: 'Gaming',          game: 'Free Fire',   followers: '5.9K',  followersNum: 5900,  earnings: '₦72,000',  bio: 'Free Fire solo grinder. Port Harcourt represent. Diamond push daily.',       verified: false, bannerFrom: '#172554', bannerTo: '#1e3a8a', socials: 2, tournaments: 6,  winRate: '42%', tags: ['Gaming', 'Free Fire', 'PH']        },
  { id: 'abujacoder',    name: '@AbujaCoder',     city: 'Abuja',         region: 'nigeria', vertical: 'Tech & Dev',      game: 'Tech & Dev',  followers: '4.8K',  followersNum: 4800,  earnings: '₦59,000',  bio: 'AI/ML developer. Hackathon competitor. Building the future from Abuja.',     verified: false, bannerFrom: '#0c4a6e', bannerTo: '#075985', socials: 3, tournaments: 4,  winRate: '50%', tags: ['Tech', 'AI', 'Abuja']              },
  { id: 'kanoking',      name: '@KanoKing',       city: 'Kano',          region: 'nigeria', vertical: 'Gaming',          game: 'COD Mobile',  followers: '3.9K',  followersNum: 3900,  earnings: '₦45,000',  bio: 'COD Mobile grinder from Kano. Northern Nigeria gaming scene represent.',      verified: false, bannerFrom: '#1a2e05', bannerTo: '#14532d', socials: 2, tournaments: 3,  winRate: '33%', tags: ['Gaming', 'COD', 'Kano']            },
  { id: 'lagosvibez',    name: '@LagosVibes',     city: 'Lagos',         region: 'nigeria', vertical: 'Streaming',       game: 'Just Chatting',followers: '3.2K', followersNum: 3200,  earnings: '₦28,000',  bio: 'Just chatting, vibing, entertaining. Lagos energy every stream.',            verified: false, bannerFrom: '#4a044e', bannerTo: '#701a75', socials: 3, tournaments: 2,  winRate: '50%', tags: ['Streaming', 'Chat', 'Lagos']       },
]

export const verticalCounts = [
  { vertical: 'Gaming',          count: 6, color: '#A78BFA' },
  { vertical: 'Music',           count: 2, color: '#F472B6' },
  { vertical: 'Tech & Dev',      count: 2, color: '#22D3EE' },
  { vertical: 'Lifestyle',       count: 1, color: '#F0B429' },
  { vertical: 'Streaming',       count: 1, color: '#FF4D6D' },
  { vertical: 'Creator Economy', count: 0, color: '#34D399' },
]
