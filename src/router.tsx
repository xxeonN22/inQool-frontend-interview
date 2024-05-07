import { createBrowserRouter } from 'react-router-dom';
import LayoutPage from '@/layouts/LayoutPage';
import HomePage from '@/pages/HomePage';
import UsersPage from '@/pages/UsersPage';
import AnimalsPage from '@/pages/AnimalsPage';
import NotFoundPage from '@/pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/users',
        element: <UsersPage />,
      },
      {
        path: '/animals',
        element: <AnimalsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <LayoutPage />,
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
        index: true,
      },
    ],
  },
]);

export default router;
