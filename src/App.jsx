import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./error-page"

import Header from "./components/Header/Header.jsx"
import Books from "./components/Books/Books.jsx"

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "books/",
          element: <Books />,
        },
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
