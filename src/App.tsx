import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { Outlet } from "react-router-dom"
import { CartPage } from "./pages/cartPage"
import { Provider } from "./context/provider"

export const App = () => {
  return (

    <Provider>
      <Header />
      <Outlet />
      <CartPage />
      <Footer />
    </Provider>


  )
}