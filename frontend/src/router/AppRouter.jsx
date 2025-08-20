import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from '../components/Layout'
import Login from '../screens/authScreens/Login'
import Register from '../screens/authScreens/Register'
import Home from '../screens/Home'
const router = createBrowserRouter([

  {
    path:'/auth',
    element:<Layout/>,
    children:[
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Register/>
      }

    ]
  },
  {
    path:'/home',
    element:<Home/> 
  }
]) 


function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter