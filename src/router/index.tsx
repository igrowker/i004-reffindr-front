import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/app/features/Home/pages/HomePage'
import { PropertyCharacteristic } from '@/app/UI/components/PropertyCharacteristic/PropertyCharacteristic'
import { App } from '@/App'
import { TenantHomePage } from '@/app/features/Home/pages/TenantHomePage'

export const router = createBrowserRouter([
  {
    path: '/hola-mundo',
    element: <HomePage />,
  },
  {
    path: "/tenant-page",
    element: <TenantHomePage/>
  },
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        // path: '/tests',
        index: true,
        element: <PropertyCharacteristic />,
      },
    ],
  },
])
