import { HomePage } from '@/app/features/Home/pages/HomePage'
import { MyRatingProfile } from '@/app/UI/components/profile/MyRatingProfile'
import { createBrowserRouter } from 'react-router-dom'
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
        element: <MyRatingProfile/>,
      },
      {
        path: '*',
        element: <div>404 not found</div>
      }
    ]
  },
 
])
