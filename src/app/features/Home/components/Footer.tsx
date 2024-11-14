import { Link } from 'react-router-dom';
import IconRedes from "@/app/UI/components/icon/IconRedes";
import { FiSend } from "react-icons/fi";
import Input from '@/app/UI/components/Input/Input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col-reverse items-center justify-around font-roboto text-_white bg-_blue h-[341px] pr-10 md:flex-row">
      <section className='w-full flex items-center justify-between px-5 space-y-6 md:w-3/12 md:flex-col'>
        <p>Copyright © {currentYear}</p>
        <IconRedes className="flex items-center justify-center space-x-3" />
      </section>
      <section className='w-11/12 mx-auto px-3 flex items-center justify-center space-x-5 md:w-4/12'>
        <div className='w-6/12 flex flex-col space-y-5 md:w-1/2'>
          <h3 className=' font-semibold text-xl'>Soporte</h3>
          <ul className='space-y-2 text-sm'>
            <li><Link to="#">Centro de atención</Link></li>
            <li><Link to="#">Términos de servicios</Link></li>
            <li><Link to="#">Legal</Link></li>
            <li><Link to="#">Política de privacidad</Link></li>
          </ul>
        </div>
        <div className='w-6/12 flex flex-col space-y-5 md:w-1/2'>
          <h3 className='w-full font-semibold text-xl md:w-8/12'>Recibí las novedades de propiedades</h3>
          <div className="relative w-full">
            <Input
              placeholder="Escribí tu email"
              className="w-full rounded-lg h-10 text-sm placeholder-_white bg-slate-50 bg-opacity-30 px-3 pr-10 focus:outline-none"
            />
            <FiSend size={17} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-_black" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
