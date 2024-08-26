
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './componants/Layout/Layout';
import Register from "./componants/Register/Register";
import Login from "./componants/Login/Login";
import NotFound from './componants/NotFound/NotFound';
import Products  from './componants/Products/products';


const Router = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [

      { path: 'Products', element: <Products /> },
      { path: 'Register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ]
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}
