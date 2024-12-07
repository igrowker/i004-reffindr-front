import { create } from 'zustand';

import { Property } from '@/interfaces/types';
import { getProperties } from '@/services/propertiesService';

interface State {
  propertie: Property;
  properties: Property[];
  getProperties: () => Promise<null>;
  setPropertie: (propertie: Property) => void;
  isGettingProperties: boolean;
}

export const usePropertiesStore = create<State>((set) => ({
  propertie: {} as Property,
  properties: [],
  isGettingProperties: false,
  getProperties: async () => {
    set({ isGettingProperties: true });
    const resp = await getProperties();
    if (resp.hasErrors) {
      set({ isGettingProperties: false });

      return null;
    }
    set({ properties: resp.data, isGettingProperties: false });
    return null;
  },
  setPropertie: (propertie: Property) => set({ propertie }),
}));
