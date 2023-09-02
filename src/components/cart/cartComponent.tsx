import { CartItem } from "./Cartitem"
import img1 from '../../assets/before.png'; 

export const CartComponent = () => {
  return (
    <section className={`cart w-full max-w-[300px] bg-white h-[100vh] absolute overflow-y-scroll flex flex-col justify-between  top-0 right-0 pt-[100px] pl-2 pr-2 z-30 transform  active:translate-x-0  translate-y-0 transition-all`}>
      <div>
        
      </div>
      <div className="text-2xl font-medium pt-9 p-2 pb-9 border-t-2 flex flex-row gap-4 items-center">
        Carrinho:
        <h1 className="text-xl font-normal text-center w-full">R$ 4,90</h1>
      </div>
    </section>
  )
}