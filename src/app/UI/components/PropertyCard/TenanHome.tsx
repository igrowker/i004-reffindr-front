import { Box, Flex } from '@chakra-ui/react'

import { CardReuComponent } from '../CardInfo/CardReuComponent'
import { usePropertiesStore } from '@/stores/propertiesStore'
import { useEffect } from 'react'


export const TenantHome = () => {

  const getProperties = usePropertiesStore(state => state.getProperties)
  const properties = usePropertiesStore(state => state.properties)


  useEffect(() => {
    getProperties()
    console.log(properties)
  }, [] )
  return (
    <Flex h='100vh'>
      <Box flex='1' bg='#EDF2F7' p='2' overflowY='auto'>
        <Flex gap='4' flexWrap='wrap' justifyContent='center' alignItems='start'>
          {/* {properties.map((item) => (
            <CardReuComponent {...item} key={item.id} maxW='350px' />
          ))} */}
        </Flex>
      </Box>
    </Flex>
  )
}
