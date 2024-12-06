import { Box, Fieldset, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

import { ErrorPopover } from '@/app/UI/components/Popover/Popover'
import { Button } from '@/components/ui/button'
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
import { PasswordInput } from '@/components/ui/password-input'
import { UserRoles } from '@/constants/auth-account-constants'
import { useRegister } from '@/hooks/useAuth'
import { useForm } from '@/hooks/useForm'
import { validateRegister } from '@/utils/validate'

interface Props {
  onShowLogin: () => void
  isOpen: boolean
  onOpenChange?: ((details: { open: boolean }) => void) | undefined
}

export const RegisterModal = ({ isOpen, onShowLogin, onOpenChange }: Props) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(false)
  const { register, errorsMessage } = useRegister()
  const location = useLocation()
  const { formState, errors, handleInputChange, handleSubmit } = useForm(
    { name: '', lastName: '', email: '', password: '' },
    validateRegister
  )

  const handleRegisterSubmit = async () => {
    setIsLoading(true)
    const isTenant = location.pathname.includes('inquilinos')

    const resp = await register({
      roleId: isTenant ? UserRoles.Tenant : UserRoles.Owner,
      name: formState.name,
      lastName: formState.lastName,
      email: formState.email,
      password: formState.password,
    })

    setIsLoading(false)

    if (resp !== true) {
      if (onOpenChange) {
        onOpenChange({ open: false })
      }
      onShowLogin()
    }
  }
  return (
    <DialogRoot
      size={'sm'}
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
          {t('landing.register')}
        </Button>
      </DialogTrigger>
      <DialogContent rounded='sm'>
        <DialogHeader>
          <DialogTitle textAlign='center' fontSize='4xl' fontWeight={'bold'} mb={4}>
            {t('register')}
          </DialogTitle>
        </DialogHeader>
        <DialogBody>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              console.log('hol')
              handleSubmit(handleRegisterSubmit)
            }}
          >
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
                      name='name'
                      type='text'
                      value={formState.name ?? ''}
                      size={{ base: 'md', '2xl': 'md' }}
                      onChange={handleInputChange}
                      placeholder={t('name')}
                      fontSize={{ base: 'medium', '2xl': 'xl' }}
                    />
                    {errors.name && <Text color='red.500'>{errors.name}</Text>}
                  </Field>
                </Box>
                <Box>
                  <Field label={t('surname')} required>
                    <Input
                      name='lastName'
                      type='text'
                      fontSize={{ base: 'medium', '2xl': 'xl' }}
                      value={formState.lastName}
                      onChange={handleInputChange}
                      placeholder={t('surname')}
                      size={{ base: 'md', '2xl': 'md' }}
                    />
                    {errors.lastName && <Text color='red.500'>{errors.lastName}</Text>}
                  </Field>
                </Box>

                <Box>
                  <Field label={t('email')} required>
                    <Input
                      name='email'
                      fontSize={{ base: 'medium', '2xl': 'xl' }}
                      type='email'
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder={t('emailPlaceholder')}
                      size={{ base: 'md', '2xl': 'md' }}
                    />
                    {errors.email && <Text color='red.500'>{errors.email}</Text>}
                  </Field>
                </Box>

                <Box>
                  <Field label={t('password')} required>
                    <PasswordInput
                      name='password'
                      fontSize={{ base: 'medium', '2xl': 'xl' }}
                      type='password'
                      value={formState.password}
                      onChange={handleInputChange}
                      placeholder={t('passwordPlaceholder')}
                      size={{ base: 'md', '2xl': 'md' }}
                    />
                    {errors.password && <Text color='red.500'>{errors.password}</Text>}
                  </Field>
                </Box>
              </Fieldset.Content>
              {errorsMessage && (
                <Box position={'absolute'} top={150} left={-4}>
                  <ErrorPopover errorsMessage={errorsMessage} />
                </Box>
              )}

              <Stack gap={4} mb={4}>
                <Button
                  fontSize={{ base: 'medium', '2xl': 'xl' }}
                  size={{ base: 'md', '2xl': 'md' }}
                  type='submit'
                  variant='solid'
                  colorPalette={'blue'}
                  rounded='xs'
                  loading={isLoading}
                loadingText={t('registering')}
                >
                  {t('register')}
                </Button>

                <Button
                  fontSize={{ base: 'medium', '2xl': 'xl' }}
                  size={{ base: 'md', '2xl': 'md' }}
                  variant='outline'
                  rounded='xs'
                  type='button'
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
                  type='button'
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
          </form>
        </DialogBody>
        <DialogCloseTrigger top='2' insetEnd='2' bg='gray.900' color='white' />
      </DialogContent>
    </DialogRoot>
  )
}
