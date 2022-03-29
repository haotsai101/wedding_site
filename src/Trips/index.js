import React from 'react';
import roadtripImg from './../assets/roadtrip.jpeg'
import incarImg from './../assets/incar.jpeg'
import adventureImg from './../assets/adventure.jpeg'
import { ImageData } from './ImageData'

const Trips = () => {
    console.log(ImageData)
        return (
        <div className='mt-16 mx-8 lg:mx-24'>
            <a id="trips"/>
            <div className='md:mx-12 lg:mx-4 xl:mx-36'>
                <div className='text-6xl font-bold mt-16'>Our Stories</div>
                <div className='flex mt-16'>
                    <div 
                        className='w-full shadow-2xl md:text-3xl pt-6 md:pt-16 lg:pt-24 px-2 md:px-4 lg:px-12'
                    >I used to like solo trips until our first road trip together</div>
                    <img 
                        className='w-auto h-auto'
                        src={roadtripImg} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-auto h-auto'
                        src={incarImg} 
                    />
                    <div 
                    >It’s so much better when you get to sing and laugh in the car with your love</div>
                </div>
                <div className='flex my-16'>
                    <div 
                        className='w-full shadow-2xl md:text-3xl pt-3 md:pt-16 lg:pt-24 px-2 md:px-4 lg:px-12'
                    >“As soon as I saw you, I knew you would be an adventure of a lifetime.” —Winnie the Pooh</div>
                    <img 
                        className='w-auto h-auto'
                        src={adventureImg} 
                    />
                </div>
                { ImageData.map((data, index) => {
                    if (index % 2 == 0) {
                        return (
                            <div className='flex mt-16'>
                                <div className='w-full'>
                                    <img 
                                        className='w-auto h-auto'
                                        src={data.image} 
                                    />
                                </div>
                                <div 
                                    className='w-full shadow-2xl md:text-4xl pt-6 md:pt-16 lg:pt-24 px-2 md:px-4 lg:px-12'
                                >{data.description}</div>
                            </div>
                        )
                    } else {
                        return (
                            <div className='flex mt-16'>
                                <div 
                                    className='w-full shadow-2xl md:text-4xl pt-6 md:pt-16 lg:pt-24 px-2 md:px-4 lg:px-12'
                                >{data.description}</div>
                                <div className='w-full'>
                                    <img 
                                        className='w-auto h-auto'
                                        src={data.image} 
                                    />
                                </div>
                            </div>
                        )
                    }
                }) }
                <div className='flex my-16'>
                    <div 
                        className='
                            w-full 
                            shadow-2xl 
                            text-2xl md:text-4xl lg:text-6xl 
                            px-2 lg:px-20 
                            py-12 md:py-24 lg:py-36
                            border-t-2 border-l-2 border-t-[#fdbab6] border-l-[#fdbab6]
                            '>
                                Many more adventures yet to come!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trips;
