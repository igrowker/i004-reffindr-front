import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { useForm } from '@/hooks/useForm'
import { createProperty } from '@/services/propertiesService'
import { validateProperty } from '@/utils/validate'

import { OwnerData } from '../ownerData/OwnerForm'
import { PropertyCharacteristic } from '../PropertyCharacteristic/PropertyCharacteristic'
import { PropertyConfirmation } from '../PropertyConfirmation/PropertyConfirmation'
import PropertyDetails from '../PropertyDetails/PropertyDetails'

export const AnnoucementsTabs = {
  PropertyDetails: 'Detalles de propiedad',
  features: 'Características',
  OwnerDetails: 'Datos del propietario',
  Confirmation: 'Confirmación',
}
export interface InitialFormState {
  title: string
  address: string
  countryId: number
  stateId: number
  ambients: number
  bedrooms: number
  bathrooms: number
  seniority: number
  services: {
    water: boolean
    vigilance: boolean
    internet: boolean
    gas: boolean
    light: boolean
  }
  aditionals: {
    pool: boolean
    pets: boolean
    elevator: boolean
    garage: boolean
    grill: boolean
    terrace: boolean
  }
  description: string
  ownerName: string
  ownerPhone: string
  ownerEmail: string
  ownerAddress: string
}

export const MenuAnnouncement = () => {
  const [activeTab, setActiveTab] = useState(AnnoucementsTabs.PropertyDetails)
  const { formState, handleInputChange, handleCheckBoxChange, handleSubmit, assignAllNewValues } =
    useForm<InitialFormState>(
      {
        title: '',
        address: '',
        countryId: 0,
        stateId: 0,
        ambients: 0,
        bedrooms: 0,
        bathrooms: 0,
        seniority: 0,
        services: {
          water: false,
          vigilance: false,
          internet: false,
          gas: false,
          light: false,
        },
        aditionals: {
          pool: false,
          pets: false,
          elevator: false,
          garage: false,
          grill: false,
          terrace: false,
        },
        description: '',
        ownerName: '',
        ownerPhone: '',
        ownerEmail: '',
        ownerAddress: '',
      },
      validateProperty
    )

  console.log(formState)

  const onSubmitForm = () => {
    createProperty(formState)
  }

  const handleNextDetails = () => {
    setActiveTab(AnnoucementsTabs.features)
  }

  const handleNextCharacteristic = () => {
    setActiveTab(AnnoucementsTabs.OwnerDetails)
  }

  const handleNextOwner = () => {
    setActiveTab(AnnoucementsTabs.Confirmation)
  }

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
        {activeTab === AnnoucementsTabs.PropertyDetails && (
          <PropertyDetails
            formState={formState}
            handleInputChange={handleInputChange}
            onNextDetails={handleNextDetails}
            assignAllNewValues={assignAllNewValues}
          />
        )}
        {activeTab === AnnoucementsTabs.features && (
          <PropertyCharacteristic
            formState={formState}
            handleInputChange={handleInputChange}
            handleCheckBoxChange={handleCheckBoxChange}
            onNextCharacteristic={handleNextCharacteristic}
          />
        )}
        {activeTab === AnnoucementsTabs.OwnerDetails && (
          <OwnerData formState={formState} handleInputChange={handleInputChange} onNextOwner={handleNextOwner} />
        )}
        {activeTab === AnnoucementsTabs.Confirmation && <PropertyConfirmation formState={formState} />}
      </Box>
      <Button onClick={onSubmitForm}></Button>
    </>
  )
}
