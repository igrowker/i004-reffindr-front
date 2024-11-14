import Logo from "/assets/icons/logo-text-white.svg";

const IconLogoTextWhite: React.FC = () => {
  return (
    <div className="flex justify-center">
      <img src={Logo} alt="Logo text white reffindr" className="w-48 md:w-52 lg:w-60" />
    </div>
  );
};

export default IconLogoTextWhite;
