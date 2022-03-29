import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { SliderData as slides } from './SliderData';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div>
      <section className='flex pt-24 justify-center'>
        <FaArrowAltCircleLeft className='z-10 text-5xl text-black cursor-pointer select-none m-auto ml-8 lg:ml-12' onClick={prevSlide} />
        {slides.map((slide, index) => {
          return (
            <div
              className={index === current ? 'opacity-100 duration-1000 ease-in-out' : 'duration-1000 opacity-0 scale-90'}
              key={index}
            >
              {index === current && (
                <img 
                  src={slide.image} 
                  alt='Tina and Zhihao in LOVE~' 
                  className='inline-flex rounded-lg max-h-[40rem]'
                />
              )}
            </div>
          );
        })}
        <FaArrowAltCircleRight className='z-10 text-5xl text-black cursor-pointer select-none m-auto mr-8 lg:mr-12' onClick={nextSlide} />
      </section>
      <section className='flex mt-10 mx-8'>
        {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'scale-110 duration-300 ease-in-out z-10' : 'scale-90'}
                key={index + 10}
              >
                <img 
                  src={slide.image} 
                  alt='Tina and Zhihao in LOVE~' 
                  className='rounded-lg max-h-96'
                  onClick={() => setCurrent(index)}
                />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default ImageSlider;
