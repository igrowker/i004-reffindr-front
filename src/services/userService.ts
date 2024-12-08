import { AxiosError } from 'axios';

import { httpClient } from '@/api/axios-config';
import { IBaseResponse } from '@/interfaces/api-response';
import { Property } from '@/interfaces/types';
import {
  /* EditUserRequest, */
  User,
} from '@/interfaces/user';

export const getUserCredentials = async (): Promise<IBaseResponse<User>> => {
  try {
    const response = await httpClient.get<IBaseResponse<User>>('/users/profile');
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<User>>;
    if (err.response?.data) {
      return err.response?.data;
    }

    return {
      hasErrors: true,
      errors: ['Error interno del servidor'],
      statusCode: 500,
    };
  }
};

export const updateUserCredentials = async (data: FormData): Promise<IBaseResponse<User>> => {
  try {
    const response = await httpClient.put<IBaseResponse<User>>('/users/profile/update', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<User>>;
    if (err.response?.data) {
      return err.response?.data;
    }

    return {
      hasErrors: true,
      errors: ['Error interno del servidor'],
      statusCode: 500,
    };
  }
};

export const getProperiestUser = async (): Promise<IBaseResponse<Property[]>> => {
  try {
    const response = await httpClient.get<IBaseResponse<Property[]>>('/users/get-properties');
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<Property[]>>;
    if (err.response?.data) {
      return err.response?.data;
    }

    return {
      hasErrors: true,
      errors: ['Error interno del servidor'],
      statusCode: 500,
    };
  }
};
