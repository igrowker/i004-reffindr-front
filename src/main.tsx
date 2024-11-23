import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import { Provider } from '@/components/ui/provider'
import { router } from '@/router'

import './i18n'
import { router } from './router'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider forcedTheme='light'>
      <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>
)