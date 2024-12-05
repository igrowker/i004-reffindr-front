import { Button, Fieldset, Flex, Float, Grid, GridItem, IconButton, Input, Text } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GoPencil } from 'react-icons/go'
import { MdEdit } from 'react-icons/md'

import { Alert } from '@/components/ui/alert'
import { Field } from '@/components/ui/field'
import { NativeSelectField, NativeSelectRoot } from '@/components/ui/native-select'
import { useForm } from '@/hooks/useForm'
import { User } from '@/interfaces/user'
import { userStore } from '@/stores/userStore'

import { ConfirmationModal } from './ConfirmationModal'

export const ViewEditProfile = () => {
  const { t } = useTranslation()
  const actualUser = userStore((state) => state.user)
  const updateUser = userStore((state) => state.updateUser)

  const [isEditing, setIsEditing] = useState(false) // Controla edición
  const [showModal, setShowModal] = useState(false) // Controla el modal
  const [errors, setErrors] = useState<string[] | null>(null)
  const { formState, handleInputChange } = useForm<User>(actualUser, () => ({ address: '' }))

  const handleEditClick = () => {
    setIsEditing(!isEditing)
  }

  const handleSaveClick = () => {
    setShowModal(true) // Muestra el modal al guardar
  }

  const handleConfirmSave = async () => {
    const response = await updateUser(formState)

    if (response.hasErrors == true) {
      setErrors(response.errors)
    }

    // setIsEditing(false) // Deshabilita los campos
    setShowModal(false) // Oculta el modal
  }

  const handleCancelSave = () => {
    setShowModal(false) // Oculta el modal
  }

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
            <Avatar.Image src={actualUser.imageProfileUrl} />
            <Avatar.Fallback>LF</Avatar.Fallback>
            <Float placement={'bottom-end'} offset='4'>
              <IconButton rounded='full' size={'md'} bg='#efefef' color='black' outline='0.3em solid' outlineColor='bg'>
                <GoPencil />
              </IconButton>
            </Float>
          </Avatar.Root>

          <Text textAlign={'center'} py={'1'} px={'3'} bg={'gray.100'} borderRadius={'sm'}>
            {actualUser?.name} {actualUser?.lastName}
          </Text>
          <Text>{t('ViewEditProfile.role')}</Text>
        </Flex>
        <Grid flexGrow={1} gap={3} gridTemplateColumns={'repeat(2, 1fr)'}>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field required label={t('ViewEditProfile.name')}>
              <Input
                my={2}
                name='name'
                placeholder='Lautaro'
                disabled={!isEditing}
                defaultValue={actualUser.name}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field required label={t('ViewEditProfile.last-name')}>
              <Input
                my={2}
                name='apellido'
                placeholder='Fazzito'
                disabled={!isEditing}
                defaultValue={actualUser.lastName}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field required label={t('ViewEditProfile.document-number')}>
              <Input
                my={2}
                placeholder='XX.XXX.XXX'
                type='text'
                name='numeroDocumento'
                defaultValue={actualUser.dni}
                disabled={!isEditing}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field required label={t('ViewEditProfile.salary-range.label')}>
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
            <Field required label={t('ViewEditProfile.email')}>
              <Input
                my={2}
                name='email'
                type='email'
                placeholder='xxxx@gmail.com'
                defaultValue={actualUser.email}
                disabled={!isEditing}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Field required label={t('ViewEditProfile.gender.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? 'none' : 'auto', opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name='genero'
                  items={[t('ViewEditProfile.gender.placeholder')]}
                />
              </NativeSelectRoot>
            </Field>
          </GridItem>
          <GridItem>
            <Field required label={t('ViewEditProfile.province.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? 'none' : 'auto', opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name='provincia'
                  items={[t('ViewEditProfile.province.placeholder')]}
                />
              </NativeSelectRoot>
            </Field>
          </GridItem>
          <GridItem colSpan={2}>
            <Field required label={t('ViewEditProfile.address.label')}>
              <Input
                my={2}
                name='direccion'
                type='text'
                placeholder={t('ViewEditProfile.address.placeholder')}
                disabled={!isEditing}
                defaultValue={actualUser.address}
                onChange={handleInputChange}
              />
            </Field>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex justifyContent='end' alignItems='center'>
              <Button bg={'blue.700'} disabled={!isEditing} onClick={handleSaveClick}>
                {t('ViewEditProfile.button-save')}
              </Button>
            </Flex>
          </GridItem>
          {errors?.map((message, i) => (
            <GridItem colSpan={{base: 2, lg: 1}}>
              <Alert

                onClose={() => setErrors(errors.filter((_, index) => index !== i))}
                closable
                status='error'
                title='Campos invalidos'
              >
                {message}
              </Alert>
            </GridItem>
          ))}
        </Grid>
      </Fieldset.Root>
      <ConfirmationModal setShowModal={(v: boolean) => setShowModal(v) } isOpen={showModal} onConfirm={handleConfirmSave} onCancel={handleCancelSave} />
    </Flex>
  )
}
