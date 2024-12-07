import { Flex, Grid, GridItem, Input } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';
import { HiUpload } from 'react-icons/hi';
import { ImFilePicture } from 'react-icons/im';

import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Field } from '@/components/ui/field';
import { FileUploadList, FileUploadRoot, FileUploadTrigger } from '@/components/ui/file-upload';
import { STATES } from '@/constants/form-data-constants';

import CustomSelect from '../CustomSelect/CustomSelect';
import { InitialFormState } from '../MenuAnnouncement/MenuAnnouncement';

interface PropertyDetailsProps {
  onNextDetails: () => void;
  formState: InitialFormState
  assingNewValues: (values: Partial<InitialFormState>) => void
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({ onNextDetails, formState, handleInputChange, assingNewValues }) => {
  const handleNextDetails = () => {
    onNextDetails();
  };
  const readImages = (e: ChangeEvent<HTMLInputElement>) => {
    
    if ( e.target.files !== null && e.target.files.length > 0 ) {
      const files = e.target.files as FileList;
        assingNewValues({images: files})


      
      
    }
  }
  return (
    <Flex direction={'column'} py={4} px={8}>
      <Flex flexDirection={'row'} alignItems={'center'} gap={4}>
        <EmptyState
          icon={<ImFilePicture />}
          title='No tienes multimedia cargada'
          description='Aceptamos archivos de imagen o video .jpg y .png'
        />
        <FileUploadRoot  onChange={readImages} accept={['image/*']} maxFiles={20}>
          <FileUploadTrigger asChild>
            <Button variant='outline' size='sm'>
              <HiUpload /> Seleccionar imagenes o videos
            </Button>
          </FileUploadTrigger>
          <FileUploadList  clearable />
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
            options={STATES}
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
  );
};

