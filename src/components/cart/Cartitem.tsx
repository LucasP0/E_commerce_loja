import { Trash2 } from "lucide-react"
import formatCurrency from "./formatCurrency";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

interface Idata {
  id: number;
  name: string;
  price: number;
  img: string;
  data: any;
  detail: string;
}


export const CartItem = ({ data }: Idata) => {
  const { id, name, price, img, detail } = data;
  const { cartItems, setCartItems } = useContext(AppContext);


  const handleRemoveItem = () => {
    const remove = cartItems.filter((item) => item.id != id);
    setCartItems(remove);
  }




  return (
    <section className="flex flex-row items-center border-b-2 pb-5 mb-5 gap-2 last:border-0">

      <img
        className="w-10"
        src={img}
        alt="imagem do produto"
      />
      <div className=" w-full flex flex-row gap-2 items-center justify-evenly">
        <div className="flex  flex-col items-center">
          <h3 className="text-[1rem] font-extrabold text-black/50 ">
            {name}

          </h3>
          <h3 className="text-[0.75rem]">{detail}</h3>
          <h3 className="text-[25px] font-bold">
            {formatCurrency(price, 'BRL')}
          </h3>
        </div>
        <button
          className="button_remove-item"
          type="button"
        >
          <Trash2
            onClick={handleRemoveItem}
            color="#d83232" size={20} />
        </button>
      </div>
    </section>
  )
}