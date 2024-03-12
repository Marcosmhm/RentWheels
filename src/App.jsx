import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Layout from "./components/Layout"

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path="/" element={<Layout />}/>
    <Route path="*" element="404" />
  </>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
