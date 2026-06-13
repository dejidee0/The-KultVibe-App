import { create } from 'zustand'

interface Gift {
  id: string
  name: string
  emoji: string
  twemojiHex: string
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
  { id: 'fire',    name: 'Fire',    emoji: '🔥', twemojiHex: '1f525', price: 500 },
  { id: 'crown',   name: 'Crown',   emoji: '👑', twemojiHex: '1f451', price: 1000 },
  { id: 'diamond', name: 'Diamond', emoji: '💎', twemojiHex: '1f48e', price: 2500 },
  { id: 'rocket',  name: 'Rocket',  emoji: '🚀', twemojiHex: '1f680', price: 5000 },
  { id: 'trophy',  name: 'Trophy',  emoji: '🏆', twemojiHex: '1f3c6', price: 10000 },
  { id: 'lion',    name: 'Lion',    emoji: '🦁', twemojiHex: '1f981', price: 25000 },
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
