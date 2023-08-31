import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { Outlet } from "react-router-dom"

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <h1 className="text-[4rem]">OPA OLHA COMO SOU LINOD</h1>
      <Footer />
    </>
    
  )
}