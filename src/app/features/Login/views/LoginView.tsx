import { Box, Button, Fieldset, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGoogle, FaTimes } from 'react-icons/fa'

import { onProps } from '@/types'

export const LoginView = ({ onclose, onShowRegister }: onProps) => {
  const { t } = useTranslation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // logica
    console.log('Email:', email)
    console.log('Password:', password)
  }

  const handleClose = () => {
    if (onclose) {
      onclose()
    }
  }

  const handleShowRegister = () => {
    if (onShowRegister) {
      onShowRegister()
    }
  }

  return (
    <Box bg='gray.100' border={'10px'} borderRadius='full'>
      <Fieldset.Root rounded='md' paddingY={10} bg='white' boxShadow='md' paddingX={10} fontSize={'xl'}>
        <IconButton bottom={8} left={8} alignSelf={'end'} size={'xs'} onClick={handleClose}>
          <FaTimes />
        </IconButton>
        <Stack textAlign={'center'} mt={-7}>
          <Fieldset.Legend fontSize='4xl' fontWeight={'bold'} mb={4}>
            {t('login')}
          </Fieldset.Legend>
          <Fieldset.HelperText fontSize={'md'} fontWeight={'medium'}>
            {t('completeFields')}
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content gap={2}>
          <Box>
            <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
              {t('email')}
            </Text>
            <Input
              type='email'
              value={email}
              size={{ base: 'sm', '2xl': 'md' }}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('emailPlaceholder')}
              borderColor='black'
              fontSize={{ base: 'medium', '2xl': 'xl' }}
            />
          </Box>
          <Box>
            <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
              {t('password')}
            </Text>
            <Input
              type='password'
              value={email}
              size={{ base: 'sm', '2xl': 'md' }}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('passwordPlaceholder')}
              borderColor='black'
              fontSize={{ base: 'medium', '2xl': 'xl' }}
            />
          </Box>
        </Fieldset.Content>

        <Stack gap={4} mb={4}>
          <Button
            fontSize={{ base: 'medium', '2xl': 'xl' }}
            type='submit'
            w='full'
            size={{ base: 'sm', '2xl': 'md' }}
            borderColor='black'
            borderWidth='1px'
            bg={'#146EB4'}
            onClick={handleLogin}
          >
            {t('login')}
          </Button>

          <Button
            fontSize={{ base: 'medium', '2xl': 'xl' }}
            colorScheme='red'
            w='full'
            size={{ base: 'sm', '2xl': 'md' }}
            bg='white'
            color='black'
            borderWidth='1px'
            borderColor='black'
            onClick={handleLogin}
          >
            <FaGoogle />
            {t('loginWithGoogle')}
          </Button>

          <Button
            fontSize={{ base: 'medium', '2xl': 'xl' }}
            w='full'
            bg='white'
            size={{ base: 'sm', '2xl': 'md' }}
            color='black'
            borderWidth='1px'
            borderColor='black'
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
    </Box>
  )
}

export default LoginView
