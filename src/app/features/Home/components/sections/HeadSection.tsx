import { Box, Button, Center, Flex, Grid, Heading, Input, Link, Text } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import LoginView from '@/app/features/Login/views/LoginView'
import { LogoComponent } from '@/app/UI/components/Logo/LogoComponent'
import { RegisterView } from '@/app/features/Register/views/RegisterView'

interface Props {
  title: string
  headIcon: ReactNode
  backgroundImage: string
  headLink: {
    title: string
    path: string
  }
}

export const HeadSection = ({ title, backgroundImage, headLink }: Props) => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleShowLogin = () => {
    setShowLogin(!showLogin)
    setShowRegister(false)
  }

  const handleShowRegister = () => {
    setShowRegister(!showRegister)
    setShowLogin(false)
  }

  return (
    <>
      <Box
        bgBlendMode='multiply'
        bgColor='blackAlpha.600'
        bgRepeat='no-repeat'
        bgSize={'cover'}
        bgImage={`url(${backgroundImage})`}
      >
        {showLogin && (
          <Center position='absolute' top='15%' left='50%' transform='translate(-50%, -50%)' zIndex='10'>
            <LoginView onclose={handleShowLogin} onShowRegister={handleShowRegister} />
          </Center>
        )}

         {showRegister && (
          <Center position='absolute' top='15%' left='50%' transform='translate(-50%, -50%)' zIndex='10'>
            <RegisterView onclose={handleShowRegister} onShowLogin={handleShowLogin} />
          </Center>
        )}

        <Flex px={6} flexDirection='column' minH='100vh'>
          <Flex py={6} alignItems='center'>
            <Box>
              <LogoComponent src={'/src/assets/logos-svg/logoblanco.svg'} />
            </Box>
            <Flex justifyContent='end' flexGrow={1} gapX={5}>
              <Link fontSize={{ base: 'xs', sm: 'md' }} color='white' asChild variant='underline'>
                <RouterLink to={headLink.path}>{headLink.title}</RouterLink>
              </Link>
              <Button onClick={handleShowLogin} size={{ base: 'xs', sm: 'md' }} variant='solid' colorPalette={'blue'}>
                Iniciar sesión
              </Button>
            </Flex>
          </Flex>
          <Grid gapY={10} whiteSpace={'pre-line'} placeContent='center' flexGrow={1}>
            <Heading px={4} size='4xl' textAlign='center' color='white'>
              {title}
            </Heading>

            <Text textAlign='center' color='whiteAlpha.800'>
              Nuestra plataforma conecta a inquilinos y propietarios, eliminando &#10; la necesidad de intermediarios y
              las comisiones elevadas.
            </Text>
            <Flex gapX={6}>
              <Input
                variant={'subtle'}
                colorPalette='blue'
                bg={'white'}
                placeholder='Email'
                size={{ base: 'xs', sm: 'md' }}
              />
              <Button variant='solid' colorPalette='blue' size={{ base: 'xs', sm: 'md' }}>
                Registrate
              </Button>
            </Flex>
          </Grid>
        </Flex>
      </Box>
    </>
  )
}
