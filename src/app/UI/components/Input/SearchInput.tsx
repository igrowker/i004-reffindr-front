import { InputHTMLAttributes } from "react";
import { IoSearch } from "react-icons/io5"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    type?: 'text';
    onSearch: () => void;
    fullWidth?: boolean;
}

export const SearchInput = ({ onSearch, fullWidth = true, className, ...attr }: Props) => {
    return (
        <div className="flex">
            <button onClick={onSearch} className="transition-colors duration-150 bg-[#cdcdcd] hover:bg-[#bcbcbc] p-3 ">
                <IoSearch />
            </button>
            <input
                {...attr}
                className={`${className} ${fullWidth ? 'w-full' : 'w-auto'}  border-[1px] focus:outline-none p-2`}
                type="text"
            />
        </div>
    )
}
