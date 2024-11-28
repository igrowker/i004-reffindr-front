import { Box, Flex } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { Profile } from '@/app/UI/components/profile/Profile';

export const HomeLayout = () => {
  const location = useLocation();
  const isProfileRoute = location.pathname.startsWith('/perfil');

  return (
    <Flex>
      {isProfileRoute && <Profile />}
      <Box flexGrow={1} p="20px" bgColor="#edf2f7">
        <Outlet />
      </Box>
    </Flex>
  );
};
