import { Button, Fieldset, Flex, Input, Box, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { GoPencil } from "react-icons/go";
import { useTranslation } from "react-i18next";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"
import { Avatar } from "@/components/ui/avatar"

export const ViewEditProfile = () => {
  const { t } = useTranslation();

  return (
    <Flex w={'full'} h={'100vh'} padding={'5'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Fieldset.Root size="lg" maxW="xl" spaceY={'16 '} display={'flex'} flexDirection={{ base: 'column', md: 'row' }} gap={'8'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'start'} gapY={1}>
          <Box position={'relative'} display={'inline-block'}>
            <Avatar w={'7em'} h={'7em'} src="/public/AvatarImage1.png" />
            <Button
              position="absolute"
              bottom="1px"
              right="-2"
              color={'black'}
              bg="gray.300"
              borderRadius="full"
              p="0.5"
              display="flex"
              justifyContent="center"
              alignItems="center"
              boxShadow="lg"
            >
              <GoPencil />
            </Button>
          </Box>
          <Text textAlign={'center'} py={'1'} px={'3'} bg={'gray.100'} borderRadius={'sm'}>Lautaro Fazzito</Text>
          <Text>{t('ViewEditProfile.role')}</Text>
        </Box>
        <Box display={'flex'} flexDirection={'column'} gapY={'5'}>
          <Box display={'flex'} gap={'3'} flexDirection={{ base: 'column', md: 'row' }}>
            <Field label={t('ViewEditProfile.name')}>
              <Input name="name" placeholder="Lautaro" />
            </Field>
            <Field label={t('ViewEditProfile.last-name')}>
              <Input name="apellido" placeholder="Fazzito" />
            </Field>
          </Box>
          <Box display={'flex'} gap={'3'} flexDirection={{ base: 'column', md: 'row' }}>
            <Field label={t('ViewEditProfile.document-number')}>
              <Input placeholder="XX.XXX.XXX" type="number" name="numeroDocumento" />
            </Field>
            <Field label={t('ViewEditProfile.salary-range.label')}>
              <NativeSelectRoot>
                <NativeSelectField
                  name="rangoSalarial"
                  items={[
                    t('ViewEditProfile.salary-range.placeholder')
                  ]}
                />
              </NativeSelectRoot>
            </Field>
          </Box>
          <Field label={t('ViewEditProfile.email')}>
            <Input name="email" type="email" placeholder="xxxx@gmail.com" />
          </Field>
          <Box display={'flex'} gap={'3'} flexDirection={{ base: 'column', md: 'row' }}>
            <Field label={t('ViewEditProfile.gender.label')}>
              <NativeSelectRoot>
                <NativeSelectField
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
                  name="provincia"
                  items={[
                    t('ViewEditProfile.province.placeholder')
                  ]}
                />
              </NativeSelectRoot>
            </Field>
          </Box>
          <Field label={t('ViewEditProfile.address.label')}>
            <Input name="direccion" type="text" placeholder={t('ViewEditProfile.address.placeholder')} />
          </Field>
          <Button type="submit" alignSelf="flex-start">
            Submit
          </Button>
        </Box>
      </Fieldset.Root>
    </Flex>
  )
}
