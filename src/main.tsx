import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { TenantView } from '@/app/features/Home/views/TenantView'
import { LoginView } from '@/app/features/Login/views/LoginView'
import { RegisterView } from '@/app/features/Register/views/RegisterView'
import { Provider } from '@/components/ui/provider'
import {CardStaticCarrusel} from '@/app/UI/components/CarruselLanding/CardStaticCarrusel'

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider forcedTheme='light'>
      <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Routes>
          <Route path='/tenantview' element={<TenantView />} />
          <Route path='/login' element={<LoginView />} />
          <Route path='/register' element={<RegisterView />} />
          <Route path='/carruselLanding' element={<CardStaticCarrusel />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
