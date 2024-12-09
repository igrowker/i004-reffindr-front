import { Box, Flex, Grid, Heading, Link, Text } from '@chakra-ui/react'
import { ReactNode, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link as RouterLink } from 'react-router-dom'

import { LogoComponent } from '@/app/UI/components/Logo/LogoComponent'

import { LoginModal, RegisterModal } from '../'
import { LenguageIcon } from './LenguageIcon'

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
  const { t } = useTranslation()

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleShowLogin = useCallback(() => {
    setShowLogin(!showLogin)
    setShowRegister(false)
  }, [showLogin])

  const handleShowRegister = useCallback(() => {
    setShowRegister(!showRegister)
    setShowLogin(false)
  }, [showRegister])

  return (
    <>
      <Box
        bgBlendMode='multiply'
        bgColor='blackAlpha.600'
        bgRepeat='no-repeat'
        bgSize={'cover'}
        bgImage={`url(${backgroundImage})`}
      >
        <Flex px={6} flexDirection='column' minH='100vh'>
          <Flex alignItems='center'>
            <Box>
              <LogoComponent src={'assets/logos-svg/logoblanco.svg'} />
            </Box>
            <Flex justifyContent='end' flexGrow={1} gapX={5}>
              <Link fontSize={{ base: 'xs', sm: 'md' }} color='white' asChild variant='underline' _focus={{ boxShadow: 'none', outline: 'none' }}>
                <RouterLink to={headLink.path}>{headLink.title}</RouterLink>
              </Link>

              <LoginModal
                isOpen={showLogin}
                onOpenChange={() => setShowLogin((prev) => !prev)}
                onShowRegister={handleShowRegister}
              />
              <RegisterModal
                onShowLogin={handleShowLogin}
                isOpen={showRegister}
                onOpenChange={() => setShowRegister((prev) => !prev)}
              />
              <LenguageIcon />
            </Flex>
          </Flex>
          <Grid gapY={10} whiteSpace={'pre-line'} placeContent='center' flexGrow={1}>
            <Heading px={4} size='4xl' textAlign='center' color='white'>
              {title}
            </Heading>

            <Text textAlign='center' color='whiteAlpha.800'>
              {t('landing.headSection.text')}
            </Text>
          </Grid>
        </Flex>
      </Box>
    </>
  )
}
