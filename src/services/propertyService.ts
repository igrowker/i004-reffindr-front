import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'
import { IBaseResponse } from '@/types'

interface PropertyQueryParams {
  CountryId?: number
  StateId?: number
  PriceMin?: number
  PriceMax?: number
  IsWorking?: boolean
  HasWarranty?: boolean
  RangeSalaryMin?: number
  RangeSalaryMax?: number
  Title?: string
}

export const getProperties = async (params?: PropertyQueryParams) => {
  try {
    const response = await httpClient.get('/properties/get-properties', { params })
    console.log('response', response)
    return response
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<void>>
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
