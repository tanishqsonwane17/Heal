import React from 'react'
import { Outlet } from 'react-router'
import { IoIosArrowBack } from "react-icons/io";
const Layout = () => {
  return (
    <>
    <div className='h-20 w-full flex items-center gap-1.5 px-4'>
      <div className='h-10 flex justify-center items-center w-10 rounded-full border'>
         <IoIosArrowBack className='text-2xl '/>
      </div>
      <h6>Assessment</h6>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout