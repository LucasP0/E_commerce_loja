import { ArrowRight, ShoppingBag } from "lucide-react"
import HeroImg from '../../assets/hero.png'

export const HeroComponent = () => {
  return (
    <div className=" grid grid-cols-ih p-6 ">

      {/* Left side */}
      <div className="grid grid-rows-burro ">
        <span className=" text-2xl w-min block font-semibold">Protetor de Pele</span>
        <div className="flex flex-col w-min text-black">
          <span className="font-extrabold text-[2rem]">Trendy da Moda</span>
          <span>Coleção da moda atualmente é a infanto juvenil</span>
        </div>
      </div>

      {/* Middle side hero image */}
      <div className="wrapper flex  items-baseline justify-center relative   ">
        <div className="blueCircle"></div>
          <img 
            className="w-[25rem]
            absolute top-14 " 
            src={HeroImg} 
            alt="" 
            width={600}
            />
          <div className="cart2">
            <ShoppingBag size={30} />
            <div className="signup">
              <span>Best Signup Offers</span>
              <ArrowRight />
            </div>
          </div>
      </div>

      {/* Right side */}
      <div className="grid grid-flow-row grid-cols-1  ">
        <div className="flex flex-col text-right">
          <span className="font-extrabold text-[2rem]">1.5m</span>
          <span>Tráfego mensal</span>
        </div>
        <div className="flex flex-col text-center">
          <span>100k</span>
          <span>Clientes Felizes</span>
        </div>
      </div>

    </div>
  )
}