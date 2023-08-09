import { createBrowserRouter } from "react-router-dom";
import { App }from "../App";
import { Hero } from "../components/hero/hero";


export const router = createBrowserRouter([
  {
    path: '/',
    element: App(),
    children: [
      {
        path: '/',
        element: Hero()
      }
    ]
  }
])