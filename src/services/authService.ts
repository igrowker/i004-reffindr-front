import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'

export const authLogin = async (email: string, password: string): Promise<string> => {
  const body = { email, password }

  try {
    const response = await httpClient.post('/auth/login', body)
    return response.data.token
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message)
    } else if (error.request) {
      throw new Error('No se pudo conectar con el servidor. Por favor, intente más tarde.')
    } else {
      throw new Error(`Error en la solicitud: ${error.message}`)
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
    // if (err.response) {
    //   throw new Error(err.response.data.error))
    // } else if (err.request) {
    //   throw new Error('No se pudo conectar con el servidor. Por favor, inténtelo más tarde.')
    // } else {
    //   throw new Error(`Error en la solicitud: ${err.message}`)
    // }
  }
}
