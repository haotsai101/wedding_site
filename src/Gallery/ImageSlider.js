import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='flex pt-16 justify-center'>
      <FaArrowAltCircleLeft className='z-10 text-5xl text-black cursor-pointer select-none m-auto ml-8 lg:ml-12' onClick={prevSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img 
                src={slide.image} 
                alt='Tina and Zhihao in LOVE~' 
                className='inline-flex rounded-lg max-h-[44rem]'
              />
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className='z-10 text-5xl text-black cursor-pointer select-none m-auto mr-8 lg:mr-12' onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
