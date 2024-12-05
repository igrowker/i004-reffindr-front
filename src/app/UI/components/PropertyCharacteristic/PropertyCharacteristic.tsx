import { Button, Flex, Grid, GridItem, SimpleGrid, Text, Textarea } from '@chakra-ui/react'

import CustomSelect from '@/app/UI/components/CustomSelect/CustomSelect'
import { Checkbox } from '@/components/ui/checkbox'

interface PropertyCharacteristicProps {
  formState: {
    ambients: string
    bedrooms: string
    bathrooms: string
    seniority: string
    services: { [key: string]: boolean }
    aditionals: { [key: string]: boolean }
    description: string
  }
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  handleCheckBoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onNextCharacteristic: () => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  assingNewValues: (values: Partial<PropertyCharacteristicProps>) => void
}

const generateOptions = (max: number) => {
  return Array.from({ length: max }, (_, index) => ({
    value: (index + 1).toString(),
    label: (index + 1).toString(),
  }))
}

export const PropertyCharacteristic: React.FC<PropertyCharacteristicProps> = ({
  onNextCharacteristic,
  formState,
  handleInputChange,
  handleCheckBoxChange,
  assingNewValues,
}) => {
  const ambientOptions = generateOptions(5)
  const bedroomOptions = generateOptions(5)
  const bathOptions = generateOptions(5)
  const seniorityOptions = generateOptions(50)

  const handleNextCharacteristic = () => {
    onNextCharacteristic()
  }

  return (
    <>
      <Flex px={8} py={8} direction={'column'}>
        <Grid gridTemplateColumns={'repeat(2,1fr)'} gapX={14} gapY={4}>
          <GridItem>
            <CustomSelect
              label='Ambientes:'
              options={ambientOptions}
              value={formState.ambients}
              onChange={handleInputChange}
              name='ambients'
            />
          </GridItem>
          <GridItem>
            <CustomSelect
              label='Dormitorios:'
              options={bedroomOptions}
              value={formState.bedrooms}
              onChange={handleInputChange}
              name='bedrooms'
            />
          </GridItem>
          <GridItem>
            <CustomSelect label='Baños:' options={bathOptions} />
          </GridItem>
          <GridItem>
            <CustomSelect
              label='Antigüedad:'
              options={seniorityOptions}
              value={formState.seniority}
              onChange={handleInputChange}
              name=''
            />
          </GridItem>
        </Grid>
        <Flex direction='column'>
          <Text mb={5} fontWeight={'bold'}>
            Servicies:
          </Text>
          <SimpleGrid columns={{ base: 2, md: 6 }} gap={3}>
            <Checkbox name='water' checked={formState.services.water} onCheckedChange={handleCheckBoxChange}>
              Agua
            </Checkbox>
            <Checkbox>Vigilancia</Checkbox>
            <Checkbox>Internet</Checkbox>
            <Checkbox>Gas</Checkbox>
            <Checkbox>Luz</Checkbox>
          </SimpleGrid>
        </Flex>

        <Flex direction='column'>
          <Text my={5} fontWeight={'bold'}>
            Aditionals:
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
            value={formState.description}
            onChange={handleInputChange}
            name='description'
          ></Textarea>
        </Flex>
        <Flex justifyContent='flex-end' p={5}>
          <Button onClick={handleNextCharacteristic} bg={'#1E3A8A'}>
            Siguiente
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
