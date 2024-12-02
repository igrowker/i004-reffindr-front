import { Box, Flex, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa6'
import { FiHome } from 'react-icons/fi'
import { IoMdHelp, } from 'react-icons/io'
import { LuMessageSquare } from 'react-icons/lu'
import { RxExit } from 'react-icons/rx'
import { Link, useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { Avatar } from '@/components/ui/avatar'
import { authLogout } from '@/services/authService'

import { Language } from '../ButtonLanguage/Language'
import { LogoComponent } from '../Logo/LogoComponent'
import { ButtonIconComponent } from './ButtonIconComponent'
import { SelectorTypeComponent } from './SelectorTypeComponent'

const links = [
  {
    path: 'home',
    icon: <FiHome />,
    title: 'Inicio',
  },
  {
    path: 'perfil',
    icon: <CgProfile />,
    title: 'Perfil',
  },
  {
    path: 'favoritos',
    icon: <FaRegHeart />,
    title: 'Favoritos',
  },
  {
    path: 'help',
    icon: <IoMdHelp />,
    title: 'Ayuda',
  },
  {
    path: 'messages',
    icon: <LuMessageSquare />,
    title: 'Mensajes',
  },
]

const Sidebar = () => {
  const sidebarWidth = useBreakpointValue({ base: '277px' })
  const navigate = useNavigate()

  const handleLogout = () => {
    authLogout()
    navigate('/inquilinos')
  }

  const location = useLocation();

  console.log(location)
  return (
    <Flex
      w={sidebarWidth}
      flexShrink={0}
      position={'sticky'}
      top={'0px'}
      h='100vh'
      borderRight={'1px solid #ddd'}
      px={8}
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
    >
      <Box display='flex' justifyContent='center' mb={5} mt={5}>
        <LogoComponent size='96px' src='/assets/logos-svg/logoazul.svg' />
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center' gap='2' mb={5}>
        <Avatar size='lg' name='Sage' src='https://bit.ly/sage-adebayo' />
        <Text fontSize='lg' fontWeight='bold'>
          Paco Martínez
        </Text>
      </Box>

      <Box flexBasis='10%'>
        <SelectorTypeComponent />
      </Box>

      <Box flexBasis='50%'>
        <VStack gap={2} align='stretch'>
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              <ButtonIconComponent isActive={location.pathname.includes(link.path)}  icon={link.icon} text={link.title} />
            </Link>
          ))}
        </VStack>
      </Box>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Language />
      </Box>

      <Box flexBasis='20%'>
        <VStack gap={6} align='stretch'>
          <ButtonIconComponent isActive={false} onClick={handleLogout} icon={<RxExit />} text='Cerrar Sesión' />
        </VStack>
      </Box>
    </Flex>
  )
}

export default Sidebar
