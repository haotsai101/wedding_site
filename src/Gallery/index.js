import React from 'react';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

const Gallery = () => {
    return (
        <div className='pt-16 w-screen'>
            <a id="gallery"/>
            <ImageSlider slides={SliderData} />
        </div>
    );
};

export default Gallery;
