import { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products';

export const ProductsComponent = () => { 
  const [menuData, SetMenuData] = useState(ProductsData); 
  // // BlogFetch.get('/products').then(({data}) => {
  //   SetMenuData(data);
  // }).catch((error) => console.log(error)

  return (
    <div className='p-8 relative flex flex-col gap-8 text-center justify-center '>
      <img 
        src={Plane} 
        alt="ImgHeart"
        className='absolute w-32 left-[32%] top-[-3rem]'
        />
      <h1>Seus futuros Produtos</h1>

      <div className='grid w-[90%] grid-cols-2h'>
        <ul className='menu flex flex-col gap-4 font-medium text-[1.3rem]   '>
          <li>All</li>
          <li>Skin Care</li>
          <li>Condicionadores</li>
          <li>Marcas</li>
        </ul>
        <div className='list '>
          {
            menuData.map((product, i) => (
              <div className='product'>
                Products
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}