import { LogIn, Menu, ShoppingCart } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EmojiCar } from '../cart/emojiCarrinho';

export const HeaderComponent = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleShowMenu = () => {
    setShowMenu((showMenu) => !showMenu)
  }


  return (
      <div className="fixed conta---   p-6 flex flex-row items-center top-0 z-50 bg-[#F8E367] w-full">
        <div className="Logo flex flex-row flex-1 items-center gap-2">
          <Link to={'/'} className='flex flex-row items-center gap-2'>
            <img
              className='w-10 h-10'
              src={logo} alt="" />
            <span className='font-semibold'>Amazon</span>
          </Link>
        </div>
        <div className="max-right flex flex-row gap-4 items-center ">
          <div className='bars max-sm:block' onClick={handleShowMenu}>
            <Menu className='hidden max-sm:flex' />
          </div>
          <ul className='menu flex flex-row gap-4 text-lg font-semibold max-sm:text-center'
            style={{ display: showMenu ? 'inherit' : 'none' }}>
            <a href="#coleções" className='hover:text-white'>
              <li>Coleções</li>
            </a>
            <a href="#destaques" className='hover:text-white'>
              <li>Destaques</li>
            </a>
            <a href="#virtual" className='hover:text-white'>
              <li>Virtual</li>
            </a>
          </ul>
          <Link to={'/log'}>
            <div className='text-lg font-semibold flex flex-row items-center gap-2 hover:text-white'>
              <h2 className='max-sm:hidden'>Log In</h2>
              <LogIn size={30} />
            </div>
          </Link>
          <input
            type="search"
            placeholder='Search...'
            className="search h-[30%] border-2 outline-none max-sm:w-[150px] p-2 border-black max-sm:hidden max-md:hidden"
          />
          <EmojiCar />
        </div>
      </div>
  )
}