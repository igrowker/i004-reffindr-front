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
