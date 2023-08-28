import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Solo } from "../components/productsSolo/productsSolo";
import { PageHome } from "../pages/pageHome";
import { LogPage } from "../components/logIn/LogPage";
import { Forgot } from "../components/logIn/forgot/forgot";
import { Log } from "../components/logIn/log/log";
import { CriarConta } from "../components/logIn/criarConta/CriarConta";
import { Complited } from "../components/logIn/forgot/completed";
import { ForgotPage } from "../components/logIn/forgot/forgotPage";
import { ComplitedPage } from "../components/logIn/forgot/complitedPage";

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