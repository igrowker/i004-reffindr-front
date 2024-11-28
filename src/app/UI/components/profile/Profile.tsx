import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const viewProfile = [
  { path: 'mi-perfil', title: 'Mi Perfíl' },
  { path: 'mis-anuncios', title: 'Mis Anuncios' },
  { path: 'candidatos-enviados', title: 'Candidatos Enviados' },
  { path: 'notificaciones', title: 'Notificaciones' },
  { path: 'mi-valoracion', title: 'Mi Valoración' },
];

export const Profile = () => {
  return (
    <Flex
      w={'full'}
      position="sticky"
      top={0}
      h="100vh"
      borderRight="1px solid #ddd"
      px={8}
      display={'flex'}
      flexDirection="column"
      
    >
      <Box w={'60%'} display={'flex'} mx={'auto'}>
      <VStack
        align="stretch" 
        display={'flex'} 
        flexDirection={'row'}
        justifyContent={'space-around'}
        >
        {viewProfile.map((item) => (
          <NavLink
            key={item.path}
            to={`/perfil/${item.path}`} // Ruta completa para navegación
            style={({ isActive }) => ({
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'blue' : 'black',
            })}
          >
            <Button w="full" fontSize={'xl'} color={'black'} bg="transparent" border="1px solid gray">
              {item.title}
            </Button>
          </NavLink>
        ))}
      </VStack>
      </Box>
      <Box flex="1" p={4}>
        <Outlet />
      </Box>
    </Flex>
  );
};
