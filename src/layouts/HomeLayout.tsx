import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import { SearchWithFiltersAndNotification } from '@/app/UI/components/search/Search'
import Sidebar from '@/app/UI/components/Sidebar/Sidebar'
import { Breadcrumb } from '@/app/UI/components/breadcrumb/Breadcrumb'

export const HomeLayout = () => {
  return (
    <Flex w={'full'} display={'flex'} >
      <Box w={'277px'}>
        <Sidebar /> 
      </Box>
      <Box flexGrow={1} p={'20px'} bgColor={'#edf2f7'}>
        <Box mb={3}>
          <SearchWithFiltersAndNotification />
            <Breadcrumb />
        </Box>
        <Outlet />
      </Box>
    </Flex>
  )
}
