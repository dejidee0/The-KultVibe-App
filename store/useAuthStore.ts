import { create } from 'zustand';

interface AuthStore {
  isModalOpen: boolean;
  modalView: 'register' | 'login';
  openModal: (view?: 'register' | 'login') => void;
  closeModal: () => void;
  toggleView: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isModalOpen: false,
  modalView: 'register',
  openModal: (view = 'register') => set({ isModalOpen: true, modalView: view }),
  closeModal: () => set({ isModalOpen: false }),
  toggleView: () => set((state) => ({ modalView: state.modalView === 'register' ? 'login' : 'register' })),
}));
