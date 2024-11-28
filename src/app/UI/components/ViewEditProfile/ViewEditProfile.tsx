import { useState } from "react";
import { Button, Fieldset, Flex, Input, Box, Text, IconButton } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { GoPencil } from "react-icons/go";
import { useTranslation } from "react-i18next";
import { NativeSelectField, NativeSelectRoot } from "@/components/ui/native-select"
import { Avatar } from "@/components/ui/avatar"
import { ConfirmationModal } from "./ConfirmationModal";

export const ViewEditProfile = () => {
  const { t } = useTranslation();

  const [isEditing, setIsEditing] = useState(false); // Controla edición
  const [showModal, setShowModal] = useState(false); // Controla el modal

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setShowModal(true); // Muestra el modal al guardar
  };

  const handleConfirmSave = () => {
    setIsEditing(false); // Deshabilita los campos
    setShowModal(false); // Oculta el modal
  };

  const handleCancelSave = () => {
    setShowModal(false); // Oculta el modal
  };

  return (
    <Flex w={'full'} h={'full'} display={'flex'} flexDir={'column'} padding={'5'}>
      <IconButton onClick={handleEditClick} justifyContent={'start'} fontSize={'md'} p={2} bg={'transparent'} color={'black'} textDecoration={'underline'}>
        {t('ViewEditProfile.button-edit')}
      </IconButton>
      <Fieldset.Root w={'full'} h={'80%'} py={'10'} bg={'white'} display={'flex'} justifyContent={'center'} flexDirection={{ base: 'column', md:'row' }} gap={'8'} >
        <Box w={'20%'}  display={'flex'} alignItems={'center'} flexDirection={'column'} gapY={1}>
          <Box position={'relative'} display={'inline-block'}>
            <Avatar w={'7em'} h={'7em'} src="/public/AvatarImage1.png" />
            <Button  position="absolute"  bottom="1px"  right="-2"  color={'black'}  bg="gray.300"  borderRadius="full"  p="0.5"  display="flex"  justifyContent="center"  alignItems="center"  boxShadow="lg">
              <GoPencil />
            </Button>
          </Box>
          <Text textAlign={'center'} py={'1'} px={'3'} bg={'gray.100'} borderRadius={'sm'}>Lautaro Fazzito</Text>
          <Text>{t('ViewEditProfile.role')}</Text>
        </Box>
        <Box  w={'70%'} display={'flex'} flexDirection={'column'} gapY={'8'} pt={'10'}>
          <Box display={'flex'} gap={'3'} flexDirection={{ base: 'column', md: 'row' }}>
            <Field label={t('ViewEditProfile.name')}>
              <Input my={2} name="name" placeholder="Lautaro"  disabled={!isEditing} />
            </Field>
            <Field label={t('ViewEditProfile.last-name')}>
              <Input my={2} name="apellido" placeholder="Fazzito"  disabled={!isEditing} />
            </Field>
          </Box>
          <Box display={'flex'} gap={'3'} flexDirection={{ base: 'column', md: 'row' }}>
            <Field label={t('ViewEditProfile.document-number')}>
              <Input my={2} placeholder="XX.XXX.XXX" type="number" name="numeroDocumento"  disabled={!isEditing} />
            </Field>
            <Field label={t('ViewEditProfile.salary-range.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? "none" : "auto", opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name="rangoSalarial"
                  items={[
                    t('ViewEditProfile.salary-range.placeholder')
                  ]}
                />
              </NativeSelectRoot>
            </Field>
          </Box>
          <Field label={t('ViewEditProfile.email')}>
            <Input my={2} name="email" type="email" placeholder="xxxx@gmail.com"  disabled={!isEditing} />
          </Field>
          <Box display={'flex'} gap={'3'} flexDirection={{ base: 'column', md: 'row' }}>
            <Field label={t('ViewEditProfile.gender.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                style={{ pointerEvents: !isEditing ? "none" : "auto", opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name="genero"
                  items={[
                    t('ViewEditProfile.gender.placeholder')
                  ]}
                />
              </NativeSelectRoot>
            </Field>
            <Field label={t('ViewEditProfile.province.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  style={{ pointerEvents: !isEditing ? "none" : "auto", opacity: !isEditing ? 0.6 : 1 }}
                  my={2}
                  name="provincia"
                  items={[
                    t('ViewEditProfile.province.placeholder')
                  ]}
                />
              </NativeSelectRoot>
            </Field>
          </Box>
          <Field label={t('ViewEditProfile.address.label')}>
            <Input my={2} name="direccion" type="text" placeholder={t('ViewEditProfile.address.placeholder')}  disabled={!isEditing} />
          </Field>
          <Box display={'flex'} justifyContent={'end'}>
          <Button bg={"blue"} type="submit" alignSelf="flex-start" disabled={!isEditing} onClick={handleSaveClick} >
          {t('ViewEditProfile.button-save')}
          </Button>
          </Box>
        </Box>
      </Fieldset.Root>
      <ConfirmationModal
        isOpen={showModal}
        onConfirm={handleConfirmSave}
        onCancel={handleCancelSave}
      />
    </Flex>
  )
}
