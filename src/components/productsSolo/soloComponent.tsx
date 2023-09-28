/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductsData } from "../../data/products";
import { Star } from "lucide-react";
import { AppContext } from "../../context/AppContext";

interface IBlog {
  name: string;
  img: string;
  blog: any[];
  detail: string;
  price: number;
}

export const SoloComoponent = () => {
  const { id }: any = useParams();
  const [blog, setBlog] = useState<IBlog>();
  useEffect(() => {
    let blog: any = ProductsData.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [])

  const { cartItems, setCartItems } = useContext<any>(AppContext);
  const handleClick = () => {
    setCartItems([...cartItems, blog])
  }

  return (
    <div>
      {blog ? (
        <div className="h-screen flex flex-col items-center justify-start mt-20 max-sm:mt-0 max-sm:border-t-[2px] max-sm:w-full  ">
          <div className="bg-white w-[1250px] max-sm:w-full h-[800px] max-h-screen flex flex-row items-center rounded-md p-6 max-sm:flex-col max-sm:gap-6 ">
            <section className="flex flex-col gap-6 items-center w-full  ">
              <img
                src={blog.img}
                alt=""
                width={140}
                className="max-sm:w-14 border-black/70 hover:scale-150 hover:rotate-2"
              />
              <div className="flex flex-row gap-16 ">
                <img src={blog.img} alt="" width={80} className="max-sm:w-9 hover:scale-150 hover:rotate-2" />
                <img src={blog.img} alt="" width={80} className="max-sm:w-9 hover:scale-150 hover:rotate-2" />
                <img src={blog.img} alt="" width={80} className="max-sm:w-9 hover:scale-150 hover:rotate-2" />
              </div>
            </section>

            <section className=" w-full flex flex-col gap-6 items-center border-2 border-black h-[600px] max-sm:border-0 max-sm:border-t-[1px] max-sm:rounded-none max-sm:w-[350px] justify-center rounded-md max-sm:border-[#9c9c9c] ">
              <div className="flex flex-col items-center">
                <h1 className="text-[2.7rem] font-bold">{blog.name}</h1>
                <p>{blog.detail}</p>
              </div>
              <div className="flex flex-row gap-2">
                <Star color="#84d61f" />
                <Star color="#84d61f" />
                <Star color="#84d61f" />
                <Star color="#84d61f" />
                <Star color="#84d61f" />
              </div>
              <h2 className="text-[2rem] font-bold">{blog.price}$</h2>
              <div className="flex flex-col items-center gap-4 ">
                <button className="border-2 border-blue-800 w-[250px] h-12 rounded-md hover:bg-black hover:text-white">Comprar</button>
                <button onClick={handleClick} className="border-2 border-blue-800 w-[250px] h-12 rounded-md hover:bg-black hover:text-white">Ad. Carrinho</button>
              </div>
            </section>
          </div>
        </div>
      ) : (
        <h1>Não tem</h1>
      )}
    </div>
  )
}