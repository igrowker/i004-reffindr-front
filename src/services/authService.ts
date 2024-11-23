import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'

interface IBaseResponse<T> {
  data?: T
  errors: string[]
  hasErrors: boolean
  statusCode: number
}
interface LoginResponse {
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
): Promise<{ msg: string }[] | null> => {
  const body = { roleId, name, lastName, email, password }

  try {
    await httpClient.post('/auth/register', body)

    return null
  } catch (error: unknown) {
    const err = error as AxiosError<{ errors: { msg: string }[] }>

    console.log(error)
    if (err.response?.data.errors) {
      return err.response?.data.errors!
    }
    return [{ msg: 'Error desconocido' }]
  }
}
