import { /* Box, */ Flex } from '@chakra-ui/react';
import { useEffect } from 'react';

import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent';
import { usePropertiesStore } from '@/stores/propertiesStore';

export const TenantHomePage = () => {
  const getProperties = usePropertiesStore((state) => state.getProperties);
  const properties = usePropertiesStore((state) => state.properties);
  const isGettingProperties = usePropertiesStore((state) => state.isGettingProperties);

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <Flex gap='4' flexWrap='wrap'>
      {isGettingProperties == true
        ? [0, 1, 2, 3].map((item) => <CardReuComponent images={[]} maxW={'300px'}  key={item} isSkeletonLoading={isGettingProperties} />)
        : properties?.map((item) => <CardReuComponent isSkeletonLoading={false} key={item.id} {...item} maxW='300px' />)}
    </Flex>
  );
};
