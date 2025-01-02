import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import AddChild from './components/AddChild';

function App() {
  const router= createBrowserRouter([

    {
      path:'/signup',
      element:<Signup />
    },
    {
      path:'/login',
      element:<Login />
    },
    {
      path:'/addchild',
      element:<AddChild />
    }

  ]

  )

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
