import { Outlet } from "react-router-dom"
import { Header } from "./components/header/header"

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
    
  )
}