import { Box, Button, Fieldset, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Field } from '@/components/ui/field'

interface Props {
  onShowLogin: () => void
  isOpen: boolean
  onOpenChange?: ((details: { open: boolean }) => void) | undefined
}

export const RegisterModal = ({ isOpen, onShowLogin, onOpenChange }: Props) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={onOpenChange}
      lazyMount
      closeOnInteractOutside
      placement={'center'}
      motionPreset='slide-in-right'
    >
      <DialogBackdrop />
      <DialogTrigger asChild>
        <Button size={{ base: 'xs', sm: 'md' }} variant='outline' bg={'white'} colorPalette={'bg'}>
          Registrarse
        </Button>
      </DialogTrigger>
      <DialogContent rounded='sm'>
        <DialogHeader>
          <DialogTitle textAlign='center' fontSize='4xl' fontWeight={'bold'} mb={4}>
            {t('register')}
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Fieldset.Root>
            <Stack textAlign={'center'} mt={-7}>
              <Fieldset.HelperText fontSize={'md'} fontWeight={'medium'}>
                {t('completeFields')}
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content gap={2}>
              <Box>
                <Field label={t('name')} required>
                  <Input
                    type='text'
                    value={name}
                    size={{ base: 'md', '2xl': 'md' }}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t('name')}
                    fontSize={{ base: 'medium', '2xl': 'xl' }}
                  />
                </Field>
              </Box>
              <Box>
                <Field label={t('surname')} required>
                  <Input
                    type='text'
                    fontSize={{ base: 'medium', '2xl': 'xl' }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder={t('surname')}
                    size={{ base: 'md', '2xl': 'md' }}
                  />
                </Field>
              </Box>

              <Box>
                <Field label={t('email')} required>
                  <Input
                    fontSize={{ base: 'medium', '2xl': 'xl' }}
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('emailPlaceholder')}
                    size={{ base: 'md', '2xl': 'md' }}
                  />
                </Field>
              </Box>

              <Box>
                <Field label={t('password')} required>
                  <Input
                    fontSize={{ base: 'medium', '2xl': 'xl' }}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t('passwordPlaceholder')}
                    size={{ base: 'md', '2xl': 'md' }}
                  />
                </Field>
              </Box>
            </Fieldset.Content>

            <Stack gap={4} mb={4}>
              <Button
                fontSize={{ base: 'medium', '2xl': 'xl' }}
                size={{ base: 'md', '2xl': 'md' }}
                type='submit'
                variant='solid'
                colorPalette={'blue'}
                rounded='xs'
              >
                {t('login')}
              </Button>

              <Button
                fontSize={{ base: 'medium', '2xl': 'xl' }}
                size={{ base: 'md', '2xl': 'md' }}
                variant='outline'
                rounded='xs'
                colorPalette={'black'}
              >
                <FaGoogle />
                {t('loginWithGoogle')}
              </Button>

              <Button
                fontSize={{ base: 'medium', '2xl': 'xl' }}
                size={{ base: 'md', '2xl': 'md' }}
                variant='outline'
                rounded='xs'
                colorPalette={'black'}
              >
                <FaFacebook />
                {t('loginWithFacebook')}
              </Button>
            </Stack>

            <Stack fontSize={{ base: 'medium', '2xl': 'xl' }} direction='column' align='center' gap={3} mt={3}>
              <Stack flexDirection={'row'}>
                <Text>{t('haveAccount')}</Text>
                <Link onClick={onShowLogin} fontWeight={'bold'} textDecoration={'underline'} href='#'>
                  {t('login')}
                </Link>
              </Stack>
            </Stack>
          </Fieldset.Root>
        </DialogBody>
        <DialogCloseTrigger top='2' insetEnd='2' bg='gray.900' color='white' />
      </DialogContent>
    </DialogRoot>
  )
}
