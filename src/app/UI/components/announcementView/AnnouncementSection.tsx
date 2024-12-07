import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Property } from '@/interfaces/types';
import { getProperiestUser } from '@/services/userService';

import { CardHorizontal } from './CardHorizontal';

export const AnnouncementSection = () => {
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

  return (
    <Box>
      {properties.map((property, index) => (
        <CardHorizontal
          key={index}
          title={property?.title}
          price={property?.price}
          location={property?.address}
          description={property?.description}
        />
      ))}
    </Box>
  );
};
