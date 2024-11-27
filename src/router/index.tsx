import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { MyRatingProfile } from '@/app/UI/components/profile/MyRatingProfile'
import { TenantHome } from '@/app/UI/components/PropertyCard/TenanHome'
import { HomeLayout } from '@/layouts/HomeLayout'
import { AnnouncementSection } from '@/app/UI/components/announcementView/AnnouncementSection'
import { OutgoingTenantHelp } from '@/app/UI/components/OutgoingTenantHelps/OutgoingTenantHelp'

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
        element: <TenantHome />,
      },
      {
        path: 'perfil',
        element: <MyRatingProfile />,
      },
      {
        path: 'favoritos',
        element: <AnnouncementSection />
      },
      {
        path:'help',
        element: <OutgoingTenantHelp />
      },
      {
        path: '*',
        element: <div>404 not found</div>,
      },
    ],
  },
])
