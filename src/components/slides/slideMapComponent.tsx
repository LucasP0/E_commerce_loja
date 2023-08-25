import { Link } from "react-router-dom"

export const SlideMap = ({ data }: any) => {
  const { name, detail, price, img, id } = data
  return (
    <div className="flex  justify-center items-center ">
      <div className="flex flex-row items-center w-[90%] max-md:w-[100%] bg-white rounded-[10px] p-4 overflow-hidden max-md:h-40 relative">
        <div className="left-s flex flex-col items-start">
          <div className="name flex flex-col gap-4 ">
            <span className="tex-[1.4rem] font-semibold">
              {name}
            </span>
            <span className="text-[0.7rem] ">
              {detail}
            </span>
          </div>
          <span className="text-[2rem] font-bold">{price}</span>
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