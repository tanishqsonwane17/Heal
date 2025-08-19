import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { IoIosArrowBack } from "react-icons/io";
const Nav = () => {
    const {prevStep} = useContext(UserContext);
  return (
    <>
     <div className='h-20 w-full flex items-center gap-1.5 px-4'>
      <div className='h-10 flex justify-center items-center w-10 rounded-full border'
      onClick={prevStep}
      >
         <IoIosArrowBack className='text-2xl '/>
      </div>
      <h6>Assessment</h6>
    </div>
    </>
  )
}

export default Nav