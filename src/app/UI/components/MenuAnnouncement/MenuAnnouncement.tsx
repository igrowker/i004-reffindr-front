import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

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
  enviromments: number
  bedrooms: number
  bathrooms: number
  seniority: number
  water: boolean
  vigilance: boolean
  internet: boolean
  gas: boolean
  electricty: boolean
  pool: boolean
  pets: boolean
  elevator: boolean
  garage: boolean
  grill: boolean
  terrace: boolean
  description: string
  ownerName: string
  ownerPhone: string
  ownerEmail: string
  ownerAddress: string
}

export const MenuAnnouncement = () => {
  const [activeTab, setActiveTab] = useState(AnnoucementsTabs.PropertyDetails)
  const { formState, handleInputChange, assignAllNewValues, onCheckboxChange } = useForm<InitialFormState>(
    {
      title: '',
      address: '',
      countryId: 0,
      stateId: 0,
      enviromments: 0,
      bedrooms: 0,
      bathrooms: 0,
      seniority: 0,
      water: false,
      vigilance: false,
      internet: false,
      gas: false,
      electricty: false,
      pool: false,
      pets: false,
      elevator: false,
      garage: false,
      grill: false,
      terrace: false,
      description: '',
      ownerName: '',
      ownerPhone: '',
      ownerEmail: '',
      ownerAddress: '',
    },
    validateProperty
  )

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

  useEffect(() => {
    console.log(formState.water)
  }, [formState])

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
          />
        )}
        {activeTab === AnnoucementsTabs.features && (
          <PropertyCharacteristic
            onCheckboxChange={onCheckboxChange}
            assingNewValues={assignAllNewValues}
            formState={formState}
            handleInputChange={handleInputChange}
            onNextCharacteristic={handleNextCharacteristic}
          />
        )}
        {activeTab === AnnoucementsTabs.OwnerDetails && (
          <OwnerData formState={formState} handleInputChange={handleInputChange} onNextOwner={handleNextOwner} />
        )}
        {activeTab === AnnoucementsTabs.Confirmation && <PropertyConfirmation />}
      </Box>
      <Button onClick={onSubmitForm}></Button>
    </>
  )
}
