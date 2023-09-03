import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ShoppingCart } from "lucide-react";

export const EmojiCar = () => {
  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);

  return (
    <button 
      className="flex flex-row relative  w-8"
      onClick={ () => setIsCartVisible(!isCartVisible)}
      >
      <ShoppingCart />
      
        {cartItems.length > 0 && <span className="absolute bg-white rounded-full text-xs w-4 top-[-50%] right-[80%]"> {cartItems.length}</span>}
    </button>
  );
}