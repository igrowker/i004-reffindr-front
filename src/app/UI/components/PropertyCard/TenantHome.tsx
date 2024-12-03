import { Box, Flex } from '@chakra-ui/react'
import { CardReuComponent } from '@/app/UI/components/CardInfo/CardReuComponent'
import { usePropertiesStore } from '@/stores/propertiesStore'
import { useEffect } from 'react'




export const TenantHomePage = () => {
  const getProperties = usePropertiesStore(state => state.getProperties)
  const properties = usePropertiesStore(state => state.properties)


  useEffect(() => {
    getProperties()
  }, [] )
  return (
      
        <Flex gap='4' flexWrap='wrap' >
          {properties?.map((item) => (
            <Box
              key={item.id}
            >
              <CardReuComponent image='' description={item.description} features={[]}  location={""} price={200} title={item.title}  maxW="300px"   />
            </Box>
          ))}
        </Flex>
  )
}
