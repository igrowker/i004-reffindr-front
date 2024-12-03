import { Button, Flex, Grid, GridItem, SimpleGrid, Text, Textarea } from '@chakra-ui/react'

import CustomSelect from '@/app/UI/components/CustomSelect/CustomSelect'
import { Checkbox } from '@/components/ui/checkbox'

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
      <Flex px={8} py={8} direction={'column'}>
        <Grid gridTemplateColumns={'repeat(2,1fr)'} gapX={14} gapY={4}>
          <GridItem>
            <CustomSelect label='Ambientes:' options={options} />
          </GridItem>
          <GridItem>
            <CustomSelect label='Dormitorios:' options={options2} />
          </GridItem>
          <GridItem>
            <CustomSelect label='Baños:' options={options} />
          </GridItem>
          <GridItem>
            <CustomSelect label='Antigüedad:' options={options} />
          </GridItem>
        </Grid>
        <Flex direction={{ base: 'column', md: 'row' }} wrap='wrap' justifyContent='space-between' gap={4}>
          {/* <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
            <CustomSelect label='Ambientes:' options={options} />
          </Flex> */}
          {/* <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
            <CustomSelect label='Dormitorios:' options={options2} />
          </Flex> */}
          {/* <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}>
            <CustomSelect label='Baños:' options={options} />
          </Flex>
          <Flex direction='column' width={{ base: '100%', md: '48%' }} mb={4}> */}
          {/* <CustomSelect label='Antigüedad:' options={options} /> */}
          {/* </Flex> */}
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
    </>
  )
}
