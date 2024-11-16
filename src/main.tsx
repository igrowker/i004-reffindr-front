import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from '@/components/ui/provider'
import { TenantView } from './app/features/Home/views/TenantView'



const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider forcedTheme='light'>
      <BrowserRouter  future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
        <TenantView />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
