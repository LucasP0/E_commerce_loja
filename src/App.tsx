import { Outlet } from "react-router-dom"
import { Header } from "./components/header/header"
import { Hero } from "./components/hero/hero"

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
    
  )
}