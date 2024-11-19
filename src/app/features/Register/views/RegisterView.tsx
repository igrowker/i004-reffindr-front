import { Box, Button, Fieldset, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebook, FaGoogle, FaTimes } from 'react-icons/fa'

import { onProps } from '@/types'

export const RegisterView = ({ onclose, onShowLogin }: onProps) => {
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
              Regístrate
            </Fieldset.Legend>
            <Fieldset.HelperText fontSize={'md'} fontWeight={'medium'}>
              Completa los siguientes campos:
            </Fieldset.HelperText>
          </Stack>

          <Fieldset.Content gap={2}>
            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                Nombre*
              </Text>
              <Input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Nombre'
                borderColor='black'
                fontSize={'xl'}
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>
            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                Apellido*
              </Text>
              <Input
                fontSize={{ base: 'medium', md: 'xl' }}
                type='text'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Apellido'
                borderColor='black'
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>

            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                Email*
              </Text>
              <Input
                fontSize={{ base: 'medium', md: 'xl' }}
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Correo Electrónico'
                borderColor='black'
                size={{ base: 'sm', '2xl': 'md' }}
              />
            </Box>

            <Box>
              <Text mb={2} fontSize={{ base: 'medium', md: 'xl' }}>
                Contraseña*
              </Text>
              <Input
                fontSize={{ base: 'medium', md: 'xl' }}
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Contraseña'
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
              Regístrate
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
              Regístrate con Google
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
              Regístrate con Facebook
            </Button>
          </Stack>

          <Stack fontSize={{ base: 'medium', '2xl': 'xl' }} direction='column' align='center' gap={3} mt={3}>
            <Stack flexDirection={'row'}>
              <Text>¿Ya tienes cuenta?</Text>
              <Link fontWeight={'bold'} textDecoration={'underline'} href='#' onClick={handleShowLogin}>
                Inicia Sesión
              </Link>
            </Stack>
          </Stack>
        </Fieldset.Root>
      </Box>
    </>
  )
}
