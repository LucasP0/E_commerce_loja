import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Solo } from "../components/productsSolo/productsSolo";
import { PageHome } from "../pages/pageHome";

export const router = createBrowserRouter([
  {
    path: '/',
    element: App(),
    children: [
      {
        path: '/',
        element: PageHome(),
      },
      {
        path: '/pro/:id',
        element: Solo()
      }
    ]
  },

])