import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/Layout";
import Login from "../screens/authScreens/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
         children:[
            {
                path: "login",
                element: <Login/>
            }
         ]
    }
])

export default function AppRouter() {
  return (
    <RouterProvider router={router}/>
  )
}