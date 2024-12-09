import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { useApplication } from '@/hooks/useApplication';

import { Details } from './Details';
import { ImgGrid } from './ImgGrid';
import { LookingFor } from './LookingFor';
import { Modal } from './Modal';
import { Requirements } from './Requirements ';

export const ExpandedDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { applicationProperty } = useApplication();
  const location = useLocation();
  const property = location.state?.property;

  const handleApplicationProperty = async () => {
    if (property?.id) {
      await applicationProperty(property.id);
    }
  };

  console.log(property);

  return (
    <>
      <Flex bg='#EDF2F7' p='2' w='full' flexDirection='column'>
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='start'
          bg='white'
          p='5'
          gap='4'
          border='1px solid'
          borderColor='gray.300'
          borderRadius='md'
        >
          <ImgGrid images={property.images} />
          <Details
            title={property.title}
            description={property.description}
            price={property.price}
            country={property.countryName}
            state={property.stateName}
            location={property.address}
            features={[]}
          />
          <LookingFor />
          <Requirements />
          <Flex justifyContent='center' alignItems='center' mt='4' w='full'>
            <Button
              onClick={() => {
                setIsModalOpen(true);
              }}
              size='lg'
              bg='#1E3A8A'
              px='10'
            >
              Aplicar
            </Button>
          </Flex>
        </Flex>
      </Flex>

      <Modal
        title='Aplicar a propiedad'
        body='¿Confirmas que deseas aplicar a esta propiedad?'
        onConfirm={() => {
          setIsModalOpen(false);
          handleApplicationProperty();
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
        onClose={() => {
          setIsModalOpen(false);
        }}
        open={isModalOpen}
      />
    </>
  );
};
