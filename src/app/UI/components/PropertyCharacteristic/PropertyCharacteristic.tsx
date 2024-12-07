import { Button, Flex, Grid, GridItem, SimpleGrid, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

import CustomSelect from '@/app/UI/components/CustomSelect/CustomSelect'
import { Checkbox } from '@/components/ui/checkbox'

import { InitialFormState } from '../MenuAnnouncement/MenuAnnouncement'

interface PropertyCharacteristicProps {
  formState: InitialFormState
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onNextCharacteristic: () => void
  onCheckboxChange: ({ name, checked }: { name: string; checked: boolean }) => void
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  
}

const generateOptions = (max: number) => {
  return Array.from({ length: max }, (_, index) => ({
    value: (index + 1).toString(),
    label: (index + 1).toString(),
  }))
}

export const PropertyCharacteristic = React.memo(({
  onNextCharacteristic,
  formState,
  handleInputChange,
  onCheckboxChange,
}: PropertyCharacteristicProps) => {
  const ambientOptions = generateOptions(7)
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
              value={formState.environments}
              onChange={handleInputChange}
              name='environments'
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
              name='seniority'
            />
          </GridItem>
        </Grid>
        <Flex direction='column'>
          <Text mb={5} fontWeight={'bold'}>
            Servicies:
          </Text>
          <SimpleGrid columns={{ base: 2, md: 6 }} gap={3}>
            <Checkbox
              checked={formState.water}
              onCheckedChange={({ checked }) => onCheckboxChange({ name: 'water', checked: !!checked })}
            >
              Agua
            </Checkbox>
            <Checkbox
              checked={formState.surveillance}
              onCheckedChange={({ checked }) => onCheckboxChange({ name: 'surveillance', checked: !!checked })}
            >
              Vigilancia
            </Checkbox>
            <Checkbox
              checked={formState.internet}
              onCheckedChange={({ checked }) => onCheckboxChange({ name: 'internet', checked: !!checked })}
            >
              Internet
            </Checkbox>
            <Checkbox
              checked={formState.gas}
              onCheckedChange={({ checked }) => onCheckboxChange({ name: 'gas', checked: !!checked })}
            >
              Gas
            </Checkbox>
            <Checkbox
              checked={formState.electricity}
              onCheckedChange={({ checked }) => onCheckboxChange({ name: 'electricity', checked: !!checked })}
            >
              Electricidad
            </Checkbox>
          </SimpleGrid>
        </Flex>

        <Flex direction='column'>
          <Text my={5} fontWeight={'bold'}>
            Aditionals:
          </Text>
          <SimpleGrid columns={{ base: 2, md: 6 }} gap={3}>
            <Checkbox onCheckedChange={({ checked }) => onCheckboxChange({ name: 'pool', checked: !!checked })}>
              Pileta
            </Checkbox>
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
})
