interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<Props> = ({ className, ...attr }) => {
  return (
    <input
      className={className}
      {...attr}
    />
  );
};

export default Input;
