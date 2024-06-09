import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routerInfo from '@router/index';
const router = createBrowserRouter(routerInfo);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
