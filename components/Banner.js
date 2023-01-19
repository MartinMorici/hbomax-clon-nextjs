/* eslint-disable @next/next/no-img-element */
import { MdNavigateNext } from 'react-icons/md';
import { SlArrowRight } from 'react-icons/sl';
import { SlArrowLeft } from 'react-icons/sl';

import Slider from 'react-slick';

const Banner = () => {
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
          borderRadius: '10px',
          padding: '10px',
          color:'white',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div>
      <Slider className='h-[89vh]' {...settings}>
        <div className='w-full h-full'>
          <img
            className='object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='w-full h-full'>
          <img
            className='object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='w-full h-full'>
          <img
            className='object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='w-full h-full'>
          <img
            className='object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='w-full h-full'>
          <img
            className='object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
        <div className='w-full h-full'>
          <img
            className='object-cover'
            src='https://via.placeholder.com/400'
            alt=''
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
