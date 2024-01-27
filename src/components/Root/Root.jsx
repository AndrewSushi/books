import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from '../../error-page'

import Header from '../Header/Header.jsx'
import Books from '../Books/Books.jsx'
import UserProfile from "../UserProfile/UserProfile.jsx"
import SignIn from "../SignIn/SignIn.jsx"
import SignUp from "../SignUp/SignUp.jsx"

export default function Root(){
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "books",
          element: <Books />,
        },
        {
          path: "profile",
          element: <UserProfile />,
        },
        {
          path: "sign_in",
          element: <SignIn />,
        },
        {
          path: "sign_up",
          element: <SignUp />,
        }
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
