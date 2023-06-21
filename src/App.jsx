import React from 'react'
import { Outlet } from "react-router-dom";
import Auth from './pages/Auth'
import Sidebar from './layouts/Sidebar';
import Modifier from './layouts/Modifier';

const App = () => {
  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default App