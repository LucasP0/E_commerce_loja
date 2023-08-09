import { ShoppingCart } from 'lucide-react';
import logo from '../../assets/logo.png';

export const HeaderComponent = () => {
  return (
    <div className="Container p-6 flex flex-row items-center">
      <div className="Logo flex flex-row flex-1 items-end gap-2">
        <img
          className='w-10 h-10'
          src={logo} alt="" />
          <span className='font-semibold'>Amazon</span>
      </div>
      <div className="right flex flex-row gap-4 items-center">
        <div className="menu">
          <ul className='flex flex-row gap-4 text-lg font-semibold'>
            <li>Coleção</li>
            <li>Marcas</li>
            <li>Novo</li>
            <li>Promoções</li>
            <li>Eng</li>
          </ul>
        </div>
        <input 
          type="search"
          placeholder='Search...'
          className="search h-[30%] border-2 outline-none p-2 border-black" 
        />
        <ShoppingCart size={30}/>
      </div>
    </div>
  )
}