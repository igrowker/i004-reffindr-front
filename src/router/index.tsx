import { Flex } from '@chakra-ui/react'
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { CreatePropertyPage } from '@/app/features/Tenant/Outgoing/property/pages/CreatePropertyPage'
import { AnnouncementSection } from '@/app/UI/components/announcementView/AnnouncementSection'
import { OutgoingTenantHelp } from '@/app/UI/components/OutgoingTenantHelps/OutgoingTenantHelp'
import { MyRatingProfile } from '@/app/UI/components/profile/MyRatingProfile'
import { Profile } from '@/app/UI/components/profile/Profile'
import { ProfileCandidatesSend } from '@/app/UI/components/profile/ProfileCandidatesSend'
import { ProfileNotifications } from '@/app/UI/components/profile/ProfileNotifications'
import { TenantHomePage } from '@/app/UI/components/PropertyCard/TenantHome'
import { ViewEditProfile } from '@/app/UI/components/ViewEditProfile/ViewEditProfile'
import { ExpandedDetails } from '@/app/UI/components/ViewExpandedDetails/ExpandedDetails'
import { HomeLayout } from '@/layouts/HomeLayout'

import { OwnerLanding } from '../app/features/Home/views/OwnerLanding'
import { authenticated, requireAuth } from './loaders/authLoader'

export const router = createBrowserRouter(
  [
    {
      path: '/owner',
      element: <OwnerLanding />,
      loader: authenticated,
    },
    {
      path: '/inquilinos',
      element: <HomePage />,
      loader: authenticated,
    },
    {
      path: '/',
      element: <HomeLayout />,
      loader: requireAuth,
      hydrateFallbackElement: <Flex>Loading...</Flex>,
      children: [
        {
          path: 'home',
          element: <TenantHomePage />,
        },
        {
          path: 'create-property',
          element: <CreatePropertyPage />,
        },
        {
          path: 'home/:propertyName',
          element: <ExpandedDetails />,
        },
        {
          path: 'perfil',
          element: <Profile />,
          children: [
            {
              index: true,
              element: <ViewEditProfile />,
            },
            {
              path: 'mis-anuncios',
              element: <AnnouncementSection />,
            },
            {
              path: 'candidatos-enviados',
              element: <ProfileCandidatesSend />,
            },
            {
              path: 'notificaciones',
              element: <ProfileNotifications />,
            },
            {
              path: 'mi-valoracion',
              element: <MyRatingProfile />,
            },
          ],
        },
        {
          path: 'favoritos',
          element: <AnnouncementSection />,
        },
        {
          path: 'help',
          element: <OutgoingTenantHelp />,
        },
        {
          path: '*',
          element: <Flex>404 not found</Flex>,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)
