import React from 'react';
import { createRoot } from 'react-dom/client';
import { HomeView } from './app/features/Home/views/HomeView';
import './global.css';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HomeView />
    </BrowserRouter>
  </React.StrictMode>
);
