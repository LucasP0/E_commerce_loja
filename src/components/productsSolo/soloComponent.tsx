/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductsData } from "../../data/products";
import { Star } from "lucide-react";

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

  return (
    <div>
      {blog ? (
        <div className="h-screen flex flex-col items-center justify-start mt-20">
          <div className="bg-white w-[1250px] h-[800px] flex flex-row items-center rounded-md p-6">
            <section className="flex flex-col gap-6 items-center w-full  ">
              <img
                src={blog.img}
                alt=""
                width={140}
                className="border-black/70 hover:scale-150 hover:rotate-2"
                />
              <div className="flex flex-row gap-16">
                <img src={blog.img} alt="" width={80} className="hover:scale-150 hover:rotate-2"/>
                <img src={blog.img} alt="" width={80} className="hover:scale-150 hover:rotate-2"/>
                <img src={blog.img} alt="" width={80} className="hover:scale-150 hover:rotate-2"/>
              </div>
              
            </section>
            <section className=" w-full flex flex-col gap-6 items-center border-2 border-black h-[600px] justify-center rounded-md ">
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
                <button className="border-2 border-blue-800 w-[250px] h-12 rounded-md hover:bg-black hover:text-white">Ad. Carrinho</button>
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