import { MapPin } from 'lucide-react'
import Logo from '../../assets/logo.png'
import { FooterComponent } from './footerComponent'

export const Footer = () => {
  return (
    <div className='cFooterWrap w-full mt-20'>
      <hr className='w-full  border-white mt-4' />
      <div className='cfooter flex w-full justify-around'>
        <div className='logo flex items-start gap-4'>
          <img
            src={Logo}
            alt="logo"
            className='w-10 h-10'
          />
          <span className='font-semibold text-base '>Amazon</span>
        </div>


      </div>
    </div>
  )
}