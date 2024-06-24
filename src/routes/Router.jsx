import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Lab1 from '../pages/Lab1';
import Lab2 from '../pages/Lab2';
import Details from '../pages/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Lab1',
    element: <Lab1 />,
  },
  {
    path: '/Lab2',
    element: <Lab2 />,
  },
  {
    path: '/Lab2/:id',
    element: <Details />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
