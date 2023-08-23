import { ArrowRight, ShoppingBag } from "lucide-react"
import HeroImg from '../../assets/hero.png'
import { motion } from 'framer-motion';

export const HeroComponent = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="containerHero grid grid-cols-ih p-6 mt-10">
      {/* ********************** Left side**********************  */}
      <div className="grid grid-rows-burro ">
        <span className=" text-[1.8rem] w-min block font-semibold  max-md:text-[1.5rem] max-md:text-justify">Protetor de Pele</span>
        <div className="flex flex-col w-min  text-black">
          <span className="font-extrabold text-[1.8rem] max-md:text-[0.9rem] max-md:text-justify">Trendy da Moda</span>
          <span>Coleção da moda atualmente é a infanto juvenil</span>
        </div>
      </div>

      {/* ********************** Middle side hero image**********************  */}
      <div className="flex flex-row  items-baseline justify-center relative  ">
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className="w-[30rem] h-[30rem] rounded-[50%] -z-50 absolute bottom-0 bg-gradient-to-r from-[#0bb5ff] to-[#6dd3fe] 
          max-md:absolute max-md:w-[70%] max-md:h-full max-sm:top-0 max-sm:w-[13rem] max-sm:h-[68%]"></motion.div>
        <motion.img
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          transition={transition}
          className="w-[30rem] absolute bottom-0 max-md:w-[70%] h-full max-sm:top-[1rem] max-sm:w-[12rem] max-sm:h-[15rem]"
          src={HeroImg}
          alt=""
          width={600}
        />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "-5%" }}
          className="cart2 absolute bottom-[10%] right-[-5%] flex gap-4 text-center   max-lg:bottom-[0%] items-center max-sm:left-[-0.3rem]">
          <div className=" bg-white w-14 h-14 rounded-full flex items-center justify-center border-4 border-black">
            <ShoppingBag size={30} />
          </div>
          <div className="signup flex gap-4 bg-white p-[10px] text-center text-[0.8 rem] rounded-2xl shadow-md items-center cursor-pointer">
            <span className="block w-24">Best Signup Offers</span>
            <ArrowRight className="border-2 rounded-full w-7 h-7" />
          </div>
        </motion.div>
      </div>

      {/* ********************** Right side  ***********************/}
      <div className="grid grid-flow-row grid-cols-1 right">
        <div className="flex flex-col text-right">
          <span className="font-extrabold text-[1.8rem] max-md:text-[1.5rem]">1.5m</span>
          <span>Tráfego mensal</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="font-extrabold text-[1.8rem] max-md:text-[1.5rem]">100k</span>
          <span>Clientes Felizes</span>
        </div>
      </div>

    </div>
  )
}