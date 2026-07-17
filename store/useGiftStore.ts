import { create } from 'zustand'

interface Gift {
  id: string
  name: string
  emoji: string
  twemojiHex?: string
  price: number
}

interface ActiveGift {
  id: string
  gift: Gift
  sender: string
  timestamp: number
}

interface GiftStore {
  isPickerOpen: boolean
  activeGifts: ActiveGift[]
  openPicker: () => void
  closePicker: () => void
  sendGift: (gift: Gift, sender: string) => void
  removeGift: (id: string) => void
}

export const GIFTS: Gift[] = [
  { id: 'drum-drop',    name: 'Drum Drop',    emoji: '🥁',  price: 500    },
  { id: 'jollof-flame', name: 'Jollof Flame', emoji: '🔥',  price: 1500   },
  { id: 'naija-lion',   name: 'Naija Lion',   emoji: '🦁',  price: 5000   },
  { id: 'afro-crown',   name: 'Afro Crown',   emoji: '👑',  price: 10000  },
  { id: 'lagos-storm',  name: 'Lagos Storm',  emoji: '⚡',  price: 25000  },
  { id: 'diamond-fang', name: 'Diamond Fang', emoji: '💎',  price: 50000  },
  { id: 'pan-africa',   name: 'Pan-Africa',   emoji: '🌍',  price: 100000 },
  { id: 'kult-queen',   name: 'Kult Queen',   emoji: '👸🏾', price: 500000 },
]

export const useGiftStore = create<GiftStore>((set) => ({
  isPickerOpen: false,
  activeGifts: [],
  openPicker: () => set({ isPickerOpen: true }),
  closePicker: () => set({ isPickerOpen: false }),
  sendGift: (gift, sender) => {
    const newGift: ActiveGift = {
      id: `${Date.now()}-${Math.random()}`,
      gift,
      sender,
      timestamp: Date.now(),
    }
    set((state) => ({ activeGifts: [...state.activeGifts, newGift], isPickerOpen: false }))
  },
  removeGift: (id) => set((state) => ({ activeGifts: state.activeGifts.filter((g) => g.id !== id) })),
}))
