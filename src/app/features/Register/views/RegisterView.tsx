import { Box, Button, Fieldset, IconButton, Input, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaFacebook, FaGoogle, FaTimes } from 'react-icons/fa'

import { Field } from '@/components/ui/field'

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
    <Box minH='100vh' display='flex' alignItems='center' justifyContent='center' bg='gray.100'>
      <Fieldset.Root paddingY={10} maxW='sm' mx='auto' mt={5} bg='white' boxShadow='md' paddingX={10}>
        <IconButton bottom={8} left={8} alignSelf={'end'} size={'xs'}>
          <FaTimes />
        </IconButton>
        <Stack textAlign={'center'} mt={-7}>
          <Fieldset.Legend fontSize='4xl' fontWeight={'bold'} mb={4}>
            Regístrate
          </Fieldset.Legend>
          <Fieldset.HelperText fontWeight={'medium'}>Completa los siguientes campos:</Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field label='Nombre*' mb={4}>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Nombre'
              borderColor='black'
            />
          </Field>

          <Field label='Apellido*' mb={4}>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Apellido'
              borderColor='black'
            />
          </Field>

          <Field label='Email*' mb={4}>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Correo Electrónico'
              borderColor='black'
            />
          </Field>

          <Field label='Contraseña*' mb={4}>
            <Input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Contraseña'
              borderColor='black'
            />
          </Field>
        </Fieldset.Content>

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
      </Fieldset.Root>
    </Box>
  )
}
