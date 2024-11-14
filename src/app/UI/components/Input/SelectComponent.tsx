import Select, { ActionMeta, SingleValue } from 'react-select'

interface OptionsProps {
  label: string
  value: string
}

interface SelectProps {
  isClearable?: boolean
  isDisabled?: boolean
  isSearchable?: boolean
  options: OptionsProps[]
  className?: string
  value?: SingleValue<OptionsProps>
  defaultValue: OptionsProps | undefined
  placeholder?: string
  onChange: (
    newValue: SingleValue<OptionsProps>,
    actionMeta: ActionMeta<OptionsProps>
  ) => void
}

export const SelectComponent = ({
  isClearable = true,
  isDisabled = false,
  isSearchable = true,
  options,
  defaultValue,
  value,
  className = 'basic-single',
  placeholder = 'Selecciona una opción...',
  onChange,
}: SelectProps) => {
  return (
    <Select
      className={className}
      classNamePrefix='select'
      isDisabled={isDisabled}
      isClearable={isClearable}
      isSearchable={isSearchable}
      name='color'
      options={options}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
