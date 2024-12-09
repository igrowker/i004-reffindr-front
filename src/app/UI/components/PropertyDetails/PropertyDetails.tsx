import { Flex, Grid, GridItem, IconButton, Image, Input, Text } from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { HiUpload } from 'react-icons/hi';
import { ImFilePicture } from 'react-icons/im';
import { MdClose } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { Field } from '@/components/ui/field';
import { FileUploadRoot, FileUploadTrigger } from '@/components/ui/file-upload';
import { STATES } from '@/constants/form-data-constants';

import CustomSelect from '../CustomSelect/CustomSelect';
import { InitialFormState } from '../MenuAnnouncement/MenuAnnouncement';

interface PropertyDetailsProps {
  onNextDetails: () => void;
  formState: InitialFormState;
  assingNewValues: (values: Partial<InitialFormState>) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  onNextDetails,
  formState,
  handleInputChange,
  assingNewValues,
}) => {
  const handleNextDetails = () => {
    onNextDetails();
  };
  const [uploadedImagesURLs, setUploadedImagesURLs] = useState<
    { img: string; name: string; size: number; type: string }[]
  >([]);

  const readImages = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      files.map(async (file) => {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);
        const blob = new Blob([buffer], { type: file.type });
        const imageUrl = URL.createObjectURL(blob);
        setUploadedImagesURLs((prev) => [
          ...prev,
          { img: imageUrl, name: file.name, type: file.type, size: file.size },
        ]);
      });

      Array.from(files)[0]
        .arrayBuffer()
        .then((d) => console.log(d));
      assingNewValues({ images: [...formState.images, ...files] });
    }
  };
  const deleteImage = (index: number) => {
    const newImages = structuredClone(uploadedImagesURLs);
    const formStateImages = structuredClone(formState.images);
    newImages.splice(index, 1);
    formStateImages.splice(index, 1);

    setUploadedImagesURLs(newImages);
    assingNewValues({ images: formStateImages });
  };
  return (
    <Flex direction={'column'} py={4} px={8}>
      <Flex mb={5} flexDirection={'row'} alignItems={'center'} gap={4}>
        {formState.images.length == 0 ? (
          <EmptyState
            icon={<ImFilePicture />}
            title='No tienes multimedia cargada'
            description='Aceptamos archivos de imagen o video .jpg y .png'
          />
        ) : (
          <Flex flexShrink={0} flexGrow={0.5} gap={2} overflow='auto' h={'200px'} flexDir='column'>
            {uploadedImagesURLs.map((file, i) => (
              <Flex maxW={'400px'} rounded='sm' key={`${file.name}${i}`}>
                <Image w={'64px'} h={'64px'} objectFit={'cover'} src={file.img} alt={file.name} mr={4} />
                <Grid gridTemplateColumns={'repeat(2,1fr)'} placeContent={'center'} gapX={4}>
                  <GridItem>
                    <Text lineClamp={1}>{file.name}</Text>
                  </GridItem>
                  <GridItem>
                    <IconButton onClick={() => deleteImage(i)} variant='ghost'>
                      <MdClose />
                    </IconButton>
                  </GridItem>
                </Grid>
              </Flex>
            ))}
          </Flex>
        )}

        <FileUploadRoot onChange={readImages} accept={'image/*'} maxFiles={20}>
          <FileUploadTrigger asChild>
            <Button variant='outline' size='sm'>
              <HiUpload /> Seleccionar imagenes o videos
            </Button>
          </FileUploadTrigger>
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
        <GridItem>
          <Field label='Precio de renta:' labelStyles={{ marginBottom: '2', fontWeight: 'bold', fontSize: '16px' }}>
            <Input
              value={formState.price}
              onChange={handleInputChange}
              placeholder='Escribe el precio del alquiler'
              type='number'
              name='price'
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
