

export const ProductMap = ({ data }) => {
  const { name, detail, price, img } = data;
  return (
    <div className='w-48 h-32 flex flex-row items-center  bg-white rounded-[10px] p-4 overflow-hidden relative '>
      <div className='left-s flex flex-col items-start'>
        <div className='name flex flex-col gap-2'>
          <span className='text-[1rem] font-bold'>{name}</span>
          <span className='text-[0.7rem]'>{detail}</span>
          <span className='text-[1rem] font-bold'>{price}$</span>
          <div className="text-[0.6rem] border-2 border-black p-2 w-[90px] rounded-[15px] text-center cursor-pointer">Show Now</div>
        </div>
        <img
          src={img}
          alt=""
          className='w-24 h-44 top-12 rotate-[-20deg] absolute right-[-20px]  bottom-[-20%] ' />
      </div>
    </div>
  )
}