import { create } from 'zustand';

import { IBaseResponse } from '@/interfaces/api-response';
import { EditUserRequest, User } from '@/interfaces/user';
import { getUserCredentials } from '@/services/userService';
import { updateUserCredentials } from '@/services/userService';

interface State {
  user: User | null;
  isUserDataPending: boolean;
  getActualUser: () => Promise<null>;
  updateUser: (data: EditUserRequest) => Promise<IBaseResponse<User> | null>;
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
  updateUser: async (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(element => {
      if ( element[0] == 'birthDate') {
        formData.append(element[0], "2024-12-06T23:26:08.151Z")
        return;
      }
      formData.append(element[0], element[1] );
    })
    const resp = await updateUserCredentials(formData);
    console.log(resp);
    if (resp.hasErrors) {
      return null;
    }
    set({ user: resp.data });
    return resp;
  },
}));
