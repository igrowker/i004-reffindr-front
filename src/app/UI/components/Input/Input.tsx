import { InputProps } from '@/types'

export const Input: React.FC<InputProps> = ({
  id,
  type,
  className,
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  return (
    <input
      id={id}
      type={type}
      className={`w-full rounded-md border border-gray-300 p-2 text-base focus:border-blue-500 focus:outline-none ${className}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
