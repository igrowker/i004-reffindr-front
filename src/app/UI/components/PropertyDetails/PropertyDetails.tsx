import { Flex, Grid, GridItem, Input } from '@chakra-ui/react'
import React from 'react'
import { HiUpload } from 'react-icons/hi'
import { ImFilePicture } from 'react-icons/im'

import { Button } from '@/components/ui/button'
import { EmptyState } from '@/components/ui/empty-state'
import { Field } from '@/components/ui/field'
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from '@/components/ui/file-upload'

import CustomSelect from '../CustomSelect/CustomSelect'

interface PropertyDetailsProps {
  onNextDetails: () => void
  formState: {
    title: string
    address: string
    countryId: number
    stateId: number
  }
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ onNextDetails, formState, handleInputChange }) => {
  const handleNextDetails = () => {
    onNextDetails()
  }

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
            <Input
              value={formState.title}
              onChange={handleInputChange}
              placeholder='Escribe el nombre'
              type='string'
              name='title'
            />
          </Field>
        </GridItem>
        <GridItem colSpan={2}>
          <Field label='Dirección:' labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
            <Input
              value={formState.address}
              onChange={handleInputChange}
              placeholder='Escribe la dirección'
              type='string'
              name='address'
            />
          </Field>
        </GridItem>
        <GridItem>
          <CustomSelect
            label='País:'
            options={[{ value: 1, label: 'Argentina' }]}
            value={formState.countryId}
            onChange={handleInputChange}
            name='countryId'
          />
        </GridItem>
        <GridItem>
          <CustomSelect
            label='Provincia:'
            options={[
              { value: 1, label: 'Buenos Aires' },
              { value: 2, label: 'Catamarca' },
              { value: 3, label: 'Chaco' },
              { value: 4, label: 'Chubut' },
              { value: 5, label: 'Córdoba' },
              { value: 6, label: 'Corrientes' },
              { value: 7, label: 'Entre Ríos' },
              { value: 8, label: 'Formosa' },
              { value: 9, label: 'Jujuy' },
              { value: 10, label: 'La Pampa' },
              { value: 11, label: 'La Rioja' },
              { value: 12, label: 'Mendoza' },
              { value: 13, label: 'Misiones' },
              { value: 14, label: 'Neuquén' },
              { value: 15, label: 'Río Negro' },
              { value: 16, label: 'Salta' },
              { value: 17, label: 'San Juan' },
              { value: 18, label: 'San Luis' },
              { value: 19, label: 'Santa Cruz' },
              { value: 20, label: 'Santa Fe' },
              { value: 21, label: 'Santiago del Estero' },
              { value: 22, label: 'Tierra del Fuego' },
              { value: 23, label: 'Tucumán' },
            ]}
            value={formState.stateId}
            onChange={handleInputChange}
            name='stateId'
          />
        </GridItem>
      </Grid>

      <Flex margin={4} gap={4}></Flex>

      <Flex justifyContent={'flex-end'} margin={4} gap={4}>
        <Button onClick={handleNextDetails} width={'40'} background={'#1E3A8A'}>
          Siguiente
        </Button>
      </Flex>
    </Flex>
  )
}

export default PropertyDetails
