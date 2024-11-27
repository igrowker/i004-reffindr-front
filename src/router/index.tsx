import { Flex } from '@chakra-ui/react'
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { AnnouncementSection } from '@/app/UI/components/announcementView/AnnouncementSection'
import { OutgoingTenantHelp } from '@/app/UI/components/OutgoingTenantHelps/OutgoingTenantHelp'
import { MyRatingProfile } from '@/app/UI/components/profile/MyRatingProfile'
import { TenantHomePage } from '@/app/UI/components/PropertyCard/TenantHome'
import { ExpandedDetails } from '@/app/UI/components/ViewExpandedDetails/ExpandedDetails'
import { HomeLayout } from '@/layouts/HomeLayout'

export const router = createBrowserRouter([
  {
    path: '/inquilinos',
    element: <HomePage />,
  },
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: 'home',
        element: <TenantHomePage />,
      },
      {
        path: 'details',
        element: <ExpandedDetails />,
      },
      {
        path: 'perfil',
        element: <MyRatingProfile />,
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
])
