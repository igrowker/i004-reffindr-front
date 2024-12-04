import { AxiosError } from 'axios';
import { httpClient } from '@/api/axios-config';
import { IBaseResponse } from '@/interfaces/api-response';


interface AdsResponse {
  properties: Array<{
    id: string;
    name: string;
    location: string;
    price: number;
    [key: string]: unknown; 
  }>;
}

export const fetchAds = async (): Promise<IBaseResponse<AdsResponse>> => {
  try {
    const response = await httpClient.get<IBaseResponse<AdsResponse>>('/properties/get-favorites-properties');
    return response.data;
  } catch (error: unknown) {
    const err = error as AxiosError<IBaseResponse<AdsResponse>>;
    if (err.response) {
      return err.response.data;
    }
    return {
      errors: ['No se pudo conectar con el servidor. Por favor, intentelo más tarde.'],
      hasErrors: true,
      statusCode: 500,
    };
  }
};