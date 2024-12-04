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
            <Input placeholder='Escribe el nombre' type='string' name='nombrePropiedad' />
          </Field>
        </GridItem>
        <GridItem colSpan={2}>
          <Field label='Dirección:' labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
            <Input placeholder='Escribe la dirección' type='string' name='dirección' />
          </Field>
        </GridItem>
        <GridItem>
          <CustomSelect label='País:' options={[{ value: 'Argentina', label: 'Argentina' }]} />
        </GridItem>
        <GridItem>
          <CustomSelect
            label='Provincia:'
            options={[
              { value: 'Buenos Aires', label: 'Buenos Aires' },
              { value: 'Catamarca', label: 'Catamarca' },
              { value: 'Chaco', label: 'Chaco' },
              { value: 'Chubut', label: 'Chubut' },
              { value: 'Córdoba', label: 'Córdoba' },
              { value: 'Corrientes', label: 'Corrientes' },
              { value: 'Entre Ríos', label: 'Entre Ríos' },
              { value: 'Formosa', label: 'Formosa' },
              { value: 'Jujuy', label: 'Jujuy' },
              { value: 'La Pampa', label: 'La Pampa' },
              { value: 'La Rioja', label: 'La Rioja' },
              { value: 'Mendoza', label: 'Mendoza' },
              { value: 'Misiones', label: 'Misiones' },
              { value: 'Neuquén', label: 'Neuquén' },
              { value: 'Río Negro', label: 'Río Negro' },
              { value: 'Salta', label: 'Salta' },
              { value: 'San Juan', label: 'San Juan' },
              { value: 'San Luis', label: 'San Luis' },
              { value: 'Santa Cruz', label: 'Santa Cruz' },
              { value: 'Santa Fe', label: 'Santa Fe' },
              { value: 'Santiago del Estero', label: 'Santiago del Estero' },
              { value: 'Tierra del Fuego', label: 'Tierra del Fuego' },
              { value: 'Tucumán', label: 'Tucumán' },
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
              { value: 'casa', label: 'Casa' },
              { value: 'departamento', label: 'Departamento' },
              { value: 'monoambiente', label: 'Monoambiente' },
              { value: 'piso', label: 'Piso' },
              { value: 'duplex', label: 'Dúplex' },
              { value: 'loft', label: 'Loft' },
              { value: 'cabaña', label: 'Cabaña' },
              { value: 'chalet', label: 'Chalet' },
              { value: 'ph', label: 'PH (Propiedad Horizontal)' },
              { value: 'terreno', label: 'Terreno' },
              { value: 'quinta', label: 'Quinta' },
              { value: 'finca', label: 'Finca' },
              { value: 'local_comercial', label: 'Local Comercial' },
              { value: 'oficina', label: 'Oficina' },
              { value: 'galpón', label: 'Galpón' },
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
        <Button width={'40'} background={'#1E3A8A'}>
          Siguiente
        </Button>
      </Flex>
    </Flex>
  )
}

export default PropertyDetails
