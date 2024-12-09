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
  'RequirementPostRequestDto[IsWorking]': boolean;
  'RequirementPostRequestDto[HasWarranty]': boolean;
  'RequirementPostRequestDto[RangeSalary]': number;
  ownerEmail: string;
  price: number;
  images: File[];
}

const initialFormState: InitialFormState = {
  countryId: 0,
  stateId: 0,
  title: '',
  address: '',
  environments: 0,
  bathrooms: 0,
  bedrooms: 0,
  seniority: 0,
  water: false,
  gas: false,
  surveillance: false,
  electricity: false,
  internet: false,
  pool: false,
  garage: false,
  pets: false,
  grill: false,
  elevator: false,
  terrace: false,
  description: '',
  ownerEmail: '',
  price: 0,
  "RequirementPostRequestDto[IsWorking]": true,
  "RequirementPostRequestDto[HasWarranty]": true,
  "RequirementPostRequestDto[RangeSalary]": 20, 
  images: []


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

          {activeTab === AnnoucementsTabs.Confirmation && <PropertyConfirmation handleInputChange={handleInputChange} formState={formState} />}
        </form>
      </Box>
    </>
  );
});
