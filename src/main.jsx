import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Order from './Component/Order.jsx';
import Login from './Component/Login.jsx';
import Bill from './Component/Bill.jsx';
import Signup from './Component/Signup.jsx'
import Home from './Component/Home.jsx'
import { LoginProvider } from './Context/LoginContext.jsx'
import Dashboard from './Component/Dashboard.jsx'
import Menu from './Component/Menu.jsx'
import MenuItem from './Component/MenuItem.jsx'
import About from './Component/About.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Home/>}/>
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
      <Route path='order' element={<Order />} />
      <Route path='bill' element={<Bill />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path="menu" element={<Menu/>}/>
      <Route path="menuitem" element={<MenuItem/>}/>
      <Route path="about" element={<About/>}/>

      


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>

  </React.StrictMode>
)
