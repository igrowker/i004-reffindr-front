import { HomePage } from '@/app/features/Home/pages/HomePage'
import { OutgoingTenantHelp } from '@/app/UI/components/Helps/OutgoingTenantHelp'
import { MyRatingProfile } from '@/app/UI/components/profile/MyRatingProfile'
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { PropertyCharacteristic } from '@/app/UI/components/PropertyCharacteristic/PropertyCharacteristic'
import { TenantHomePage } from '@/app/features/Home/pages/TenantHomePage'
import { HomeLayout } from '@/layouts/HomeLayout'

export const router = createBrowserRouter([
  {
    path: '/inquilinos',
    element: <HomePage />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: 'home',
        element: <TenantHomePage/>,
      },
      {
        path: 'perfil',
        element: <TenantHomePage/>,
      },
      {
        path: '*',
        element: <div>404 not found</div>
      }
    ]
  },
 
])
