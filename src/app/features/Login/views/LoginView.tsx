import { Box, Button, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // logica
    console.log('Email:', email)
    console.log('Password:', password)
  }

  return (
    <Box p={4} maxW='md' mx='auto' mt={10} bg='white' boxShadow='md'>
      <Stack textAlign={'center'}>
        <Text fontSize='4xl' fontWeight={'bold'} mb={4}>
          Iniciar sesión
        </Text>
        <Text fontWeight={'medium'}>Completa los siguientes campos:</Text>
      </Stack>

      <Box mb={4}>
        <Text mb={2}>Email*</Text>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Correo Electrónico'
          borderColor='black'
        />
      </Box>

      <Box mb={4}>
        <Text mb={2}>Contraseña*</Text>
        <Input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Contraseña'
          borderColor='black'
        />
      </Box>

      <Stack gap={4} mb={4}>
        <Button w='full' borderColor='black' borderWidth='1px' bg={'#146EB4'} onClick={handleLogin}>
          Iniciar Sesión
        </Button>

        <Button
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

        <Button w='full' bg='white' color='black' borderWidth='1px' borderColor='black' onClick={handleLogin}>
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
    </Box>
  )
}

export default LoginView
