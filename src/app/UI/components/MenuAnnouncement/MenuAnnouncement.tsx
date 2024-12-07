import { Box, Flex, Text } from '@chakra-ui/react';
import React, { FormEvent, useState } from 'react';

import { useForm } from '@/hooks/useForm';
import { createProperty } from '@/services/propertiesService';
import { validateProperty } from '@/utils/validate';

import { PropertyCharacteristic } from '../PropertyCharacteristic/PropertyCharacteristic';
import { PropertyConfirmation } from '../PropertyConfirmation/PropertyConfirmation';
import { PropertyDetails } from '../PropertyDetails/PropertyDetails';

export const AnnoucementsTabs = {
  PropertyDetails: 'Detalles de propiedad',
  features: 'Características',
  Confirmation: 'Confirmación',
};
export interface InitialFormState {
  title: string;
  address: string;
  countryId: number;
  stateId: number;
  environments: number;
  bedrooms: number;
  bathrooms: number;
  seniority: number;
  water: boolean;
  surveillance: boolean;
  internet: boolean;
  gas: boolean;
  electricity: boolean;
  pool: boolean;
  pets: boolean;
  elevator: boolean;
  garage: boolean;
  grill: boolean;
  terrace: boolean;
  description: string;
  "RequirementPostRequestDto[IsWorking]": boolean;
  "RequirementPostRequestDto[HasWarranty]": boolean;
  "RequirementPostRequestDto[RangeSalary]": number;
  ownerEmail: string;
  price: number;
  images: FileList | null;
}
const initialFormState: InitialFormState = {
  title: 'prueba',
  address: 'no lo se pero de prueba',
  countryId: 1,
  stateId: 1,
  environments: 1,
  bedrooms: 1,
  bathrooms: 1,
  seniority: 4,
  water: false,
  surveillance: false,
  internet: false,
  gas: false,
  electricity: false,
  pool: false,
  pets: false,
  elevator: false,
  garage: false,
  grill: false,
  terrace: false,
  description: 'alamfdj udhawh ',
  ownerEmail: 'fernandez@gmail.com',
  images: null,
  price: 2000,
  "RequirementPostRequestDto[IsWorking]": false,
  "RequirementPostRequestDto[HasWarranty]": false,
  "RequirementPostRequestDto[RangeSalary]": 0,

};

export const MenuAnnouncement = React.memo(() => {
  const [activeTab, setActiveTab] = useState(AnnoucementsTabs.PropertyDetails);
  const { formState, handleInputChange, assignAllNewValues, onCheckboxChange } = useForm<InitialFormState>(
    initialFormState,
    validateProperty
  );

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProperty(formState);
  };

  const handleNextDetails = () => {
    setActiveTab(AnnoucementsTabs.features);
  };

  const handleNextCharacteristic = () => {
    setActiveTab(AnnoucementsTabs.Confirmation);
  };

  return (
    <>
      <Flex justifyContent='start' mb={3} p={2}>
        {Object.values(AnnoucementsTabs).map((tab) => (
          <Box key={tab} cursor='pointer' onClick={() => setActiveTab(tab)}>
            <Text p={2}>{tab}</Text>
            <Box
              borderColor={activeTab === tab ? 'blue.500' : 'black'}
              borderBottom='2px solid'
              color={activeTab === tab ? 'blue.500' : 'black'}
            />
          </Box>
        ))}
      </Flex>

      <Box bgColor='white' rounded='sm' border='1px solid #ddd'>
        <form onSubmit={onSubmitForm}>
          {activeTab === AnnoucementsTabs.PropertyDetails && (
            <PropertyDetails
              formState={formState}
              assingNewValues={assignAllNewValues}
              handleInputChange={handleInputChange}
              onNextDetails={handleNextDetails}
            />
          )}
          {activeTab === AnnoucementsTabs.features && (
            <PropertyCharacteristic
              onCheckboxChange={onCheckboxChange}
              formState={formState}
              handleInputChange={handleInputChange}
              onNextCharacteristic={handleNextCharacteristic}
            />
          )}

          {activeTab === AnnoucementsTabs.Confirmation && <PropertyConfirmation />}
        </form>
      </Box>
    </>
  );
});
