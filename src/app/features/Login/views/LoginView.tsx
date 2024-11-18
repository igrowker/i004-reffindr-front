import { Box, Button, Fieldset, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebook, FaGoogle, FaTimes } from 'react-icons/fa'

import { Field } from '@/components/ui/field'
import { onCloseProps } from '@/types'

export const LoginView = ({ onclose }: onCloseProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // logica
    console.log('Email:', email)
    console.log('Password:', password)
  }

  const handleClose = () => {
    onclose()
  }

  return (
    <Box bg='gray.100' top={100} left={250} width={'30rem'}>
      <Fieldset.Root paddingY={10} bg='white' boxShadow='md' paddingX={10} fontSize={'xl'}>
        <IconButton bottom={8} left={8} alignSelf={'end'} size={'xs'} onClick={handleClose}>
          <FaTimes />
        </IconButton>
        <Stack textAlign={'center'} mt={-7}>
          <Fieldset.Legend fontSize='4xl' fontWeight={'bold'} mb={4}>
            Iniciar sesión
          </Fieldset.Legend>
          <Fieldset.HelperText fontWeight={'medium'}>Completa los siguientes campos:</Fieldset.HelperText>
        </Stack>

        <Fieldset.Content mb={5}>
          <Text fontSize={'xl'}>Email*</Text>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Correo Electrónico'
            borderColor='black'
            fontSize={'xl'}
          />

          <Text fontSize={'xl'}> Contraseña*</Text>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Contraseña'
            borderColor='black'
            fontSize={'xl'}
          />
        </Fieldset.Content>

        <Stack gap={4} mb={4}>
          <Button
            fontSize={'xl'}
            type='submit'
            w='full'
            borderColor='black'
            borderWidth='1px'
            bg={'#146EB4'}
            onClick={handleLogin}
          >
            Iniciar Sesión
          </Button>

          <Button
            fontSize={'xl'}
            colorScheme='red'
            w='full'
            bg='white'
            color='black'
            borderWidth='1px'
            borderColor='black'
            onClick={handleLogin}
          >
            <FaGoogle />
            Iniciar sesión con Google
          </Button>

          <Button
            fontSize={'xl'}
            w='full'
            bg='white'
            color='black'
            borderWidth='1px'
            borderColor='black'
            onClick={handleLogin}
          >
            <FaFacebook />
            Iniciar sesión con Facebook
          </Button>
        </Stack>

        <Stack direction='column' align='center' gap={3} mt={3}>
          <Link href='#' textDecoration={'underline'}>
            ¿Olvidaste tu contraseña?
          </Link>

          <Stack flexDirection={'row'}>
            <Text>¿No tienes cuenta?</Text>
            <Link fontWeight={'bold'} textDecoration={'underline'} href='#'>
              Regístrate
            </Link>
          </Stack>
        </Stack>
      </Fieldset.Root>
    </Box>
  )
}

export default LoginView
