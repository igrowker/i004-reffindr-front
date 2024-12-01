import { create } from 'zustand'

import { User } from '@/types'
interface State {
  user: User;

  setUser: (user: User) => void
}

export const userStore = create<State>((set) => ({
  user: {} as User,
  setUser: (user: User) => {
    set({ user })
  },
  
}))
