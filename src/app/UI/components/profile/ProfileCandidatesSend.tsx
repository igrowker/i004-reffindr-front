/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Property } from '@/interfaces/types';
import { getMyAplications } from '@/services/applicationService';

import { CardReuComponent } from '../CardInfo/CardReuComponent';

export const ProfileCandidatesSend = () => {
  const [myProperties, setMyProperties] = useState<Property[]>([]);

  const mapperProperties = (properties: any): Property[] => {
    return properties?.map((property: any) => ({
      id: property?.propertyId,
      title: property?.propertyTitle,
      address: property?.propertyAddress,
      images: property?.images?.map((image: any) => image.url) ?? [],
    }));
  };

  useEffect(() => {
    getMyAplications().then((res) => {
      const mappedProperties = mapperProperties(res.data);
      setMyProperties(mappedProperties);
    });
  }, []);

  if (myProperties?.length === 0) {
    return <Text>No hay aplicaciones</Text>;
  }

  return (
    <Flex flexDirection='row' gap='4'>
      {myProperties?.map((property: Property) => (
        <CardReuComponent key={property.id} maxW={'300px'} isSkeletonLoading={false} {...property} />
      ))}
    </Flex>
  );
};
