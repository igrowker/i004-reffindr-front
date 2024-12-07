import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'
import { IBaseResponse } from '@/interfaces/api-response'
import { Property } from '@/interfaces/types'
import { InitialFormState } from '@/app/UI/components/MenuAnnouncement/MenuAnnouncement'
import { toCapitalize } from '@/utils/capitalize'

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
export const getPropertyById = async (id: string): Promise<IBaseResponse<Property>> => {
  try {
    const resp = await httpClient.get<IBaseResponse<Property>>(`/properties/get-property/${id}`);
  
    return resp.data
  } 
  catch (error) {
    const err = error as AxiosError<IBaseResponse<Property>>
    return {
      errors: err.response?.data.errors ?? [],
      hasErrors: true,
      statusCode: err.response?.data.statusCode ?? 404,
    }
  }
}
export const createProperty = async (formState: InitialFormState) => {
  const formData = new FormData()


  const formDataEntries = Object.entries(formState)
  
  formDataEntries.forEach((item) => {
    formData.append(toCapitalize(item[0]), `${item[1]}`)
  })
  await httpClient.post('/Properties/PostProperty', formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}
