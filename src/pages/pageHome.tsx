import { Ava } from "../components/avaliacoes/ava"
import { Hero } from "../components/hero/hero"
import { Products } from "../components/products/products"
import { Slide } from "../components/slides/slide"
import { Virtual } from "../components/virtual/virtual"
import { VirtualComponent } from "../components/virtual/virtualComponent"

export const PageHome = () => {
  return (
    <>
    <Hero />
    <Slide />
    <Virtual />
    <Products />
    <Ava />
    </>

  )
}