import { Button, Fieldset, Flex, Float, Grid, GridItem, IconButton, Input, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react';
import moment from 'moment';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GoPencil } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';

import { Field } from '@/components/ui/field';
import { FileUploadRoot, FileUploadTrigger } from '@/components/ui/file-upload';
import { NativeSelectField, NativeSelectRoot } from '@/components/ui/native-select';
import { toaster } from '@/components/ui/toaster';
import { GENRES, STATES } from '@/constants/form-data-constants';
import { useForm } from '@/hooks/useForm';
import type { EditUserRequest } from '@/interfaces/user';
import { userStore } from '@/stores/userStore';

import { ConfirmationModal } from './ConfirmationModal';

export const ViewEditProfile = () => {
  const { t } = useTranslation();
  const actualUser = userStore((state) => state.user);
  const updateUser = userStore((state) => state.updateUser);
  // const isUserDataPending = userStore((state) => state.isUserDataPending);

  const { formState, handleInputChange, assignAllNewValues } = useForm<EditUserRequest>(
    {
      email: '',
      name: '',
      lastName: '',
      dni: '',
      phone: '',
      address: '',
      birthDate: '',
      profileImageUrl: null,
      profileImage: null,
    },
    () => ({})
  );

  const readImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null && e.target.files.length > 0) {
      const fileReader = new FileReader();
      const file = e.target.files.item(0) as File;

      fileReader.onload = (ev) => {
        if (ev.target !== null) {
          assignAllNewValues({ profileImageUrl: ev.target.result as string, profileImage: file });
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (actualUser !== null) {
      assignAllNewValues({
        ...actualUser,
        profileImageUrl: actualUser.imageProfileUrl,
        birthDate: moment(actualUser.birthDate).format('yyyy-MM-DD'),
      });
    }
  }, [actualUser]);

  const [isEditing, setIsEditing] = useState(false); // Controla edición
  const [showModal, setShowModal] = useState(false); // Controla el modal

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setShowModal(true); // Muestra el modal al guardar
  };

  const handleConfirmSave = async () => {
    await updateUser(formState);
    toaster.create({
      title: 'Perfil actualizado exitosamente',
      type: 'success',
    });
    setIsEditing(false); // Deshabilita los campos
    setShowModal(false); // Oculta el modal
  };

  const handleCancelSave = () => {
    setShowModal(false); // Oculta el modal
  };

  return (
    <Flex display={'flex'} bgColor='white' py={4} flexDir={'column'}>
      <Flex justifyContent='end'>
        <Button variant='outline' onClick={handleEditClick} mr={4}>
          {isEditing ? t('ViewEditProfile.button-edit-active') : t('ViewEditProfile.button-edit')}
          <MdEdit />
        </Button>
      </Flex>
      <Fieldset.Root
        w={'full'}
        bg={'white'}
        display={'flex'}
        justifyContent={'start'}
        px={10}
        flexDirection={{ base: 'column', lg: 'row' }}
        gap={'8'}
        position='relative'
      >
        <Flex flexDir='column' alignItems='center'>
          <Avatar.Root w={'7em'} h={'7em'}>
            <Avatar.Image src={formState.profileImageUrl ?? ''} />
            <Avatar.Fallback>LF</Avatar.Fallback>
            <Float placement={'bottom-end'} offset='4'>
              <FileUploadRoot onChange={readImage}>
                <FileUploadTrigger>
                  <IconButton
                    disabled={!isEditing}
                    rounded='full'
                    size={'md'}
                    bg='#efefef'
                    color='black'
                    outline='0.3em solid'
                    outlineColor='bg'
                  >
                    <GoPencil />
                  </IconButton>
                </FileUploadTrigger>
              </FileUploadRoot>
            </Float>
          </Avatar.Root>

          <Text textAlign={'center'} py={'1'} px={'3'} bg={'gray.100'} borderRadius={'sm'}>
            {actualUser?.name} {actualUser?.lastName}
          </Text>
          <Text>{t('ViewEditProfile.role')}</Text>
        </Flex>
        <Grid flexGrow={1} gap={3} gridTemplateColumns={'repeat(2, 1fr)'}>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field label={t('ViewEditProfile.name')}>
              <Input
                my={2}
                name='name'
                placeholder='Lautaro'
                value={formState.name}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>

          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field label={t('ViewEditProfile.last-name')}>
              <Input
                my={2}
                name='lastName'
                placeholder='Fazzito'
                value={formState.lastName}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 2 }}>
            <Field label={t('ViewEditProfile.phone')}>
              <Input
                my={2}
                placeholder={'Teléfono'}
                name='phone'
                value={formState.phone}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field label={t('ViewEditProfile.document-number')}>
              <Input
                my={2}
                placeholder='XX.XXX.XXX'
                type='text'
                value={formState.dni}
                name='dni'
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field label={t('ViewEditProfile.salary-range.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? 'none' : 'auto', opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name='rangoSalarial'
                  items={[t('ViewEditProfile.salary-range.placeholder')]}
                />
              </NativeSelectRoot>
            </Field>
          </GridItem>
          <GridItem colSpan={2}>
            <Field label={t('ViewEditProfile.email')}>
              <Input
                my={2}
                name='email'
                type='email'
                value={formState.email}
                onChange={handleInputChange}
                placeholder='xxxx@gmail.com'
                disabled={!isEditing}
              />
            </Field>
          </GridItem>
          <GridItem>
            <Field label={t('ViewEditProfile.birthdate')}>
              <Input
                my={2}
                name='birthDate'
                onChange={handleInputChange}
                value={formState.birthDate}
                disabled={!isEditing}
                type={'date'}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field label={t('ViewEditProfile.gender.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? 'none' : 'auto', opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name='genero'
                  items={[t('ViewEditProfile.gender.placeholder'), ...GENRES]}
                />
              </NativeSelectRoot>
            </Field>
          </GridItem>
          <GridItem>
            <Field label={t('ViewEditProfile.province.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? 'none' : 'auto', opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name='provincia'
                  items={[t('ViewEditProfile.province.placeholder'), ...STATES]}
                />
              </NativeSelectRoot>
            </Field>
          </GridItem>
          <GridItem colSpan={2}>
            <Field label={t('ViewEditProfile.address.label')}>
              <Input
                my={2}
                value={formState.address}
                name='address'
                type='text'
                placeholder={t('ViewEditProfile.address.placeholder')}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>

          <GridItem colSpan={2}>
            <Flex justifyContent='end' alignItems='center'>
              <Button bg={'blue.700'} type='submit' disabled={!isEditing} onClick={handleSaveClick}>
                {t('ViewEditProfile.button-save')}
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Fieldset.Root>
      <ConfirmationModal isOpen={showModal} onConfirm={handleConfirmSave} onCancel={handleCancelSave} />
    </Flex>
  );
};
