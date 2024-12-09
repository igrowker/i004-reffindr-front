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
  
  formDataEntries.forEach(([key, value]) => {
    if (key === 'images' ) {
      Array.from(value).forEach((file) => {
        formData.append(`${toCapitalize(key)}`, file as Blob);
      });
      return;
    }
    formData.append(toCapitalize(key), value)
  })
  await httpClient.post('/properties/create-property' , formData);
}
