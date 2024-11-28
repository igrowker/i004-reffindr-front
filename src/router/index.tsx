import { Flex } from '@chakra-ui/react'
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { AnnouncementSection } from '@/app/UI/components/announcementView/AnnouncementSection'
import { OutgoingTenantHelp } from '@/app/UI/components/OutgoingTenantHelps/OutgoingTenantHelp'
import { TenantHomePage } from '@/app/UI/components/PropertyCard/TenantHome'
import { ViewEditProfile } from '@/app/UI/components/ViewEditProfile/ViewEditProfile'
import { ExpandedDetails } from '@/app/UI/components/ViewExpandedDetails/ExpandedDetails'
import { HomeLayout } from '@/layouts/HomeLayout'

import { PrivateRoute, PublicRoute } from './privateRoutes'

export const router = createBrowserRouter([
  {
    path: '/inquilinos',
    element: <PublicRoute element={<HomePage />} />,
  },
  {
    path: '/',
    element: <PrivateRoute element={<HomeLayout />} />,

    children: [
      {
        path: 'home',
        element: <TenantHomePage />,
        children: [
          {
            path: ':propertyName',
            element: <ExpandedDetails />
          }
        ]
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
], {
  future: {
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_relativeSplatPath:true,
    v7_skipActionErrorRevalidation: true
  }
})
