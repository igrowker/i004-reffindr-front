import { Box, Button, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export const RegisterView = () => {
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

  return (
    <Box p={4} maxW='md' mx='auto' mt={10} bg='white' boxShadow='md'>
      <Stack textAlign={'center'}>
        <Text fontSize='4xl' fontWeight={'bold'} mb={4}>
          Regístrate
        </Text>
        <Text fontWeight={'medium'}>Completa los siguientes campos:</Text>
      </Stack>

      <Box mb={4}>
        <Text mb={2}>Nombre*</Text>
        <Input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Nombre'
          borderColor='black'
        />
      </Box>

      <Box mb={4}>
        <Text mb={2}>Apellido*</Text>
        <Input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder='Apellido'
          borderColor='black'
        />
      </Box>

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
        <Button w='full' borderColor='black' borderWidth='1px' bg={'#146EB4'} onClick={handleRegister}>
          Regístrate
        </Button>

        <Button
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

        <Button w='full' bg='white' color='black' borderWidth='1px' borderColor='black' onClick={handleRegister}>
          <FaFacebook />
          Regístrate con Facebook
        </Button>
      </Stack>

      <Stack direction='column' align='center' gap={3} mt={3}>
        <Stack flexDirection={'row'}>
          <Text>¿Ya tienes cuenta?</Text>
          <Link fontWeight={'bold'} textDecoration={'underline'} href='#'>
            Inicia Sesión
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}
