interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
}

const TextInput: React.FC<Props> = ({ 
  label, 
  labelClassName, 
  inputClassName, 
  ...inputProps 
}) => {
  return (
    <div className="flex flex-col p-2 font-roboto text-sm">
      {label && (
        <label className={labelClassName} htmlFor={inputProps.id}>
          {label}
        </label>
      )}
      <input
        className={inputClassName}
        {...inputProps}
      />
    </div>
  );
};

export default TextInput;
