import { create } from 'zustand'

import { Property } from '@/types'

interface State {
  properties: Property[]

  setProperties: (propertie: Property[]) => void
}

export const propertiesStore = create<State>((set) => ({
  properties: [],

  setProperties: (properties: Property[]) => set({ properties }),
}))
