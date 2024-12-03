import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { Provider } from '@/components/ui/provider'
import { Toaster } from '@/components/ui/toaster'
import '@/i18n'
import { router } from '@/router'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider forcedTheme='light'>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toaster />
    </Provider>
  </React.StrictMode>
)
