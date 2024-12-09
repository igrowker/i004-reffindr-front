/* eslint-disable @typescript-eslint/no-explicit-any */
import { Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { Property } from '@/interfaces/types';
import { getMyAplications } from '@/services/applicationService';
import { getPropertyById } from '@/services/propertiesService';

import { CardReuComponent } from '../CardInfo/CardReuComponent';

export const ProfileCandidatesSend = () => {
  const [myProperties, setMyProperties] = useState<Property[]>([]);

  useEffect(() => {
    getMyAplications().then((res) => {
      const propertyPromises = res.data.map((property: any) => getPropertyById(property.propertyId));

      Promise.all(propertyPromises).then((properties: any) => {
        setMyProperties(properties.map((property: any) => property.data));
      });
    });
  }, []);

  if (myProperties?.length === 0) {
    return <Text>No hay aplicaciones</Text>;
  }

  return (
    <Flex flexDirection='row' gap='4' flexWrap='wrap'>
      {myProperties?.map((property: Property) => (
        <CardReuComponent key={property.id} maxW={'300px'} isSkeletonLoading={false} {...property} />
      ))}
    </Flex>
  );
};
