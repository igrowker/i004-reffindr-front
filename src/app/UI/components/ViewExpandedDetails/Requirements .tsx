import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { FaCheck } from 'react-icons/fa6'

export const Requirements = () => {
  return (
    <Box border='1px solid' borderColor='gray.300' p={4} borderRadius='md' w='full'>
      <Flex direction='row' justifyContent='space-between' gap={6}>
        <Text fontWeight='bold' mb={4}>
          Requisitos:
        </Text>
        <Box flex='1'>
          <List.Root gap={4}>
            <List.Item display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>
              Garantía propietaria: Preferentemente de CABA o seguro de caución aprobado por la inmobiliaria.
              </Text>
            </List.Item>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>
                Garantía propietaria: Preferentemente de CABA o seguro de caución aprobado por la inmobiliaria.
              </Text>
            </ListItem>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>DNI: Copia del Documento Nacional de Identidad (ambos lados).</Text>
            </ListItem>
          </List.Root>
        </Box>
        <Box flex='1'>
          <List.Root gap={4}>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>Contrato mínimo: Período de contrato de [por ejemplo, 24 meses] conforme a la ley vigente.</Text>
            </ListItem>
            <ListItem display='flex' alignItems='flex-start'>
              <Box as={FaCheck} color='green.500' mr={2} mt={1} />
              <Text>Historial crediticio: Informe de situación crediticia al día.</Text>
            </ListItem>
          </List.Root>
        </Box>
      </Flex>
    </Box>
  )
}
