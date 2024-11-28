import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Provider } from '@/components/ui/provider'
import '@/i18n'
import { router } from '@/router'
import { Center, Spinner } from '@chakra-ui/react'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider forcedTheme='light'>
      <RouterProvider router={router} future={{v7_startTransition: false}} fallbackElement={<Center><Spinner/></Center>} />
    </Provider>
  </React.StrictMode>
)
