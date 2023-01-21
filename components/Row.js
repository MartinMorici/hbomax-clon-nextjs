/* eslint-disable @next/next/no-img-element */
import Slider from 'react-slick';
import requests from '@/utils/requests';
import genres from '@/utils/genres';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import { BiPlay } from 'react-icons/bi';
import { HiPlus } from 'react-icons/hi';
const Row = (props) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} before:content-none right-[22px] z-1`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <SlArrowRight className='hidden group-hover:block w-5 h-5 text-white' />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} before:content-none left-[22px] z-[11]`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <SlArrowLeft className='hidden group-hover:block w-5 h-5 text-white' />
      </div>
    );
  }

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: props.slides,
    speed: 200,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: props.slides - 3,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: props.slides - 2,
        },
      },
    ],
  };
  return (
    <div
      className={`${
        props.gradient ? 'bg-rowGradient' : ''
      }  mt-[-6px] mb-[30px] group`}
    >
      <h2 className='ml-[28px] sm:ml-[36px] md:ml-[48px] lg:ml-[60px] font-bold text-white text-xl mb-3 flex items-center'>
        {props.titulo}
      </h2>
      <div className='slider-container'>
        <Slider {...settings}>
          {(props.genero ? genres : props.movies).map((movie) => {
            return (
              <>
                <div
                  key={movie.id}
                  className={`mr-2 relative focus-visible:outline-none outline-[rgb(0,0,0,0)] outline outline-2 outline-offset-[-2px] transition-all duration-300 hover:outline-[#663399]`}
                >
                  <img
                    className=''
                    src={
                      props.genero
                        ? movie.img.src
                        : requests.imgBase + movie.backdrop_path
                    }
                    alt={props.genero ? movie.alt : movie.title}
                  />
                  <div className='absolute inset-0 group/btn bg-[rgb(0,0,0,0.2)] hover:bg-[rgb(0,0,0,0.0)] transition-all duration-300'>
                    {props.genero ? null : (
                      <div className='opacity-0 absolute group-hover/btn:opacity-100 bottom-0 right-0 pr-4 pb-3 flex items-center transition-all duration-300'>
                        <button className='rounded-full flex justify-center items-center p-[2px] bg-slate-300 hover:bg-white hover:scale-110'>
                          <BiPlay className='relative left-[2px] w-8 h-8' />
                        </button>

                        <button className='ml-2 rounded-full flex justify-center items-center p-2 bg-slate-300 hover:bg-white hover:scale-110'>
                          <HiPlus className=' w-5 h-5' />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Row;
