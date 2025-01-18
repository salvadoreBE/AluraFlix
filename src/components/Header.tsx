import logo from '../assets/AluraLogo.png';
import { HomeIcon, PlusIcon } from '../assets/Icons';
import { Link } from 'react-router-dom';

export default function Header() {

  return (
    <>
        <header className="bg-[#262626] h-24 fixed top-0 z-20 w-full flex items-center justify-center sm:justify-between px-6 sm:px-14">
          <div className='sm:flex hidden'>
            <img src={logo} className='object-cover h-9 w-auto'/>
          </div>
          <div className='flex gap-x-6'>
            <Link to={"/"} className='sm:text-base text-sm font-semibold bg-[#247ae5] text-white rounded-full py-2 px-4 items-center flex gap-x-3'>
              <HomeIcon className='sm:size-6 size-5'/>
              INICIO
            </Link>
            <Link to={"/newVideo"} className='sm:text-base text-sm font-semibold border border-white text-white rounded-full py-2 px-4 items-center flex gap-x-3'>
              <PlusIcon className='sm:size-6 size-5'/>
              NUEVO VIDEO
            </Link>
          </div>
        </header>
    </>
  )
}
