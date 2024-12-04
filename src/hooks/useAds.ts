import { useState, useEffect } from 'react';
import { fetchAds } from '@/services/adsService';
import { IBaseResponse } from '@/interfaces/api-response';

interface Ad {
  id: string;
  name: string;
  location: string;
  price: number;
  [key: string]: unknown; 
}

export const useAds = () => {
  const [ads, setAds] = useState<Ad[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAds = async () => {
      setLoading(true); 
      setError(null); 
      try {
        const response: IBaseResponse<{ properties: Ad[] }> = await fetchAds();

        if (response.hasErrors) {
          setError(response.errors?.join(', ') || 'Error desconocido');
        } else {

          setAds(response.data?.properties || []);
        }
      } catch (err) {
        setError('No se pudo conectar con el servidor. Por favor, inténtelo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    getAds();
  }, []);

  return { ads, loading, error };
};