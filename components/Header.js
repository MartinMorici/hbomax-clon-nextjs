/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import { RxHamburgerMenu } from 'react-icons/rx';
import { BiSearch } from 'react-icons/bi';
import { RiCloseFill } from 'react-icons/ri';
import { HiLogout } from 'react-icons/hi';
import Logo from '../public/logo.png';
import CN from '../public/cn.png';
import DC from '../public/dc.png';
import HBO from '../public/hbo.png';
import Max from '../public/max.png';
import WB from '../public/wb.png';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AppContext } from '@/context/AppContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [logout, setLogout] = useState();

  const context = useContext(AppContext);

  const desloguear = () => {
    signOut(auth)
      .then(() => {
        console.log('deslogueo');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navHandler = () => {
    if (navIsOpen) {
      document.body.style.overflow = 'unset';
      setNavIsOpen(false);
    } else {
      if (typeof window != 'undefined' && window.document) {
        document.body.style.overflow = 'hidden';
      }
      setNavIsOpen(true);
    }
  };

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
      {context.currentUser ? (
        <>
          <header className={`py-5 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px]  text-[#ffffffb3] z-10 font-bold flex justify-between items-center fixed w-full transition-all duration-500 ${isScrolled ? 'bg-[#0f0f0ffa]' : 'bg-headerGradient'} select-none`}>
            <div className='flex items-center gap-6'>
              <RxHamburgerMenu className='w-6 h-6 cursor-pointer' onClick={navHandler} />
              <Link href='/peliculas'>
                <div className='hidden md:block link-menu'>Películas</div>
              </Link>
              <Link href='/series'>
                <div className='hidden md:block link-menu'>Series</div>
              </Link>
            </div>
            <Link href='/'>
              <Image src={Logo} alt='Logo HBO Max' className='h-4 w-24 md:w-[134px] md:h-[23px] cursor-pointer' />
            </Link>
            <div className='flex items-center gap-3'>
              <Link href='/search'>
                <BiSearch className='w-6 h-6 cursor-pointer' />
              </Link>
              <div className='flex items-center'>
                <div className='w-7 h-7 md:w-[38px] md:h-[38px]  rounded-full bg-profile font-semibold relative cursor-pointer '>
                  <div className=' text-white absolute w-[24px] h-[24px] md:w-[34px] md:h-[34px] uppercase rounded-full bg-[#000000cc] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-center'>{context.currentUser.email.substring(0, 1)}</div>
                </div>
                <div onClick={desloguear} onMouseOver={() => setLogout('Logout ✗ ')} onMouseOut={() => setLogout(null)} className='hidden md:block ml-2 hover:font-bold hover:text-white cursor-pointer capitalize'>
                  {logout ? logout : context.currentUser.email.substring(0, context.currentUser.email.indexOf('@'))}
                </div>
              </div>
            </div>
          </header>
          <aside className={`fixed inset-0 h-screen text-white bg-[#000000b3] transition-all duration-100  ${navIsOpen ? 'opacity-100 z-[12] block' : 'opacity-0 -z-20  '}`}>
            <div className={`py-5 px-[36px] md:px-[60px]  h-screen w-fit bg-[#0f0f0f] transition-all duration-100  ${navIsOpen ? 'translate-x-[0%]' : 'translate-x-[-10%] '} overflow-scroll sm:overflow-auto`}>
              <nav className=' w-56 md:w-72'>
                <RiCloseFill className='w-[30px] h-[30px] cursor-pointer relative -left-[2px] hover:text-white' onClick={navHandler} />
                <ul className='font-normal text-[19px] md:text-2xl'>
                  <Link href='/'>
                    <li className='mt-6 link-menu select-none' onClick={navHandler}>
                      Inicio
                    </li>
                  </Link>
                  <Link href='/series'>
                    <li className='mt-6 link-menu select-none' onClick={navHandler}>
                      Series
                    </li>
                  </Link>
                  <Link href='/peliculas'>
                    <li className='mt-6 link-menu select-none' onClick={navHandler}>
                      Peliculas
                    </li>
                  </Link>
                  <li className='mt-6 link-menu select-none text-gray-500 line-through'>Originales</li>
                  <li className='mt-6 link-menu select-none text-gray-500 line-through'>Recién Añadidos</li>
                  <li className='mt-6 link-menu select-none text-gray-500 line-through'>Últimos Días</li>
                  <li className='mt-6 link-menu select-none text-gray-500 line-through'>Próximamente</li>
                  <li className='mt-6 link-menu select-none text-gray-500 line-through'>En Tendencia</li>
                </ul>
              </nav>
              <div className='w-full h-[1px] bg-gray-400 mt-8'></div>
              <div className='grid grid-cols-2 gap-5 place-items-center mt-8'>
                <Image src={CN} alt='Logo Cartoon Network' />
                <Image src={DC} alt='Logo DC' />
                <Image src={HBO} alt='Logo HBO' />
                <Image src={Max} alt='Logo Max Originals' />
                <Image src={WB} alt='Logo Warner Bros' />
              </div>
              <div className='w-full h-[1px] bg-gray-400 mt-8'></div>
              <div className='mt-6 link-menu select-none text-xl flex items-center gap-2 pb-32 sm:pb-0' onClick={desloguear}>
                Logout <HiLogout className='relative top-[1px]' />{' '}
              </div>
              <div className='text-white mt-3 text-xs'>Desarrollado por <a className='underline' target='_blank'rel="noreferrer" href="https://www.linkedin.com/in/martinmorici/">Martín Morici</a></div>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
};

export default Header;
