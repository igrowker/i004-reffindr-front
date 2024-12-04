import { Box, Button, Flex, Stack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Link, Outlet, useLocation } from 'react-router-dom'

export const Profile = () => {
  const { t } = useTranslation()

  const viewProfile = [
    { path: '', title: t('myProfile') },
    { path: 'mis-anuncios', title: t('myAds') },
    { path: 'candidatos-enviados', title: t('sendedCandidates') },
    { path: 'notificaciones', title: t('notifications') },
    { path: 'mi-rating', title: t('myRating') },
  ]
  const location = useLocation()
  const partialPathname = location.pathname.split('/').slice(2) 
  const pathname = partialPathname.length == 0 ? '' : partialPathname[0]
  return (
    <Flex flexDirection='column'>
      <Stack  wrap={'wrap'} justifyContent={'center'} direction={'row'}>
        {viewProfile.map((item) => (
          <Link to={`${item.path}`}>
            <Button
              key={item.path}
              size={{ base: 'sm', lg: 'md' }}
              colorPalette={'border'}
              variant='outline'
              borderColor={pathname == item.path ? 'blue' : '#ccc'}
            >
              {item.title}
            </Button>
          </Link>
        ))}
      </Stack>
      <Box mt={4}>
        <Outlet />
      </Box>
    </Flex>
  )
}
