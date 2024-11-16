import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from '@/components/ui/provider'

import { HomeView } from './app/features/Home/views/HomeView'
// import './global.css' --> Ya no se utilizara tailwind css

const root = createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <Provider forcedTheme='light'>
      <BrowserRouter  future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
        <HomeView />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
