import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa6'

export const LookingFor = () => {
  return (
    <Box border='1px solid' borderColor='gray.300' p={4} borderRadius='md' w='full'>
      <Flex direction='row' justifyContent='space-between' gap={6}>
        <Text fontWeight='bold' mb={4}>
          Lo que buscas:
        </Text>
        <Box flex='1'>
          <List.Root gap={4}>
            <List.Item display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>Tipo de departamento: Moderno, de dos o tres ambientes.</Text>
            </List.Item>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>Ubicación: Recoleta, Palermo.</Text>
            </ListItem>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Box>
                <Text>Amenidades valoradas:</Text>
                <List.Root ps='5' pl={6} mt={2}>
                  <ListItem>Gimnasio en el edificio.</ListItem>
                  <ListItem>Terraza y espacios de coworking.</ListItem>
                  <ListItem>Piscina y salón de usos múltiples.</ListItem>
                </List.Root>
              </Box>
            </ListItem>
          </List.Root>
        </Box>
        <Box flex='1'>
          <List.Root gap={4}>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Box>
                <Text>Transporte y accesibilidad:</Text>
                <List.Root ps='5' pl={6} mt={2}>
                  <ListItem>Cercanía a estaciones de metro o paradas de autobús.</ListItem>
                  <ListItem>Facilidad para moverse a pie o en bicicleta.</ListItem>
                </List.Root>
              </Box>
            </ListItem>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Box>
                <Text>Seguridad:</Text>
                <List.Root ps='5' pl={6} mt={2}>
                  <ListItem>Edificios con seguridad 24 horas y cámaras en áreas comunes.</ListItem>
                  <ListItem>Portero o acceso controlado.</ListItem>
                </List.Root>
              </Box>
            </ListItem>
          </List.Root>
        </Box>
      </Flex>
    </Box>
  )
}
