import { CartItem } from "./Cartitem"
import img1 from '../../assets/before.png'; 
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import formatCurrency from "./formatCurrency";

export const CartComponent = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);
  const totalPrice = cartItems.reduce((acc,item) => item.price + acc, 0);
  return (
    <section className={`cart w-full max-w-[300px] bg-white h-[100vh] absolute overflow-y-scroll  flex-col justify-between  top-0 right-0 pt-[100px] hidden pl-2 pr-2 z-30 transform translate-x-[110%]  active:translate-x-0  translate-y-0 transition-all ${isCartVisible ? 'cart--active' : ''}`}>
      <div>
        { cartItems.map((item) => 
        <CartItem 
          id={item.id}
          data={item}
        />
        )}
      </div>
      <div className="text-[1.5rem] font-bold pt-9 p-2 pb-9 border-t-2 flex flex-row gap-4 items-center">
        Total:
        <h1 className="text-[1.5rem] font-bold text-center w-full">{formatCurrency(totalPrice, 'BRL')}</h1>
      </div>
    </section>
  )
}