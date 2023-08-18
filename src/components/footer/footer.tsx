import Logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div className='cFooterWrap w-full mt-20'>
      <hr/>
      <div className='cfooter w-full h-[1px] bg-white mt-4'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
          <span>Amazon</span>
        </div>
      </div>
    </div>
  )
}