import { Box, Flex, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa6'
import { FiHome } from 'react-icons/fi'
import { IoMdHelp } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuMessageSquare } from 'react-icons/lu'
import { RxExit } from 'react-icons/rx'

import { Avatar } from '@/components/ui/avatar'

import { LogoComponent } from '../Logo/LogoComponent'
import { ButtonIconComponent } from './ButtonIconComponent'
import { SelectorTypeComponent } from './SelectorTypeComponent'

const Sidebar = () => {
  const sidebarWidth = useBreakpointValue({ base: '277px' })

  return (
    <Flex w={sidebarWidth} h='100vh' px={8} display='flex' flexDirection='column' justifyContent='space-around'>
      <Box display='flex' justifyContent='center' mb={5} mt={5}>
        <LogoComponent src='assets/logos-svg/logoazul.svg' />
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
          <ButtonIconComponent icon={<FiHome />} text='Inicio'/>
          <ButtonIconComponent icon={<CgProfile />} text='Perfil' />
          <ButtonIconComponent icon={<FaRegHeart />} text='Favoritos' />
          <ButtonIconComponent icon={<IoMdHelp />} text='Ayuda' />
          <ButtonIconComponent icon={<LuMessageSquare />} text='Mensajes' />
        </VStack>
      </Box>

      <Box flexBasis='20%'>
        <VStack gap={6} align='stretch'>
          <ButtonIconComponent icon={<IoSettingsOutline />} text='Configuración' />
          <ButtonIconComponent icon={<RxExit />} text='Cerrar Sesión' />
        </VStack>
      </Box>
    </Flex>
  )
}

export default Sidebar
