import { Box, Flex, HStack, Icon, Input } from '@chakra-ui/react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'

import { Button } from '@chakra-ui/react'
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu'
import { useTenantStore } from '@/stores/tenantStore'
import { TenantRoles } from '@/constants/tenant-constants'
import { Link } from 'react-router-dom'

export const SearchWithFiltersAndNotification = () => {

  const tenantRole = useTenantStore(state => state.tenantRole);

  return (
    <HStack gap='6' width='full' align='center' bg={'white'} mb={2} py={2} px={2} >
      {/* este es mi inputt de búsqueda */}
      <Flex position='relative' width={'50%'}>
        <Input
          placeholder='Buscar'
          variant={'outline'}
          pr='40px'
          _placeholder={{ color: 'black.500' }}
          _hover={{ borderColor: 'black.400' }}
        />

        <Button colorPalette={"blue"}>
          <Icon >
            <IoSearch />
          </Icon>

        </Button>
      </Flex>

      {/* este es mi menu de filtros*/}
      <Box width={'50%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant='outline' size='sm' display='flex' alignItems='center' gap='8px' borderColor='gray.300'>
              Filtros
              <FaSortAmountDownAlt size='16px' color='black' />
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem value='new-txt'>Menor precio</MenuItem>
            <MenuItem value='new-file'>Mayor precio</MenuItem>
          </MenuContent>
        </MenuRoot>
        {
          tenantRole == TenantRoles.outgoing
          && (
            <Button colorPalette={"blue"}   >
              <Link to="create-property">
              Crear anuncio
              </Link>
            </Button>
          
          )
        }
        <IoMdNotificationsOutline fontSize='24px' color='gray.700' cursor='pointer' />
      </Box> 
    </HStack>
  )
}
