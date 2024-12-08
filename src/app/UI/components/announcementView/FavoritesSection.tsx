import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Property } from '@/interfaces/types';
import { getProperiestUser } from '@/services/userService';

import { CardHorizontal } from './CardHorizontal';

export const FavoritesSection = () => {
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await getProperiestUser();
      if (response) {
        if (response?.data) {
          setProperties(response.data);
        }
      }
    };

    fetchProperties();
  }, []);

  console.log(properties);
  console.log(properties[0]?.images[0]);

  return (
    <Box>
      {properties.map((property, index) => (
        <CardHorizontal
          key={index}
          image={property?.images[0]}
          title='Favorites'
          price={property?.price}
          location={property?.stateName}
          address={property?.address}
          description={property?.description}
        />
      ))}
    </Box>
  );
};
