import { Box, Button, Fieldset, Input, Link, Stack, Text } from '@chakra-ui/react'
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
import { useForm } from '@/hooks/useForm'
import { useLogin } from '@/hooks/useLogin'

interface Props {
  onShowRegister: () => void
  isOpen: boolean
  onOpenChange: () => void
}

const validate = (values: { email: string; password: string }) => {
  const errors: { email: string | null; password: string | null } = { email: null, password: null }
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length <= 3) {
    errors.password = 'Password must be longer than 3 characters'
  }
  return errors
}

export const LoginModal = ({ onShowRegister, isOpen, onOpenChange }: Props) => {
  const { t } = useTranslation()
  const { login } = useLogin()

  const { formState, errors, handleInputChange, handleSubmit } = useForm({ email: '', password: '' }, validate)

  const handleLogin = async () => {
    await login(formState.email, formState.password)
    console.log('Login OK')
  }

  const handleShowRegister = () => {
    if (onShowRegister) {
      onShowRegister()
    }
  }

  return (
    <DialogRoot
      size='xs'
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
                    name='email'
                    value={formState.email}
                    onChange={handleInputChange}
                    size={{ base: 'md', '2xl': 'md' }}
                    placeholder={t('emailPlaceholder')}
                    fontSize={{ base: 'medium', '2xl': 'xl' }}
                  />
                  {errors.email && <Text color='red.500'>{errors.email}</Text>}
                </Field>
              </Box>
              <Box>
                <Field label={t('password')} required>
                  <Input
                    type='password'
                    name='password'
                    value={formState.password}
                    onChange={handleInputChange}
                    size={{ base: 'md', '2xl': 'md' }}
                    placeholder={t('passwordPlaceholder')}
                    fontSize={{ base: 'medium', '2xl': 'xl' }}
                  />
                  {errors.password && <Text color='red.500'>{errors.password}</Text>}
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
                onClick={() => handleSubmit(handleLogin)}
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
