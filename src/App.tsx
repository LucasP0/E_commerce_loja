import { Header } from "./components/header/header"
import { Hero } from "./components/hero/hero"
import { Slide } from "./components/slides/slide"
import { VirtualComponent } from "./components/virtual/virtualComponent"
import { Products } from "./components/products/products"

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Slide />
      <VirtualComponent />  
      <Products />
    </>
    
  )
}