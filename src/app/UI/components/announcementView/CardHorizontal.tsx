import { Box, Card, HStack, Image, Text } from '@chakra-ui/react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

interface Property {
  id: number;
  title: string;
  image: string;
  price: string;
  countryName: string;
  stateName: string;
  location: string;
  address: string;
  description: string;
}

interface CardHorizontalProps {
  property: Property;
}

export const CardHorizontal: React.FC<CardHorizontalProps> = ({ title, price, location, description }) => (
  <Box mx={8} my={4}>
    <Card.Root
      flexDirection={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      width='100%'
      _hover={{
        border: '1px solid #2175D9',
      }}
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='/public/Announcement_Image.svg'
        alt='Caffe Latte'
      />
      <Box display='flex' flexDirection='column' justifyContent='space-between' alignItems='center' width='100%'>
        <Card.Body flex='1' width='100%'>
          <Card.Title fontSize={20} fontWeight='bold' mb='2'>
            {title}
          </Card.Title>
          <Text fontSize='lg'>{price}</Text>
          <HStack fontSize='md' color='gray.500' alignItems='center'>
            <FaMapMarkerAlt />
            <Text>{location}</Text>
          </HStack>

            <Card.Description>{property.description}</Card.Description>
          </Card.Body>
          <Card.Footer display='flex' justifyContent='flex-end' width='100%' mt='auto'>
            <Button onClick={handleViewMore} variant='ghost'>
              Ver más &gt;
            </Button>
          </Card.Footer>
        </Box>
      </Card.Root>
    </Box>
  );
};
