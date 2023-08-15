import Plane from '../../assets/plane.png'

export const ProductsComponent = () => {  
  return (
    <div className='container '>
      <img src={Plane} alt="" />
      <h1>Seus futuros Produtos</h1>

      <div className='products'>
        <ul className='menu'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>

  )
}