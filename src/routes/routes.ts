import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Solo } from "../components/productsSolo/productsSolo";
import { PageHome } from "../pages/pageHome";
import { LogPage } from "../pages/LogPage";
import { Log } from "../components/logIn/log/log";
import { CriarConta } from "../components/logIn/criarConta/CriarConta";
import { ForgotPage } from "../components/logIn/forgot/forgot";
import { ComplitedPage } from "../components/logIn/forgot/complited";
import useAuth from "../hooks/useAuth";


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
        element: ForgotPage(),

      },
      {
        path: '/log/conta',
        element: CriarConta(),
      },
      {
        path: '/log/forgot/completed',
        element: ComplitedPage(),
      }
    ],
  }

])