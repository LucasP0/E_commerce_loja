import { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products';
import { ProductMap } from './productsMapComponent';
import { useAutoAnimate } from '@formkit/auto-animate/react'


export const ProductsComponent = () => {
  // FAZER ANIMAÇÃO
  const [parent] = useAutoAnimate()

  const [menuData, SetMenuData] = useState(ProductsData);
  // // BlogFetch.get('/products').then(({data}) => {
  //   SetMenuData(data);
  // }).catch((error) => console.log(error)

  const filter = (type) => {
    SetMenuData(ProductsData.filter((product) => product.type === type))
  }
  return (
    <div className='p-8 relative flex flex-col gap-8 text-center justify-center gap-4'>
      <img
        src={Plane}
        alt="ImgHeart"
        className='absolute w-32 left-[32%] top-[-3rem] hidden'
      />
      <h1 className='text-[1.8rem] font-extrabold mb-10'>Seus futuros Produtos</h1>

      <div className='grid w-[90%] grid-cols-2h max-md:grid-cols-none max-md:gap-4 max-md:w-[100%]'>
        <ul className='menu flex flex-col gap-4 font-medium text-[1.3rem] max-md:flex-row max-md:justify-center'>
          <li onClick={() => SetMenuData(ProductsData)} className='hover:text-pink-200 cursor-pointer'>
            All
          </li>
          <li onClick={() => filter("skin care")} className='hover:text-pink-200 cursor-pointer'>
            Skin Care
          </li >
          <li onClick={() => filter("conditioner")} className='hover:text-pink-200 cursor-pointer'>
            Conditioners
          </li>
          <li onClick={() => filter("foundation")} className='hover:text-pink-200 cursor-pointer'>
            Foundations
          </li>
        </ul>
        <div className='grid grid-cols-rep h-[25rem]  overflow-y-scroll max-sm:place-items-center 
        overflow-x-hidden max-md:gap-2 gap-y-2'ref={parent}>
          {
            menuData.map((product, i) => (
              <ProductMap data={product} />
            ))
          }
        </div>
      </div>
    </div>

  )
}