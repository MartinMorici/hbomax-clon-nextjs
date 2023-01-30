import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import Logo from '../public/logo.png';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AppContext } from '@/context/AppContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

  const context = useContext(AppContext)

  const desloguear = () => {
    signOut(auth).then(() => {
      console.log('deslogueo');
    }).catch((error) => {
      console.log(error);
    });
  }
  

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
    <>
      { context.currentUser ? <>
        <header className={`py-5 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px]  text-[#ffffffb3] z-10 font-bold flex justify-between items-center fixed w-full transition-all duration-500 ${isScrolled ? 'bg-[#0f0f0ffa]' : 'bg-headerGradient'} select-none`}>
          <div className='flex items-center gap-6'>
            <RxHamburgerMenu className='w-6 h-6 cursor-pointer' onClick={() => setNavIsOpen(!navIsOpen)}/>
            <Link href='/peliculas'>
              <div className='hidden md:block link-menu'>Películas</div>
            </Link>
            <Link href='/series'>
              <div className='hidden md:block link-menu'>Series</div>
            </Link>
          </div>
          <Link href='/'>
            <Image src={Logo} alt='Logo HBO Max' className='h-4 w-24 md:w-[134px] md:h-[23px] cursor-pointer'/>
          </Link>
          <div className='flex items-center gap-3'>
            <BiSearch className='w-6 h-6 cursor-pointer' />
            <div className='flex items-center'>
              <div className='w-7 h-7 md:w-[38px] md:h-[38px]  rounded-full bg-profile font-semibold relative cursor-pointer '>
                <div className=' text-white absolute w-[24px] h-[24px] md:w-[34px] md:h-[34px] uppercase rounded-full bg-[#000000cc] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center'>
                  {context.currentUser.email.substring(0,1)}
                </div>
              </div>
              <div onClick={desloguear} className='hidden md:block ml-2 hover:font-bold hover:text-white cursor-pointer capitalize'>
                {context.currentUser.email.substring(0, context.currentUser.email.indexOf('@'))}
              </div>
            </div>
          </div>
        </header>
        <aside className={`fixed inset-0 h-screen text-white bg-[#000000b3] transition-all duration-100  ${navIsOpen ? 'opacity-100 z-[12] block' : 'opacity-0 -z-20  '}`}>
          <div className={`py-5 px-[36px] md:px-[60px]  h-screen w-fit bg-[#0f0f0f] transition-all duration-100  ${navIsOpen ? 'translate-x-[0%]' : 'translate-x-[-10%] '}`}>
            <nav className=' w-56 md:w-72 h-screen'>
              <RiCloseFill className='w-[30px] h-[30px] cursor-pointer relative -left-[2px] hover:text-white' onClick={() => setNavIsOpen(!navIsOpen)}/>
              <ul className='font-normal text-[19px] md:text-2xl'>
                <Link href='/'>
                  <li className='mt-6 link-menu select-none' onClick={() => setNavIsOpen(false)}>Inicio</li>
                </Link>
                <Link href='/series'>
                  <li className='mt-6 link-menu select-none' onClick={() => setNavIsOpen(false)}>Series</li>
                </Link>
                <Link href='/peliculas'>
                  <li className='mt-6 link-menu select-none' onClick={() => setNavIsOpen(false)}>Peliculas</li>
                </Link>
                <li className='mt-6 link-menu select-none text-gray-500 line-through'>Originales</li>
                <li className='mt-6 link-menu select-none text-gray-500 line-through'>Recién Añadidos</li>
                <li className='mt-6 link-menu select-none text-gray-500 line-through'>Últimos Días</li>
                <li className='mt-6 link-menu select-none text-gray-500 line-through'>Próximamente</li>
                <li className='mt-6 link-menu select-none text-gray-500 line-through'>En Tendencia</li>
              </ul>
            </nav>
          </div>
        </aside>
      </> : null}
    </>
  );
};

export default Header;
