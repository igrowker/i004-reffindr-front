import { HomePage } from '@/app/features/Home/pages/HomePage'
import { OutgoingTenantHelp } from '@/app/UI/components/Helps/OutgoingTenantHelp'
import { MyRatingProfile } from '@/app/UI/components/profile/MyRatingProfile'
import { createBrowserRouter } from 'react-router-dom'


export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/tests',
      element: <MyRatingProfile />
    },
    {
      path: '/helps',
      element: <OutgoingTenantHelp />
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
