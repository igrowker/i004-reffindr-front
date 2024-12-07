import { Button, Flex, Input, Text } from '@chakra-ui/react';
// import { useState } from 'react';

import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent';
import { Field } from '@/components/ui/field';

// import { InitialFormState } from '../MenuAnnouncement/MenuAnnouncement';
// import { ConfirmationDialog } from './ConfirmationDialog';

const data = [
  {
    id: 1,
    title: 'Living room Sofa 1',
    image: 'assets/sillon.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    price: 450,
    location: 'Recoleta, C.A.B.A',
    features: ['Wifi', 'TV', 'Parking'],
  },
];

// interface Props {
//   formState: InitialFormState;
// }

export const PropertyConfirmation = () => {
  // const [showDialog, setShowDialog] = useState(false);

  return (
    <Flex p={8} flexDirection='column'>
      <Flex
        direction='row'
        // justifyContent={showDialog ? 'center' : 'space-between'}
        // alignItems={showDialog ? 'center' : 'flex-start'}
      >
        {/* {showDialog ? (
          <ConfirmationDialog setShowDialog={setShowDialog} />
        ) : (
          <> */}
            <Flex direction={'column'} flex='1'>
              <Text mb={5} fontWeight={'bold'}>
                Vista previa de propiedad
              </Text>
              <CardReuComponent isSkeletonLoading={false} images={[]} {...data[0]} maxW={'300px'} />
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
                  // value={''}
                  // onChange={handleInputChange}
                />
              </Field>
              <Flex alignSelf={'flex-end'} mt={'auto'} p={4}>
                <Button type="submit" /* onClick={() => setShowDialog(true)} */ bg={'#1E3A8A'} width={'auto'}>
                  Confirmar
                </Button>
              </Flex>
            </Flex>
          {/* </>
        )} */}
      </Flex>
    </Flex>
  );
};
