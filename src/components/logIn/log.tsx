import { Link } from "react-router-dom"
import { Footer } from "../footer/footer"
import { LogComponent } from "./logComponent"
import logo from '../../assets/logo.png';

export const Log = () => {
  return (
    <>
    <div>
    <div className="Logo flex flex-row flex-1 items-center gap-2">
        <Link to={'/'} className='flex flex-row items-center gap-2'>
          <img
            className='w-10 h-10'
            src={logo} alt="" />
          <span className='font-semibold'>Amazon</span>
        </Link>
      </div>
    </div>
    <LogComponent />
    <Footer />
    </>
  )
}