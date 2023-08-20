import { MapPin, Smartphone } from 'lucide-react'
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
        {/* contat Us */}
        <div className='bloc flex flex-col gap-4 max-w-[12rem]'>
          <h1>Contat US</h1>
          <FooterComponent
            spanOne='ok'
            icon={<MapPin />}
            spanTwo='Loja apenas Online'
          />
          <FooterComponent
            spanOne='ok'
            icon={<Smartphone />}
            spanTwo='+55 (91) 98753-0607'
          />
          <FooterComponent
            spanOne='ok'
            icon={<MapPin />}
            spanTwo='Loja apenas Online'
          />
        </div>

      </div>
    </div>
  )
}