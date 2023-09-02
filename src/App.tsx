import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { Outlet } from "react-router-dom"
import { CartPage } from "./pages/cartPage"

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <CartPage />
      <Footer />
    </>
    
  )
}