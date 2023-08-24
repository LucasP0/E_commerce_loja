import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ProductsData } from "../../data/products";

export const SoloComoponent = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState();
  useEffect(() => {
    let blog: any = ProductsData.find((blog) => blog.id === parseInt(id));
    if (blog) {
      setBlog(blog);
    }
  }, [])

  return (
    <div>
      {blog ? (
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="bg-black">1k</div>
        </div>
      ) : (
        <h1>Não tem</h1>
      )}
    </div>
  )
}