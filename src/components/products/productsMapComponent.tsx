/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";

interface data {
  data: any;
  name: string;
  detail: string;
  price: number;
  img: any;
  id: number; 
}

export const ProductMap = ({ data }: data) => {
  const { name, detail, price, img, id } = data;
  return (
    <div className='w-56 h-32 flex flex-row items-center  bg-white rounded-[10px] p-4 overflow-hidden relative max-md:w-52 '>
      <div className='left-s flex flex-col items-start'>
        <div className='name flex flex-col gap-2'>
          <span className='text-[1rem] font-bold'>{name}</span>
          <span className='text-[0.7rem]'>{detail}</span>
          <span className='text-[1rem] font-bold'>{price}$</span>
          <Link to={`/pro/${id}`}>
            <div className="text-[0.6rem] border-2 border-black p-2 w-[90px] rounded-[15px] text-center cursor-pointer hover:bg-black hover:text-white">Show Now
            </div>
          </Link>
        </div>
        <img
          src={img}
          alt=""
          className='w-24 h-44 top-12 rotate-[-20deg] absolute right-[-20px]  bottom-[-20%] ' />
      </div>
    </div>


  )
}