import { Box, Button, Center, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react'
import { ReactNode, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import LoginView from '@/app/features/Login/views/LoginView'
import { RegisterView } from '@/app/features/Register/views/RegisterView'
import { LogoComponent } from '@/app/UI/components/Logo/LogoComponent'

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
        backgroundPosition={'center'}
      >
        {(showLogin || showRegister) && (
          <Box position='fixed' top={0} left={0} width='100%' height='100%' bgColor='blackAlpha.700' zIndex={9} />
        )}
        {showLogin && (
          <Center position='fixed' top='50%' left='50%' transform='translate(-50%, -50%)' zIndex='10'>
            <LoginView onclose={handleShowLogin} onShowRegister={handleShowRegister} />
          </Center>
        )}

        {showRegister && (
          <Center position='fixed' top='50%' left='50%' transform='translate(-50%, -50%)' zIndex='10'>
            <RegisterView onclose={handleShowRegister} onShowLogin={handleShowLogin} />
          </Center>
        )}

        <Flex px={6} flexDirection='column' minH='100vh'>
          <Flex alignItems='center'>
            <Box>
              <LogoComponent src={'assets/logos-svg/logoblanco.svg'} />
            </Box>
            <Flex justifyContent='end' flexGrow={1} gapX={5}>
              <Link fontSize={{ base: 'xs', sm: 'md' }} color='white' asChild variant='underline'>
                <RouterLink to={headLink.path}>{headLink.title}</RouterLink>
              </Link>
              <Button onClick={handleShowLogin} size={{ base: 'xs', sm: 'md' }} variant='solid' colorPalette={'blue'}>
                Iniciar sesión
              </Button>
              <Button
                onClick={handleShowRegister}
                size={{ base: 'xs', sm: 'md' }}
                variant='outline'
                color='white'
                _hover={{ color: 'blackAlpha.800' }}
                colorPalette={'white'}
              >
                Registrarse
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
          </Grid>
        </Flex>
      </Box>
    </>
  )
}
