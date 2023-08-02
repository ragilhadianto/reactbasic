import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/login';
import RegisterPage from './Pages/register';


const router = createBrowserRouter([
  {
    path:"/",
    element: <div>test</div>
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path:"/register",
    element: <RegisterPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
