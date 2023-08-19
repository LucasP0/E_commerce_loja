interface Iprops {
  icon: JSX.Element;
  spanOne: string;
  spanTwo: string;
}

export const FooterComponent = ({ icon, spanOne, spanTwo }: Iprops) => {
  return (
    <div className='bloc '>
      <div className='detail'>
        <span>{spanOne}</span>
        <span className='pngLinE'>
          {icon}
          <span>{spanTwo}</span>
        </span>
      </div>
    </div>
  )
}