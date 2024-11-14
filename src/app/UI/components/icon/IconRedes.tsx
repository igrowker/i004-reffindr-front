import { IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";

interface IconRedesProps {
  className?: string;
}

const IconRedes: React.FC<IconRedesProps> = ({ className }) => {
  return (
    <div className={className}>
      <Link to="https://www.instagram.com/">
        <IoLogoInstagram size={32} />
      </Link>
      <Link to="https://x.com/">
        <IoLogoTwitter size={32} />
      </Link>
      <Link to="https://www.youtube.com/">
        <IoLogoYoutube size={32} />
      </Link>
    </div>
  );
};

export default IconRedes;
