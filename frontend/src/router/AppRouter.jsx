import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from '../components/Layout'
import Login from '../screens/authScreens/Login'
import Register from '../screens/authScreens/Register'
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
  }
]) 


function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}

export default AppRouter