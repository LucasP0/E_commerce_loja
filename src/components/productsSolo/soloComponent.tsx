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
        <div>{blog.name}</div>
      ) : (
        <h1>Não tem</h1>
      )}
    </div>
  )
}