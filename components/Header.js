import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import Logo from '../public/logo.png';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`py-5 px-[36px] md:px-[60px] text-[#ffffffb3] font-bold flex justify-between items-center fixed w-full transition-all duration-500 ${
        isScrolled ? 'bg-[#0f0f0ffa]' : ''
      } select-none`}
    >
      <div className='flex items-center gap-6'>
        <RxHamburgerMenu
          className='w-6 h-6 cursor-pointer'
          onClick={() => setNavIsOpen(!navIsOpen)}
        />
        <div className='hidden md:block link-menu'>Películas</div>
        <div className='hidden md:block link-menu'>Series</div>
      </div>

      <aside
        className={`absolute inset-0 h-screen  bg-[#000000b3] transition-all duration-200  ${
          navIsOpen ? 'opacity-100 z-10' : 'opacity-0 -z-10'
        }`}
      >
        <div
          className={`py-5 px-[36px] md:px-[60px]  h-screen w-fit bg-[#0f0f0f] transition-all duration-200  ${
            navIsOpen ? 'translate-x-[0%]' : 'translate-x-[-10%] '
          }`}
        >
          <nav className=' w-56 md:w-72 h-screen'>
            <RiCloseFill
              className='w-[30px] h-[30px] cursor-pointer relative -left-[2px] hover:text-white'
              onClick={() => setNavIsOpen(!navIsOpen)}
            />
            <ul className='font-normal text-[19px] md:text-2xl'>
              <li className='mt-6 link-menu '>Inicio</li>
              <li className='mt-6 link-menu'>Series</li>
              <li className='mt-6 link-menu'>Peliculas</li>
              <li className='mt-6 link-menu'>Originales</li>
              <li className='mt-6 link-menu'>Recién Añadidos</li>
              <li className='mt-6 link-menu'>ÚIltimos Días</li>
              <li className='mt-6 link-menu'>Próximamente</li>
              <li className='mt-6 link-menu'>En Tendencia</li>
            </ul>
          </nav>
        </div>
      </aside>

      <Image
        src={Logo}
        alt='Logo HBO Max'
        className='h-4 w-24 md:w-[134px] md:h-[23px] cursor-pointer'
      />

      <div className='flex items-center gap-3'>
        <BiSearch className='w-6 h-6 cursor-pointer' />

        <div className='flex items-center'>
          <div className='w-7 h-7 md:w-[38px] md:h-[38px]  rounded-full bg-profile font-semibold relative cursor-pointer '>
            <div className=' text-white absolute w-[24px] h-[24px] md:w-[34px] md:h-[34px] rounded-full bg-[#000000cc] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center'>
              M
            </div>
          </div>
          <div className='hidden md:block ml-2 hover:font-bold hover:text-white cursor-pointer'>
            Martín
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
