import { AxiosError } from 'axios';

import { httpClient } from '@/api/axios-config';

export const createApplication = async (propertyId: number) => {
  const body = { propertyId };
  try {
    const response = await httpClient.post('/application/create', body);
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError;
    if (err.response?.data) {
      return err.response?.data;
    }
    return {
      hasErrors: true,
      errors: ['Error interno del servidor'],
      statusCode: 500,
    };
  }
};


export const getApplications = async () => {
  


}
