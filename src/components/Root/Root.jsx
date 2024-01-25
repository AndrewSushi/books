import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from '../../error-page'

import Header from '../Header/Header.jsx'
import Books from '../Books/Books.jsx'

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
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
