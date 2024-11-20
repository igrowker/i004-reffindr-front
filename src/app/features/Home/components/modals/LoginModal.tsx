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
  onShowRegister: () => void
  isOpen: boolean
  onOpenChange: () => void
}

export const LoginModal = ({ onShowRegister, isOpen, onOpenChange }: Props) => {
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // logica
    console.log('Email:', email)
    console.log('Password:', password)
  }

  const handleShowRegister = () => {
    if (onShowRegister) {
      onShowRegister()
    }
  }

  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={onOpenChange}
      lazyMount
      closeOnInteractOutside
      placement={'center'}
      motionPreset='slide-in-left'
    >
      <DialogBackdrop />
      <DialogTrigger asChild>
        <Button size={{ base: 'xs', sm: 'md' }} variant='solid' colorPalette={'blue'}>
          Iniciar sesión
        </Button>
      </DialogTrigger>
      <DialogContent rounded='sm'>
        <DialogHeader>
          <DialogTitle textAlign='center' fontSize='4xl' fontWeight={'bold'} mb={4}>
            {t('login')}
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
                
                <Field label={t('email')} required>

                <Input
                  type='email'
                  value={email}
                  size={{ base: 'md', '2xl': 'md' }}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('emailPlaceholder')}
                  fontSize={{ base: 'medium', '2xl': 'xl' }}
                />
                </Field>
              </Box>
              <Box>
                
                <Field label={t('password')} required>

                <Input
                  type='password'
                  value={password}
                  size={{ base: 'md', '2xl': 'md' }}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('passwordPlaceholder')}
                  fontSize={{ base: 'medium', '2xl': 'xl' }}
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
                onClick={handleLogin}
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
                onClick={handleLogin}
              >
                <FaFacebook />
                {t('loginWithFacebook')}
              </Button>
            </Stack>

            <Stack fontSize={{ base: 'medium', '2xl': 'xl' }} direction='column' align='center' gap={3} mt={3}>
              <Link href='#' textDecoration={'underline'}>
                {t('forgotPassword')}
              </Link>

              <Stack flexDirection={'row'}>
                <Text>{t('dontHaveAccount')}</Text>
                <Link fontWeight={'bold'} textDecoration={'underline'} href='#' onClick={handleShowRegister}>
                  {t('register')}
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
