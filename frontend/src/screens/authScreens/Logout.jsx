import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { baseUrl } from '../../config/Axios'

const Logout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`${baseUrl}/auth/logout`).then(res => console.log(res)).catch(err => console.log(err))
        localStorage.removeItem("token");
        navigate("/auth/login");
    }, [])
    
  return (
    <div>Logout</div>
  )
}

export default Logout