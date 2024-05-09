import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from '@/router';
import '@/index.css';
import RootLayout from './layouts/RootLayout';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <RouterProvider router={router} />
      </RootLayout>
    </QueryClientProvider>
  </React.StrictMode>
);
