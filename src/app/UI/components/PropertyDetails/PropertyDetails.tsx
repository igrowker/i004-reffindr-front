import { Flex, Grid, GridItem, HStack, Input, Text } from '@chakra-ui/react'
import { HiUpload } from 'react-icons/hi'
import { ImFilePicture } from 'react-icons/im'

import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/empty-state'
import { Field } from '@/components/ui/field'
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from '@/components/ui/file-upload'
import { Radio, RadioGroup } from '@/components/ui/radio'


import CustomSelect from '../CustomSelect/CustomSelect'

const PropertyDetails = () => {
  return (
    <Flex direction={'column'} py={4} px={8}>
      <Flex flexDirection={'row'} alignItems={'center'} gap={4}>
        <EmptyState
          icon={<ImFilePicture />}
          title='No tienes multimedia cargada'
          description='Aceptamos archivos de imagen o video .jpg y .png'
        />
        <FileUploadRoot>
          <FileUploadTrigger asChild>
            <Button variant='outline' size='sm'>
              <HiUpload /> Seleccionar imagenes o videos
            </Button>
          </FileUploadTrigger>
          <FileUploadList />
        </FileUploadRoot>
      </Flex>
      <Grid templateColumns={'repeat(2, 1fr)'} gap={4}>
        <GridItem>
          <Field
            label='Nombre o título de propiedad:'
            labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}
          >
            <Input placeholder='Escribe el nombre:' type='string' name='nombrePropiedad' />
          </Field>
        </GridItem>
        <GridItem>
          <Field label='Barrio:' labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
            <Input placeholder='Escribe el barrio' type='string' name='nombreBarrio' />
          </Field>
        </GridItem>
        <GridItem colSpan={2}>
          <Field label='Calle:' labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
            <Input placeholder='Escribe la calle' type='string' name='nombreCalle' />
          </Field>
        </GridItem>
        <GridItem>
          <CustomSelect
            label='País:'
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
            ]}
          />
        </GridItem>
        <GridItem>
          <CustomSelect
            label='Provincia:'
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
            ]}
          />
        </GridItem>
        <GridItem>
          <Field label='Código Postal:' labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
            <Input placeholder='Escribe el código postal' type='string' name='codigoPostal' />
          </Field>
        </GridItem>
        <GridItem>
          <CustomSelect
            label='Tipo de propiedad:'
            options={[
              { value: '1', label: '1' },
              { value: '2', label: '2' },
            ]}
          />
        </GridItem>
        <GridItem>
          <Text fontWeight={'bold'} fontSize={'16px'} mb={3}>
            Operación:
          </Text>
          <RadioGroup defaultValue='1'>
            <HStack gap='6'>
              <Radio value='1'>Alquiler</Radio>
              <Radio value='2'>Venta</Radio>
            </HStack>
          </RadioGroup>
        </GridItem>
      </Grid>

      <Flex margin={4} gap={4}></Flex>

      <Flex justifyContent={'flex-end'} margin={4} gap={4}>
        <Button width='auto' background={'#1E3A8A'}>
          Siguiente
        </Button>
      </Flex>
    </Flex>
  )
}

export default PropertyDetails
