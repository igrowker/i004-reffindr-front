import { create } from 'zustand'

interface State {
  token: string | null
  setToken: (token: string) => void
}

export const authStore = create<State>()((set) => ({
  token: null,
  setToken: (token: string) => {
    set({ token })
  },
}))


