import {
  /*  Badge, */
  Box,
  Button,
  Card,
  Flex,
  /* HStack, */
  IconButton,
  Image,
  Text,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa6';
import { IoChevronForwardSharp } from 'react-icons/io5';
import { RiMapPin2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

import { Skeleton } from '@/components/ui/skeleton';
import { Property } from '@/interfaces/types';

interface CardReuProps extends Partial<Property> {
  isSkeletonLoading?: boolean;
  maxW?: string;
  images: string[];
}

export const CardReuComponent = ({ maxW, isSkeletonLoading, ...property }: CardReuProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/home/${property?.title}?pid=${property?.id}`, { state: { property } });
  };

  const fallbackImageUrl =
    'https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560';

  return (
    <Skeleton loading={isSkeletonLoading}>
      <Card.Root
        minW={maxW}
        maxW={maxW}
        overflow='hidden'
        borderRadius='lg'
        border='1px solid transparent'
        _hover={{
          border: '1px solid #2175D9',
          boxShadow: '0px 10px 20px rgba(38, 80, 204, 0.1)',
        }}
        boxShadow='0px 4px 8px rgba(0, 0, 0, 0.1)'
        transition='box-shadow 0.3s ease-in-out'
      >
        <Image
          src={property?.images[0] ?? fallbackImageUrl}
          alt={property?.title}
          h='200px'
          objectFit='cover'
          borderRadius='0'
        />
        <Card.Body gap='1'>
          <Flex alignItems='center' gap='2'>
            <Card.Title lineClamp={1}>{property.title}</Card.Title>

            <IconButton
              aria-label='Call support'
              ml='auto'
              rounded='full'
              bg='transparent'
              color={isFavorited ? 'red.500' : 'gray.500'}
              onClick={toggleFavorite}
            >
              <FaHeart />
            </IconButton>
          </Flex>

          <Text textStyle='2xl' fontWeight='medium' letterSpacing='tight' mt='2'>
            ${property?.price?.toLocaleString('es-AR')}
          </Text>
          <Box letterSpacing='tight' mt='2'>
            <Flex fontWeight={'semibold'} alignItems='center' gap='2'>
              {property.countryName}, {property.stateName}
            </Flex>
          </Box>
          <Box letterSpacing='tight' mt='2'>
            <Flex alignItems='center' gap='2'>
              <RiMapPin2Line />
              <Text lineClamp='1'>{property?.address}</Text>
            </Flex>
          </Box>
          <Box display='flex' gap='2'>
            {/* {features.map((feature, index) => (
            <Badge key={index} variant='solid' bg='#3182CE' size='md'>
              {feature}
            </Badge>
          ))} */}
          </Box>

          <Card.Description as='span'>
            <Text lineClamp='2'>{property?.description}</Text>
          </Card.Description>
        </Card.Body>
        <Card.Footer>
          <Button onClick={handleViewMore} variant='ghost' ml='auto'>
            Ver más <IoChevronForwardSharp />
          </Button>
        </Card.Footer>
      </Card.Root>
    </Skeleton>
  );
};
