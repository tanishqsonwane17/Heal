import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { UserContext } from '../context/UserContext';
const Layout = () => {
    const { prevStep } = useContext(UserContext);
  return (
    <>
   
    <Outlet/>
    </>
  )
}

export default Layout