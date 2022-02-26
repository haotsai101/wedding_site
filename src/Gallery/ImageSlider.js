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
    <section className='relative flex pt-16 justify-center'>
      <FaArrowAltCircleLeft className='left-arrow m-auto ml-8 lg:ml-16' onClick={prevSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='inline-flex rounded-lg'/>
            )}
          </div>
        );
      })}
      <FaArrowAltCircleRight className='right-arrow m-auto mr-8 lg:mr-16' onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
