import { createBrowserRouter } from "react-router-dom";
import { App }from "../App";
import { Solo } from "../components/productsSolo/productsSolo";

export const router = createBrowserRouter([
  {
    path: '/',
    element: App(),
    children: []
  },
  {
    path: '/pro/:id',
    element: Solo()
  }
])