import { Box, Button, Fieldset, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react'
import { FaFacebook, FaGoogle, FaTimes } from 'react-icons/fa'

import { onProps } from '@/types'
import { useState } from 'react'

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
    <Box bg='gray.100' top={100} left={250} width={'30rem'}>
      <Fieldset.Root paddingY={10} bg='white' boxShadow='md' paddingX={10} fontSize={'xl'}>
        <IconButton bottom={8} left={8} alignSelf={'end'} size={'xs'} onClick={handleClose}>
          <FaTimes />
        </IconButton>
        <Stack textAlign={'center'} mt={-7}>
          <Fieldset.Legend fontSize='4xl' fontWeight={'bold'} mb={4}>
            Regístrate
          </Fieldset.Legend>
          <Fieldset.HelperText  fontSize={'md'} fontWeight={'medium'}>Completa los siguientes campos:</Fieldset.HelperText>
        </Stack>

        <Fieldset.Content  mb={5}>
          <Text fontSize={'xl'}>Nombre*</Text>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Nombre'
              borderColor='black'
              fontSize={'xl'}
            />

          <Text fontSize={'xl'}>Apellido*</Text>
            <Input
             fontSize={'xl'}
              type='text'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Apellido'
              borderColor='black'
            />        

          <Text fontSize={'xl'}>Email*</Text>
            <Input
             fontSize={'xl'}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Correo Electrónico'
              borderColor='black'
            />
          

          <Text fontSize={'xl'}>Contraseña*</Text>
            <Input
             fontSize={'xl'}
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Contraseña'
              borderColor='black'
            />
        </Fieldset.Content>

        <Stack gap={4} mb={4}>
          <Button  fontSize={'xl'} w='full' borderColor='black' borderWidth='1px' bg={'#146EB4'} onClick={handleRegister}>
            Regístrate
          </Button>

          <Button
           fontSize={'xl'}
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

          <Button  fontSize={'xl'} w='full' bg='white' color='black' borderWidth='1px' borderColor='black' onClick={handleRegister}>
            <FaFacebook />
            Regístrate con Facebook
          </Button>
        </Stack>

        <Stack direction='column' align='center' gap={3} mt={3}>
          <Stack flexDirection={'row'}>
            <Text>¿Ya tienes cuenta?</Text>
            <Link fontWeight={'bold'} textDecoration={'underline'} href='#' onClick={handleShowLogin}>
              Inicia Sesión
            </Link>
          </Stack>
        </Stack>
      </Fieldset.Root>
    </Box>
  )
}
