import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'
import { IBaseResponse } from '@/interfaces/api-response'
import { Property } from '@/interfaces/types'
import { InitialFormState } from '@/app/UI/components/MenuAnnouncement/MenuAnnouncement'

export const getProperties = async (): Promise<IBaseResponse<Property[]>> => {
  try {
    const response = await httpClient.get<IBaseResponse<Property[]>>('/properties/get-properties')
    return response.data
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<Property[]>>
    if (err.response?.data) {
      return err.response?.data
    }

    return {
      hasErrors: true,
      errors: ['Error interno del servidor'],
      statusCode: 500,
    }
  }
}

export const createProperty = async (formState: InitialFormState) => {
  // Crear un objeto FormData
  const formData = new FormData()

  // Agregar las propiedades al FormData

  const FormData2 = Object.entries(formState)

  FormData2.forEach((item) => {
    formData.append(item[0], item[1].toString())
  })

  console.log(FormData2)
}
