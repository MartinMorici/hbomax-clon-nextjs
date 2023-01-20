/* eslint-disable @next/next/no-img-element */
import requests from '@/utils/requests';
import { useState } from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
import Slider from 'react-slick';

const Banner = ({popularMovies}) => {
  const [movies, setMovies] = useState(popularMovies)


  console.log(popularMovies);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} before:content-none right-[22px] z-1`}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      >
        <SlArrowRight className='w-6 h-6 text-white' />
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
        <SlArrowLeft className='w-6 h-6 text-white' />
      </div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          bottom:'10px',
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
     customPaging: i => (
        <div
        className='bgcolor w-2 h-2 mx-0 bg-[#ffffff80] rounded-full '
        >
        </div>
      )
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map((movie) => {
          return (<div key={movie.id} className='h-[90vh] focus-visible:outline-none relative '>
            <img className='h-[90vh] w-full object-cover focus-visible:border-none' src={requests.imgBase + movie.backdrop_path} alt={movie.title} />
            <div className='absolute bottom-32 text-white pl-[36px] md:pl-[60px]'>
              <h2>{movie.title}</h2>
              <p className='w-[800px]'>{movie.overview}</p>
              <div>
                <button>PLAY</button>
                <button>Más Info</button>
              </div>
            </div>
          </div>)
        })}
        {/* <div className='h-[90vh]'>
          <img
            className=' h-[90vh] w-full object-cover'
            src='https://via.placeholder.com/1920x1080'
            alt=''
          />
        </div>
        <div className='h-[90vh]'>
          <img
            className='h-[90vh] w-full object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='h-[90vh]'>
          <img
            className='h-[90vh] w-full object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='h-[90vh]'>
          <img
            className='h-[90vh] w-full object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='h-[90vh]'>
          <img
            className='h-[90vh] w-full object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='h-[90vh]'>
          <img
            className='h-[90vh] w-full object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default Banner;
