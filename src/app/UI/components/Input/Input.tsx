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
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  )
}
