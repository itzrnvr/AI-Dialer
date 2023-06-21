import React from 'react'
import { Outlet } from "react-router-dom";
import Auth from './pages/Auth'
import Sidebar from './layouts/Sidebar';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default App