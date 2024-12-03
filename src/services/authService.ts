import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'
import { AUTH_TOKEN_KEY } from '@/constants/auth-account-constants'
import { IBaseResponse } from '@/interfaces/api-response'

interface LoginResponse {
  token: string
}

interface RegisterResponse {
  roleId: number
  name: string
  lastName: string
  email: string
  password: string
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

export const authRegister = async (credentials: RegisterResponse): Promise<IBaseResponse<RegisterResponse>> => {
  const { roleId, name, lastName, email, password } = credentials
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

export const authLogout = () => sessionStorage.removeItem(AUTH_TOKEN_KEY)
