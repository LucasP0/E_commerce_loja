import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Solo } from "../components/productsSolo/productsSolo";
import { PageHome } from "../pages/pageHome";
import { LogPage } from "../components/logIn/LogPage";
import { Forgot } from "../components/logIn/forgot/forgot";
import { Log } from "../components/logIn/log/log";
import { CriarConta } from "../components/logIn/criarConta/CriarConta";

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
      },

    ]
  },
  {
    path: '/log',
    element: LogPage(),
    children: [
      {
        path: '/log',
        element: Log(),
      },
      {
        path: '/log/forgot',
        element: Forgot(),
      },
      {
        path: '/log/conta',
        element: CriarConta(),
      }
    ],
  }

])