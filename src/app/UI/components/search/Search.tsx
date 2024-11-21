import { Box, HStack, Icon, Input } from '@chakra-ui/react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoSearchCircleSharp } from 'react-icons/io5'

import { Button } from '@/components/ui/button'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu'

export const SearchWithFiltersAndNotification = () => {
  return (
    <HStack bg='white' shadow='sm' py='2' px='4' maxW='1000px' width='100%' mx='auto' align='center' justify='space-between'>
      {/* este es mi inputt de búsqueda */}
      <Box position='relative' width='300px'>
        <Input
          placeholder='Buscar'
          pr='40px'
          border="1px solid"
          borderColor="gray.300"
          borderRadius="md"
          _placeholder={{ color: 'gray.500' }}
          _hover={{ borderColor: 'gray.400' }}
        />

        <Box position='absolute' right='1px' top='50%' transform='translateY(-50%)' pointerEvents='none'>
          <IoSearchCircleSharp color='#1E3A8A' size='38px' /> {/*cono search*/}
        </Box>
      </Box>

      {/* este es mi menu de filtros*/}
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant='outline' size='sm' display='flex' alignItems='center' gap='8px'  borderColor="gray.300">
            Filtros
            <FaSortAmountDownAlt size='16px' color='black' />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value='new-txt'>Menor precio</MenuItem>
          <MenuItem value='new-file'>Mayor precio</MenuItem>
        </MenuContent>
      </MenuRoot>

      {/* Íeste es mi icono de  notificacion */}
      <Icon fontSize="24px" color="gray.700" cursor="pointer">
        <IoMdNotificationsOutline />
      </Icon>
    </HStack>
  )
}
