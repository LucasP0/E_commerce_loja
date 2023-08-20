interface Iprops {
  icon: JSX.Element;
  spanOne: string;
  spanTwo: string;
}

export const FooterComponent = ({ icon, spanOne, spanTwo }: Iprops) => {
  return (
    <div className='bloc flex flex-col gap-4 max-w-[12rem]'>
      <div className='detail flex flex-col w-inherit text-[0.7rem] gap-4 italic '>
        <span className="font-medium not-italic text-[1rem]">{spanOne}</span>
        <span className='pngLinE'>
          {icon}
          <span>{spanTwo}</span>
        </span>
      </div>
    </div>
  )
}