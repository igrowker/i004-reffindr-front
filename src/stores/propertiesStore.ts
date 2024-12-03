import { create } from 'zustand'

import { Property } from '@/interfaces/types'
import { getProperties } from '@/services/propertiesService';

interface State {
  propertie: Property;
  properties: Property[];
  getProperties: () => Promise<null>
  setPropertie: (propertie: Property) => void
}

export const usePropertiesStore = create<State>((set) => ({
  propertie: {} as Property,
  properties: [],
  getProperties: async() => {
    const resp = await getProperties();
    console.log(resp)
    if ( resp.hasErrors ) {
      return null;
    }  
    set({properties: resp.data});
    return null;
    
  },
  setPropertie: (propertie: Property) => set({ propertie }),
}))
