import { AxiosError } from 'axios'

import { httpClient } from '@/api/axios-config'
import { IBaseResponse } from '@/interfaces/api-response'
import { Property } from '@/interfaces/types'

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

export const createProperty = async (): Promise<IBaseResponse<Property>> => {
  const sendPropertyToBFF = async () => {
    // Crear un objeto FormData
    const formData = new FormData()

    // Agregar las propiedades al FormData
    formData.append('CountryId', '1')
    formData.append('StateId', '2')
    formData.append('Title', 'Hermosa propiedad en venta')
    formData.append('Address', 'Calle Falsa 123')
    formData.append('Environments', '5')
    formData.append('Bathrooms', '3')
    formData.append('Bedrooms', '4')
    formData.append('Seniority', '10')
    formData.append('Water', 'true')
    formData.append('Gas', 'true')
    formData.append('Surveillance', 'false')
    formData.append('Electricity', 'true')
    formData.append('Internet', 'true')
    formData.append('Pool', 'false')
    formData.append('Garage', 'true')
    formData.append('Pets', 'true')
    formData.append('Grill', 'false')
    formData.append('Elevator', 'false')
    formData.append('Terrace', 'true')
    formData.append('Description', 'Una descripción detallada de la propiedad')
    formData.append('OwnerEmail', 'owner@example.com')
    formData.append('Price', '150000')

    // Agregar imágenes seleccionadas por el usuario
    const selectedFiles = (document.getElementById('fileInput') as HTMLInputElement).files
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('Images', selectedFiles[i]) // Agregar cada archivo
      }
    }

    // Agregar el objeto RequirementPostRequestDto como JSON
    const requirementDto = {
      propertyType: 'Residential',
      minPrice: '100000',
      maxPrice: '200000',
    }
    formData.append('RequirementPostRequestDto', JSON.stringify(requirementDto))

    try {
      const response = await httpClient.post<IBaseResponse<Property>>('/properties/create-property', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response.data
    } catch (error: unknown) {
      const err = error as AxiosError<IBaseResponse<Property>>
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

  return await sendPropertyToBFF()
}
