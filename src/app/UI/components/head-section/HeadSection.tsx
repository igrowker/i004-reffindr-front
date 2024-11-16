
import { Box, Button, Flex, Grid, Heading, Input, Link, Text } from '@chakra-ui/react'
import { MouseEvent, ReactNode } from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface Props {
  title: string
  headIcon: ReactNode
  backgroundImage: string
  headLink: {
    title: string
    path: string
  }
  loginBtn?: {
    onClick: (e: MouseEvent) => void
  }
}

export const HeadSection = ({ title, headIcon, backgroundImage, headLink, loginBtn }: Props) => {
  return (
    <Box
      bgBlendMode='multiply'
      bgColor='blackAlpha.600'
      bgRepeat='no-repeat'
      bgSize={'cover'}
      bgImage={`url(${backgroundImage})`}
    >
      <Flex px={6} flexDirection='column' minH='100vh'>
        <Flex py={6}>
          <Box>{headIcon}</Box>
          <Flex justifyContent='end' flexGrow={1} gapX={5}>
            <Link fontSize={{ base: 'xs', sm: 'md' }} color='white' asChild variant='underline'>
              <RouterLink to={headLink.path}>{headLink.title}</RouterLink>
            </Link>
            <Button
              onClick={(e) => loginBtn?.onClick(e)}
              size={{ base: 'xs', sm: 'md' }}
              variant='solid'
              colorPalette={'blue'}
            >
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
  )

}
