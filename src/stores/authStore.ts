import { create } from 'zustand';
import { userStore } from './userStore';
import { AUTH_TOKEN_KEY } from '@/constants/auth-account-constants';

interface State {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

export const authStore = create<State>()((set) => ({
  token: null,
  logout: () => {
    set({ token: null });
    sessionStorage.removeItem(AUTH_TOKEN_KEY)
    userStore.getState().clearUser()
    
  },
  setToken: (token: string) => {
    set({ token });
  },
}));
