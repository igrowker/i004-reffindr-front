import { Flex } from '@chakra-ui/react'
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { AnnouncementSection } from '@/app/UI/components/announcementView/AnnouncementSection'
import { OutgoingTenantHelp } from '@/app/UI/components/OutgoingTenantHelps/OutgoingTenantHelp'
import { TenantHomePage } from '@/app/UI/components/PropertyCard/TenantHome'
import { ViewEditProfile } from '@/app/UI/components/ViewEditProfile/ViewEditProfile'
import { ExpandedDetails } from '@/app/UI/components/ViewExpandedDetails/ExpandedDetails'
import { HomeLayout } from '@/layouts/HomeLayout'

import { authenticated, requireAuth } from './loaders/authLoader'
import { propertyLoader } from './loaders/propertiesLoader'

export const router = createBrowserRouter(
  [
    {
      path: '/inquilinos',
      element: <HomePage />,
      loader: authenticated,
    },
    {
      path: '/',
      element: <HomeLayout />,
      loader: requireAuth,

      children: [
        {
          path: 'home',
          element: <TenantHomePage />,
          loader: propertyLoader,
          children: [
            {
              path: ':propertyName',
              element: <ExpandedDetails />,
            },
          ],
        },
        {
          path: 'details',
          element: <ExpandedDetails />,
        },
        {
          path: 'perfil',
          element: <ViewEditProfile />,
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
