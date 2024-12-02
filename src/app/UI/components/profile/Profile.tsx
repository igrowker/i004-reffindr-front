import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { NavLink, Outlet } from 'react-router-dom'

export const Profile = () => {
  const { t } = useTranslation()

  const viewProfile = [
    { path: "mi-perfil", title: t('myProfile') },
    { path: "mis-anuncios", title: t('myAds') },
    { path: "candidatos-enviados", title: t('sendedCandidates') },
    { path: "notificaciones", title: t('notifications') },
    { path: "mi-rating", title: t('myRating') },
  ]

  return (
    <Flex borderRight='1px solid #ddd' px={8} display={'flex'} flexDirection='column'>
      <Box w={'60%'} display={'flex'} mx={'auto'}>
        <VStack align='stretch' display={'flex'} flexDirection={'row'} justifyContent={'space-around'}>
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
              <Button w='full' fontSize={'xl'} color={'black'} bg='transparent' border='1px solid gray'>
                {item.title}
              </Button>
            </NavLink>
          ))}
        </VStack>
      </Box>
      <Box flex='1' p={4}>
        <Outlet />
      </Box>
    </Flex>
  )
}
