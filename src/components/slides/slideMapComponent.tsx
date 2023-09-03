/* eslint-disable @typescript-eslint/no-explicit-any */
import { ShoppingCart } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { AppContext } from "../../context/AppContext"
import formatCurrency from "../cart/formatCurrency"

interface Idata {
  name: string;
  detail: string;
  price: number;
  img: string;
  id: number,
  data: any;
}


export const SlideMap = ({ data }: Idata) => {
  const { name, detail, price, img, id } = data
  const { cartItems, setCartItems } = useContext<any>(AppContext);
    const handleClick = () => {
      setCartItems([ ...cartItems, data])
  }

  return (
    <div className="flex  justify-center items-center ">
      <div className="flex flex-row items-center w-[90%] max-md:w-[100%] bg-white rounded-[10px] p-4 overflow-hidden max-md:h-40 relative group ">
        <div className='absolute right-2 top-2 w-9 h-9 flex justify-center items-center opacity-0  group-hover:opacity-100 cursor-pointer  '>
          <ShoppingCart
            onClick={handleClick}
          />
        </div>
        <div className="left-s flex flex-col items-start">
          <div className="name flex flex-col gap-4 ">
            <span className="tex-[1.4rem] font-semibold">
              {name}
            </span>
            <span className="text-[0.7rem] ">
              {detail}
            </span>
          </div>
          <span className="text-[2rem] font-bold">{formatCurrency(price, 'BRL')}</span>
          <Link to={`/pro/${id}`} className="w-full">
            <div className="text-[0.6rem] border-2 border-black p-2  rounded-[15px] text-center cursor-pointer hover:bg-black hover:text-white">
              Shop now
            </div>
          </Link>

        </div>
        <img
          src={img} alt="product" className="img-p rotate-[-20deg] absolute right-0 w-[40%] bottom-[-20%] h-full" />
      </div>
    </div>
  )
}