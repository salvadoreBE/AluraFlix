import banner from '../assets/AluraBanner.png'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import { TagIcon } from '../assets/Icons';

export default function HomeBanner() {
  return (
    <div className='pt-24 hidden w-ful md:h-[50dvh] lg:h-dvh h-dvh relative bg-[#262626] pb-5 md:flex items-center'>
        <div className='absolute md:w-[310px] lg:w-[560px] right-0 mr-10 overflow-hidden rounded-lg h-fit z-10'>
            <LiteYouTubeEmbed 
                id="ov7vA5HFe6w" 
                title="Qué Significa Pensar Como Programador"
                adNetwork={true}
                playlist={false}
                poster="hqdefault"
                noCookie={true}
            />
        </div>
        <div className='absolute w-2/4 h-fit flex md:gap-y-6 lg:gap-y-8 items-start flex-col z-10 ml-10'>
            <span className='text-[#247ae5] opacity-95 md:text-1xl lg:text-2xl rounded-xl flex items-center border-2 border-[#247ae5] bg-white gap-x-2 font-bold md:py-2 md:px-6 lg:px-7 lg:py-2'>
                <TagIcon className='lg:size-7 md:size-5'/>
                FRONT END
            </span>
            <div className='md:gap-y-2 lg:gap-y-4 flex flex-col'>
                <h1 className='text-white font-bold md:text-3xl lg:text-5xl'>Challenge React</h1>
                <p className='text-white text-pretty md:text-sm lg:text-lg'>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
        </div>
      <img src={banner} className='w-full h-full object-cover blur-sm border-t-4 border-b-4 border-[#247ae5]'/>
    </div>
  )
}
