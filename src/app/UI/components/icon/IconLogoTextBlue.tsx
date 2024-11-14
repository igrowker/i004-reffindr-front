import Logo from "/assets/icons/logo-text-blue.svg";

const IconLogoTextBlue: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={Logo} alt="Logo text blue of reffindr" className="w-48 md:w-52 lg:w-60" />
    </div>
  );
};

export default IconLogoTextBlue;
