import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Login from './login.jsx';
import Registration from './registration.jsx';
import Application from './application.jsx';

  const router = createBrowserRouter([
    {
      path: "/Login",
      element: <Login />,
    },
    {
        path: "/Registration",
        element: <Registration />,
      },
      {
        path: "/Application",
        element: <Application />,
      },
      {
        path: "/App",
        element: <App />,
      },
    {
      path: "/",
      element: <App />,
    }
  ]);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
  )