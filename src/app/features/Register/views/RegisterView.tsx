import { Box, Button, Fieldset, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGoogle, FaTimes } from 'react-icons/fa'

import { onProps } from '@/types'

export const RegisterView = ({ onclose, onShowLogin }: onProps) => {
  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    // logica
    console.log('Name:', name)
    console.log('Last Name:', lastName)
    console.log('Email:', email)
    console.log('Password:', password)
  }

  const handleClose = () => {
    if (onclose) {
      onclose()
    }
  }

  const handleShowLogin = () => {
    if (onShowLogin) {
      onShowLogin()
    }
  }

  return (
    <>
      <Box bg='gray.100' border={'10px'} borderRadius='full'>
        <Fieldset.Root rounded='md' paddingY={10} bg='white' boxShadow='md' paddingX={10} fontSize={'xl'}>
          <IconButton bottom={8} left={8} alignSelf={'end'} size={'xs'} onClick={handleClose}>
            <FaTimes />
          </IconButton>
          <Stack textAlign={'center'} mt={-7}>
            <Fieldset.Legend fontSize='4xl' fontWeight={'bold'} mb={4}>
              {t('register')}
            </Fieldset.Legend>
            <Fieldset.HelperText fontSize={'md'} fontWeight={'medium'}>
              {t('completeFields')}
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content gap={2}>
            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                {t('name')}
              </Text>
              <Input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('name')}
                borderColor='black'
                fontSize={'xl'}
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>
            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                {t('surname')}
              </Text>
              <Input
                fontSize={{ base: 'medium', md: 'xl' }}
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={t('surname')}
                borderColor='black'
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>

            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                {t('email')}
              </Text>
              <Input
                fontSize={{ base: 'medium', md: 'xl' }}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('emailPlaceholder')}
                borderColor='black'
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>

            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                {t('password')}
              </Text>
              <Input
                fontSize={{ base: 'medium', md: 'xl' }}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('passwordPlaceholder')}
                borderColor='black'
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>
          </Fieldset.Content>

          <Stack gap={4} mb={4}>
            <Button
              fontSize={{ base: 'medium', '2xl': 'xl' }}
              w='full'
              borderColor='black'
              borderWidth='1px'
              bg={'#146EB4'}
              onClick={handleRegister}
            >
              {t('register')}
            </Button>

            <Button
              fontSize={{ base: 'medium', '2xl': 'xl' }}
              colorScheme='red'
              w='full'
              bg='white'
              color='black'
              borderWidth='1px'
              borderColor='black'
              onClick={handleRegister}
            >
              <FaGoogle />
              {t('registerWithGoogle')}
            </Button>

            <Button
              fontSize={{ base: 'medium', '2xl': 'xl' }}
              w='full'
              bg='white'
              color='black'
              borderWidth='1px'
              borderColor='black'
              onClick={handleRegister}
            >
              <FaFacebook />
              {t('registerWithFacebook')}
            </Button>
          </Stack>

          <Stack fontSize={{ base: 'medium', '2xl': 'xl' }} direction='column' align='center' gap={3} mt={3}>
            <Stack flexDirection={'row'}>
              <Text>{t('haveAccount')}</Text>
              <Link fontWeight={'bold'} textDecoration={'underline'} href='#' onClick={handleShowLogin}>
                {t('login')}
              </Link>
            </Stack>
          </Stack>
        </Fieldset.Root>
      </Box>
    </>
  )
}
