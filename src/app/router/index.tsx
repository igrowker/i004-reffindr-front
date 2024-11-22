import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '../features/Home/pages/HomePage'
import { SearchWithFiltersAndNotification } from '../UI/components/search/Search'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tests',
    element: <SearchWithFiltersAndNotification />,
  },
])
