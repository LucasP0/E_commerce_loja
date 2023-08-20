interface Iprops {
  icon: JSX.Element;
  spanTwo: string;
}

export const FooterComponent = ({ icon, spanTwo }: Iprops) => {
  return (
      <div className='detail flex flex-col w-inherit text-[0.7rem] gap-4 italic '>
        <span className='pngLinE flex gap-4 items-center'>
          {icon}
          <span>{spanTwo}</span>
        </span>
      </div>

  )
}