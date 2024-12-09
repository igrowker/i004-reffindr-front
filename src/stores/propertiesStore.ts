import { create } from 'zustand';

import { Property } from '@/interfaces/types';
import { getProperties, getPropertyById } from '@/services/propertiesService';
import { IBaseResponse } from '@/interfaces/api-response';

interface State {
  propertie: Property;
  properties: Property[];
  getProperties: () => Promise<null>;
  setPropertie: (propertie: Property) => void;
  getPropertyById: (id: string) => Promise<IBaseResponse<Property>>;
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
  getPropertyById: async (id) =>  {
      const resp = await getPropertyById(id);
      if (resp.hasErrors) {
        return resp
      }
      return resp;
  },
  setPropertie: (propertie: Property) => set({ propertie }),
}));
