import { Box, Center, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Property } from '@/interfaces/types';
import { getProperiestUser } from '@/services/userService';

import { CardHorizontal } from './CardHorizontal';

export const AnnouncementSection = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      const response = await getProperiestUser();
      if (response) {
        if (response?.data) {
          setProperties(response.data);
        }
      }
      setLoading(false);
    };

    fetchProperties();
  }, []);

  return (
    <Box>
      {loading ? (
        <Box pos='absolute' inset='0' bg='bg/80'>
          <Center h='full'>
            <Spinner color='teal.500' />
          </Center>
        </Box>
      ) : (
        properties.map((property, index) => (
          <CardHorizontal
            key={index}
            title={property?.title}
            price={property?.price}
            location={property?.address}
            description={property?.description}
          />
        ))
      )}
    </Box>
  );
};
