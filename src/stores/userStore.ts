import { create } from 'zustand'

import { IBaseResponse } from '@/interfaces/api-response'
import { User } from '@/interfaces/user'
import { getUserCredentials } from '@/services/userService'
import { updateUserCredentials } from '@/services/userService'

interface State {
  user: User

  getActualUser: () => Promise<null>
  updateUser: (data: User) => Promise<IBaseResponse<User | undefined>>
}

export const userStore = create<State>((set) => ({
  user: {} as User,

  getActualUser: async () => {
    const resp = await getUserCredentials()
    if (resp.hasErrors) {
      return null
    }
    set({ user: resp.data })
    return null
  },
  updateUser: async (data: User) => {
    const resp = await updateUserCredentials(data)
    if (!resp.hasErrors) {
      set({ user: resp.data })
    }
    return resp
  },
}))
