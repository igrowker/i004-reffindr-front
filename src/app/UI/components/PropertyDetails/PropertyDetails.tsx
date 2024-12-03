import { Flex, HStack, Input, Text } from '@chakra-ui/react'
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
    <Flex direction={'column'} width='100%'>
      <Flex flexDirection={'row'} alignItems={'center'} gap={4}>
        <EmptyState
          width={'40%'}
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

      <Flex flexDirection={'row'} margin={4} gap={4}>
        <Field
          label='Nombre o título de propiedad:'
          width={'30%'}
          labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}
        >
          <Input placeholder='Escribe el nombre:' type='string' name='nombrePropiedad' />
        </Field>
        <Field label='Barrio:' width={'30%'} labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
          <Input placeholder='Escribe el barrio' type='string' name='nombreBarrio' />
        </Field>
      </Flex>

      <Flex margin={4} gap={4}>
        <Field label='Calle:' width={'30%'} labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
          <Input placeholder='Escribe la calle' type='string' name='nombreCalle' />
        </Field>
      </Flex>

      <Flex margin={4} gap={4}>
        <CustomSelect
          width={'30%'}
          label='País:'
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
          ]}
        />
        <CustomSelect
          width={'30%'}
          label='Provincia:'
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
          ]}
        />
      </Flex>

      <Flex margin={4} gap={4}>
        <Field
          label='Código Postal:'
          width={'30%'}
          labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}
        >
          <Input placeholder='Escribe el código postal' type='string' name='codigoPostal' />
        </Field>
        <CustomSelect
          width={'30%'}
          label='Tipo de propiedad:'
          options={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
          ]}
        />
      </Flex>

      <Text fontWeight={'bold'} fontSize={'16px'} margin={4} gap={4}>
        Operación:
      </Text>

      <Flex margin={4} gap={4}>
        <RadioGroup defaultValue='1'>
          <HStack gap='6'>
            <Radio value='1'>Alquiler</Radio>
            <Radio value='2'>Venta</Radio>
          </HStack>
        </RadioGroup>
      </Flex>

      <Flex justifyContent={'flex-end'} margin={4} gap={4}>
        <Button width={'40'} background={'#1E3A8A'}>
          Siguiente
        </Button>
      </Flex>
    </Flex>
  )
}

export default PropertyDetails
