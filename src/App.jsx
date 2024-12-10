
import './App.css'
import React from 'react'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Allcars from './Components/Allcars/Allcars';
import CarDetails from './Components/CarDetails/CarDetails';

function App() {
  const routes= createBrowserRouter([{
    path: "/",
    element:<Layout/>,
    children:[
     {index:'true', element:<Home/>},
     {path:'home', element:<Home/>},
     {path:"allcars", element:<Allcars/>},
     {path:"carDetails", element:<CarDetails/>},

    
     
    ]
  }])

  return (
    <>
          
     <RouterProvider router={routes}>
    
     </RouterProvider>
    
    </>
  )
}

export default App
