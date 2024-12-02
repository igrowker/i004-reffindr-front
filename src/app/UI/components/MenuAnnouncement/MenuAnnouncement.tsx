import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'

import Demo from '../ownerData/OwnerForm'
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

  // const tabs = [
  //   "Detalles de propiedad",
  //   "Caracteristicas",
  //   "Datos del propietario",
  //   "Confirmación",
  // ];

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

      {/* Aqui renderizo los dtos del formulario solo si "Datos del propietario" está activo */}
      {activeTab === AnnoucementsTabs.PropertyDetails && <PropertyDetails />}
      {activeTab === AnnoucementsTabs.features && <PropertyCharacteristic />}
      {activeTab === AnnoucementsTabs.OwnerDetails && <Demo />}
      {activeTab === AnnoucementsTabs.Confirmation && <PropertyConfirmation />}
    </>
  )
}
