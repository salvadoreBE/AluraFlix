import logo from '../assets/AluraLogo.png';

type footerProps = {
    className?: string;
}

export default function Footer({ className }: footerProps) {
  return (
    <>
        <footer className={`w-full h-24 bg-[#262626] ${className} flex justify-center items-center border-t-2 border-[#247ae5]`}>
            <img src={logo} className='h-9 w-auto'/>
        </footer>
    </>
  )
}
