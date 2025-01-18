import { CategoryIcon } from "../assets/Icons";

type TitleBadgeProps = {
    slot: React.ReactNode; 
    className?: string;
}

export const TitleBadge: React.FC<TitleBadgeProps> = ({ slot, className }) => {
  return (
    <span className={`flex text-lg md:text-2xl w-fit items-center font-bold gap-x-3 px-4 py-2 md:px-6 md:py-2.5 rounded-2xl border-4 ${className}`}>
        <CategoryIcon className='md:size-7 size-6'/>
        {slot}
    </span>
  )
}
