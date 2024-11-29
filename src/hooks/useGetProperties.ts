import { AxiosError } from 'axios'

import { getProperties } from '@/services/propertyService'
import { propertiesStore } from '@/stores/propertiesStore'
import { IBaseResponse, Property } from '@/types'

export const useGetProperties = () => {
  const setProperties = propertiesStore((state) => state.setProperties)

  const getAllProperties = async () => {
    try {
      const response = await getProperties()
      console.log('respuesta:', response.data)
      setProperties(response.data)
    } catch (error: unknown) {
      const err = error as AxiosError<IBaseResponse<Property>>

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
  return { getAllProperties }
}
