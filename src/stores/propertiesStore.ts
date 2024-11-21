import { create } from 'zustand'

import { Property } from '@/types'

interface State {
  propertie: Property

  setPropertie: (propertie: Property) => void
}

export const propertiesStore = create<State>((set) => ({
  propertie: {} as Property,

  setPropertie: (propertie: Property) => set({ propertie }),
}))
