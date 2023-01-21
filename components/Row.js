/* eslint-disable @next/next/no-img-element */
import requests from '@/utils/requests';
import React from 'react';
import Slider from 'react-slick';

const Row = (props) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: props.slides,
    speed: 500,
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
    <div>
      <h2>{props.titulo}</h2>
      <div className="slider-container">
          <Slider {...settings}>
            {props.popularMovies.map((movie) => {
              return (
                <div key={movie.id} className={`px-2`}>
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
