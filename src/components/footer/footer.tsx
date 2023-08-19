import Logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div className='cFooterWrap w-full mt-20'>
      <hr className='w-full  border-white mt-4'/>
      <div className='cfooter'>
        <div className='logo'>
          <img src={Logo} alt="logo" />
          <span>Amazon</span>
        </div>
      </div>
    </div>
  )
}