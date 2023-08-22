import { Menu, ShoppingCart } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState
    (true);
  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu)
  }


  return (
    <div className="conta---   p-6 flex flex-row items-center">
      <div className="Logo flex flex-row flex-1 items-center gap-2">
        <img
          className='w-10 h-10'
          src={logo} alt="" />
        <span className='font-semibold'>Amazon</span>
      </div>

      <div className="max-right flex flex-row gap-4 items-center  ">
        <div className='bars max-sm:block' onClick={handleShowMenu}>
          <Menu />
        </div>

        <ul className='menu flex flex-row gap-4 text-lg font-semibold max-sm:text-center'
          style={{ display: showMenu ? 'inherit' : 'none' }}>
          <li>Coleção</li>
          <li>Marcas</li>
          <li>Novo</li>
          <li>Promoções</li>
          <li>Eng</li>
        </ul>
        <input
          type="search"
          placeholder='Search...'
          className="search h-[30%] border-2 outline-none max-sm:w-[150px] p-2 border-black max-sm:hidden"
        />
        <ShoppingCart size={30} />
      </div>
    </div>
  )
}