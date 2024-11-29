import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'
import { SESSION_STORAGE_AUTH_TOKEN } from '@/constants/auth-constants'
import { IBaseResponse } from '@/types'

interface LoginResponse {
  token: string
}

interface RegisterResponse {
  email: string
  token: string
}

export const authLogin = async (email: string, password: string): Promise<IBaseResponse<LoginResponse>> => {
  const body = { email, password }

  try {
    const response = await httpClient.post<IBaseResponse<LoginResponse>>('/auth/login', body)
    return response.data
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<LoginResponse>>
    if (err.response) {
      return err.response.data
    }
    return {
      errors: ['No se pudo conectar con el servidor. Por favor, intentelo más tarde.'],
      hasErrors: true,
      statusCode: 500,
    }
  }
}

export const authRegister = async (
  roleId: number,
  name: string,
  lastName: string,
  email: string,
  password: string
): Promise<IBaseResponse<RegisterResponse>> => {
  const body = { roleId, name, lastName, email, password }

  try {
    const response = await httpClient.post('/auth/register', body)
    return response.data
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<RegisterResponse>>
    if (err.response) {
      return err.response.data
    }
    return {
      errors: ['No se pudo conectar con el servidor. Por favor, intentelo más tarde.'],
      hasErrors: true,
      statusCode: 500,
    }
  }
}

export const authLogout = () => sessionStorage.removeItem(SESSION_STORAGE_AUTH_TOKEN)
