import { create } from 'zustand';

import { IBaseResponse } from '@/interfaces/api-response';
import { EditUserRequest, User } from '@/interfaces/user';
import { getUserCredentials } from '@/services/userService';
import { updateUserCredentials } from '@/services/userService';
import moment from 'moment';

interface State {
  user: User | null;
  isUserDataPending: boolean;
  getActualUser: () => Promise<null>;
  updateUser: (data: EditUserRequest) => Promise<IBaseResponse<User> | null>;
  clearUser: () => void;
}

export const userStore = create<State>((set) => ({
  user: null,
  isUserDataPending: false,
  getActualUser: async () => {
    set({ isUserDataPending: true });
    const resp = await getUserCredentials();
    if (resp.hasErrors) {
      set({ isUserDataPending: false });

      return null;
    }
    set({ user: resp.data, isUserDataPending: false });
    return null;
  },
  clearUser: () => {
    set({user: null})
  },
  updateUser: async (data) => {
    const formData = new FormData();
    console.log(data.profileImage)
    Object.entries(data).forEach(element => {
      if ( element[0] == 'birthDate') {
        formData.append(element[0], moment(element[1]).format("yyyy-MM-DD") + 'T23:26:08.151Z')
        return;
      }
     
      formData.append(element[0], element[1] );
    })
    
    const resp = await updateUserCredentials(formData);
    if (resp.hasErrors) {
      return null;
    }
    set({ user: resp.data });
    return resp;
  },
}));
