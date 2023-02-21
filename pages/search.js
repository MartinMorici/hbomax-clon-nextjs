import requests from '@/utils/requests';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { BiPlay } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';

const Search = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`);
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <>
      <Head>
        <title>HBO Max</title>
        <meta name='description' content='Desarrollado por Martín Morici' />
      </Head>
      <main className='min-h-screen px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] pt-20'>
        <form className='h-fit' action='' onSubmit={searchMovies}>
          <div className='relative'>
            <BiSearch className='absolute top-1/2 -translate-y-1/2 left-5 text-white w-7 h-7' />
            <input placeholder='¿Qué estás buscando?' type='text' className=' pl-14 rounded-md placeholder-[#ffffffb3] text-white font-normal text-lg  h-16 border-none outline-none w-full bg-[#3f3d3d50]' value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
        </form>
        <section className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-[28px] sm:px-[36px] md:px-[48px] lg:px-[60px] pt-[20px] gap-4'>
          {movies?.map((movie) => {
            if (movie.backdrop_path === null) {
              return null;
            }
            return (
              <Link
                href={{
                  pathname: `/peliculas/${movie.id}`,
                }}
                key={movie.id}
              >
                <div className={` w-full`}>
                  <div className={`relative focus-visible:outline-none outline-[rgb(0,0,0,0)] outline outline-2 outline-offset-[-2px] transition-all duration-300 hover:outline-[#663399]`}>
                    <Image width={360} height={200} src={requests.imgBase + movie.backdrop_path} alt={movie.title || movie.original_name} />
                    <div className='absolute inset-0 group/btn bg-[rgb(0,0,0,0.2)] hover:bg-[rgb(0,0,0,0.0)] transition-all duration-300'>
                      <div className='opacity-0 absolute group-hover/btn:opacity-100 bottom-0 right-0 pr-4 pb-3 flex items-center transition-all duration-300'>
                        <button aria-label='Play' className='rounded-full flex justify-center items-center p-[2px] bg-slate-300 hover:bg-white hover:scale-110'>
                          <BiPlay className='relative left-[2px] w-8 h-8' />
                        </button>
                        <button aria-label='Agregar a mi lista' className='ml-2 rounded-full flex justify-center items-center p-2 bg-slate-300 hover:bg-white hover:scale-110'>
                          <HiPlus className=' w-5 h-5' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Search;
