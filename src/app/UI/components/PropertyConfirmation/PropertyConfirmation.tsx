import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent';
import { Field } from '@/components/ui/field';

import { InitialFormState } from '../MenuAnnouncement/MenuAnnouncement';
import { ConfirmationDialog } from './ConfirmationDialog';

interface Props {
  formState: InitialFormState;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const PropertyConfirmation = ({ formState, handleInputChange }: Props) => {
  const [showDialog, setShowDialog] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>('');

  const readImage = () => {
    const fileReader = new FileReader();
    if (formState.images && formState.images.length > 0) {
      const file = formState.images[0] as File;
      fileReader.onloadend = (ev) => {
        setImagePreview(ev.target?.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    readImage();
  }, []);
  return (
    <Flex p={8} flexDirection='column'>
      <Flex
        direction='row'
        justifyContent={showDialog ? 'center' : 'space-between'}
        alignItems={showDialog ? 'center' : 'flex-start'}
      >
        {showDialog ? (
          <ConfirmationDialog setShowDialog={setShowDialog} />
        ) : (
          <>
            <Flex direction={'column'} flex='1'>
              <Text mb={5} fontWeight={'bold'}>
                Vista previa de propiedad
              </Text>
              <CardReuComponent isSkeletonLoading={false} title={formState.title} address={formState.address} description={formState.description}  price={formState.price} images={imagePreview ? [imagePreview] : []} maxW={'300px'} />
            </Flex>

            <Flex ml={3} direction={'column'} flex='2' h='full'>
              <Text mb={5} fontWeight={'bold'}>
                Datos del propietario
              </Text>
              {/* <OwnerDataCard ownerData={ownerData[0]} /> */}
              <Field label='Email'>
                <Input
                  name='ownerEmail'
                  type='email'
                  placeholder='Escribe el email'
                  value={formState.ownerEmail}
                  onChange={handleInputChange}
                />
              </Field>
              <Flex alignSelf={'flex-end'} mt={'auto'} p={4}>
                <Button type='submit' onClick={() => setShowDialog(true)} bg={'#1E3A8A'} width={'auto'}>
                  Confirmar
                </Button>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
};
