/* eslint-disable @next/next/no-img-element */
import requests from '@/utils/requests';
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';
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
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <div className={`${props.gradient ? 'bg-rowGradient' : ''}  mt-[-6px] group`}>
      <h2 className='ml-[28px] sm:ml-[36px] md:ml-[48px] lg:ml-[60px] font-bold text-white text-xl mb-3 flex items-center'>{props.titulo}</h2>
      <div className="slider-container">
          <Slider {...settings}>
            {props.movies.map((movie) => {
              return (
                <div key={movie.id} className={`pr-2 focus-visible:outline-none`}>
                  <img
  
                    className=''
                    src={requests.imgBase + movie.backdrop_path}
                    alt={movie.title}
                  />
                </div>
              );
            })}
          </Slider>
      </div>
    </div>
  );
};

export default Row;
