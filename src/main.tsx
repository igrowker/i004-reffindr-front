import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './global.css';
import { HomePage } from './app/features/Home/pages/HomePage';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);
