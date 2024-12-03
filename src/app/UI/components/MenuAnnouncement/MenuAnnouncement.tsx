import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

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

export const MenuAnnouncement = () => {
  const [activeTab, setActiveTab] = useState(AnnoucementsTabs.PropertyDetails)

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

      <Box bgColor='white'  rounded='sm' border='1px solid #ddd'>

        {activeTab === AnnoucementsTabs.PropertyDetails && <PropertyDetails />}
        {activeTab === AnnoucementsTabs.features && <PropertyCharacteristic />}
        {activeTab === AnnoucementsTabs.OwnerDetails && <OwnerData />}
        {activeTab === AnnoucementsTabs.Confirmation && <PropertyConfirmation />}
      </Box>
    </>
  )
}
