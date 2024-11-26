import { Button, Flex, SimpleGrid, Text, Textarea } from '@chakra-ui/react'

import CustomSelect from '@/app/UI/components/CustomSelect/CustomSelect'
import { MenuAnnouncement } from '@/app/UI/components/MenuAnnouncement/MenuAnnouncement'
import { Checkbox } from '@/components/ui/checkbox'
import { Link } from 'react-router-dom'

export const PropertyCharacteristic = () => {
  const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
  ]

  const options2 = [
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
  ]

  return (
    <>
    <Link to="hola mundo">home</Link>
    <Flex height='100vh' alignItems='center' direction={'column'} w={'full'}>
      <Flex direction='column' width={{ base: '90%', md: '80%', lg: '60%' }}>
        <MenuAnnouncement />
        <Flex direction='column' p={5} border='1px solid black' borderRadius='md'>
          <Flex direction={{ base: 'column', md: 'row' }} wrap='wrap' justifyContent='space-between' gap={4}>
            <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
              <CustomSelect label='Ambientes:' options={options} />
            </Flex>
            <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
              <CustomSelect label='Dormitorios:' options={options2} />
            </Flex>
            <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
              <CustomSelect label='Baños:' options={options} />
            </Flex>
            <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
              <CustomSelect label='Antigüedad:' options={options} />
            </Flex>
          </Flex>

          <Flex direction='column'>
            <Text mb={5} fontWeight={'bold'}>
              Servicios:
            </Text>
            <SimpleGrid columns={{ base: 2, md: 6 }} gap={3}>
              <Checkbox>Agua</Checkbox>
              <Checkbox>Vigilancia</Checkbox>
              <Checkbox>Internet</Checkbox>
              <Checkbox>Gas</Checkbox>
              <Checkbox>Luz</Checkbox>
            </SimpleGrid>
          </Flex>

          <Flex direction='column'>
            <Text my={5} fontWeight={'bold'}>
              Adicionales:
            </Text>
            <SimpleGrid columns={{ base: 2, md: 6 }} gap={3}>
              <Checkbox>Pileta</Checkbox>
              <Checkbox>Mascotas</Checkbox>
              <Checkbox>Ascensor</Checkbox>
              <Checkbox>Cochera</Checkbox>
              <Checkbox>Parrilla</Checkbox>
              <Checkbox>Terraza</Checkbox>
            </SimpleGrid>
          </Flex>

          <Flex direction={'column'}>
            <Text my={5} fontWeight={'bold'}>
              Añadir descripción:
            </Text>
            <Textarea
              placeholder='Descripción general de la propiedad...'
              borderRadius={'xl'}
              boxShadow={'md'}
            ></Textarea>
          </Flex>
          <Flex justifyContent='flex-end' p={5}>
            <Button bg={'#1E3A8A'}>Siguiente</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </>
    
  )
}
