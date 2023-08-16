import { useState } from 'react'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products';

export const ProductsComponent = () => { 
  const [menuData, SetMenuData] = useState(ProductsData); 
  return (
    <div className='container '>
      <img src={Plane} alt="" />
      <h1>Seus futuros Produtos</h1>

      <div className='products'>
        <ul className='menu'>
          <li>All</li>
          <li>Skin Care</li>
          <li>Condicionadores</li>
          <li>Marcas</li>
        </ul>
        <div className='list'>
          {
            menuData.map((product, i) => (
              <div className='product'>
                
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}