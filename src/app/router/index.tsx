import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../features/Home/pages/HomePage'
// import { SearchWithFiltersAndNotification } from '../UI/components/search/Search'
import PropertyDetails from '../UI/components/PropertyDetails/PropertyDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tests',
    element: <PropertyDetails />,
  },
])
