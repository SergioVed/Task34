import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from './pages/homePage';
import { Users } from './pages/users';
import { UserPage } from './pages/users/userPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/users",
    element: <Users/>
  },
  {
    path: "/user/:name/:hobby/:age/:secondName",
    element: <UserPage/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

