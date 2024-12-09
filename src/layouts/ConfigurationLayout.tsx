import { Box, Flex } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Configuration } from '@/app/UI/components/Configure/Configuration';

export const HomeLayout = () => {
  const location = useLocation();
  const isConfigurationRoute = location.pathname.startsWith('/configuration');

  return (
    <Flex>
      {isConfigurationRoute && <Configuration />} 
      <Box flexGrow={1} p="20px" bgColor="#edf2f7">
        <Outlet />
      </Box>
    </Flex>
  );
};