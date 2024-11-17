import { Box, Flex, useBreakpointValue, VStack } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg'
import { FaRegHeart } from 'react-icons/fa6'
import { FiHome } from 'react-icons/fi'
import { IoMdHelp } from 'react-icons/io'
import { IoSettingsOutline } from 'react-icons/io5'
import { LuMessageSquare } from 'react-icons/lu'
import { RxExit } from 'react-icons/rx'

import logo from '@/assets/logo.png'

import { ButtonIconComponent } from './ButtonIconComponent'
import { SelectorTypeComponent } from './SelectorTypeComponent'

const Sidebar = () => {
  const sidebarWidth = useBreakpointValue({ base: '277px' })

  return (
    <Flex
      w={sidebarWidth}
      h='100vh'
      bg='#EDF2F7'
      px={8}
      display='flex'
      flexDirection='column'
      justifyContent='space-around'
    >
      <Box flexBasis='20%' mb={6} display='flex' justifyContent='center'>
        <img src={logo} alt='Logo' width='120px' />
      </Box>

      <Box flexBasis='10%'>
        <SelectorTypeComponent />
      </Box>

      <Box flexBasis='50%'>
        <VStack gap={2} align='stretch'>
          <ButtonIconComponent icon={<FiHome />} text='Home' />
          <ButtonIconComponent icon={<FaRegHeart />} text='Favoritos' />
          <ButtonIconComponent icon={<LuMessageSquare />} text='Mensajes' />
          <ButtonIconComponent icon={<CgProfile />} text='Perfil' />
          <ButtonIconComponent icon={<IoSettingsOutline />} text='Configuración' />
        </VStack>
      </Box>

      <Box flexBasis='20%'>
        <VStack gap={6} align='stretch'>
          <ButtonIconComponent icon={<IoMdHelp />} text='Ayuda' />
          <ButtonIconComponent icon={<RxExit />} text='Cerrar Sesión' />
        </VStack>
      </Box>
    </Flex>
  )
}

export default Sidebar
