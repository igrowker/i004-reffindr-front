import { Box, Text } from '@chakra-ui/react';
import { CardHorizontal } from './CardHorizontal';
import { useAds } from '@/hooks/useAds';

// Define el tipo Ad basado en la estructura real de los datos
interface Ad {
  id: string;
  propertyTitle: string;
  propertyDescription: string;
  price: number;
  location: string;
  features?: string[];
}

export const AnnouncementSection = () => {
  const { ads, loading, error } = useAds();

  if (loading) return <Box>Cargando anuncios...</Box>;

  if (error) return <Box color="red.500">{error}</Box>;

  if (ads.length === 0)
    return <Text textAlign="center">No hay anuncios disponibles en este momento.</Text>;

  return (
    <Box>
      {ads.map((ad: Ad) => (
        <CardHorizontal
          key={ad.id}
          title={ad.propertyTitle}
          price={ad.price}
          location={ad.location}
          badges={ad.features}
          description={ad.propertyDescription}
        />
      ))}
    </Box>
  );
};