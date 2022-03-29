import React from 'react';
import roadtripImg from './../assets/roadtrip.jpeg'
import incarImg from './../assets/incar.jpeg'
import adventureImg from './../assets/adventure.jpeg'
import Jan20Img from './../assets/Bryce_Jan_2020.jpg'
import Feb20Img from './../assets/Zion_Fed_2020.jpg'
import April20Img from './../assets/BYU_April_2020.jpg'
import Aug20Img from './../assets/Nauvoo_Aug_2020.jpg'
import Dec20Img from './../assets/Provo_Dec_2020.jpg'
import July21Img from './../assets/George_July_2021.jpg'
import June21Img from './../assets/Lafayette_June_2021.jpeg'
import Nov21Img from './../assets/Chicago_Nov_2021.jpg'
import Jan22Img from './../assets/Surf_Jan_2022.jpg'

const Trips = () => {
        return (
        <div className='mt-16 mx-8 lg:mx-24'>
            <a id="trips"/>
            <div className='md:mx-12 lg:mx-4 xl:mx-36'>
                <div className='text-6xl font-bold mt-16'>Our Stories</div>
                <div className='flex mt-16'>
                    <div 
                        className='w-full shadow-2xl md:text-3xl md:pt-20 px-2 pt-8 lg:px-12'
                    >I used to like solo trips until our first road trip together</div>
                    <img 
                        className='w-1/2 min-h-full'
                        src={roadtripImg} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={incarImg} 
                    />
                    <div 
                        className='w-full shadow-2xl md:text-3xl md:pt-32 px-2 pt-12 lg:px-20'
                    >It’s so much better when you get to sing and laugh in the car with your love</div>
                </div>
                <div className='flex my-16'>
                    <div 
                        className='w-full shadow-2xl md:text-3xl md:pt-24 px-2 pt-6 lg:px-12'
                    >“As soon as I saw you, I knew you would be an adventure of a lifetime.” —Winnie the Pooh</div>
                    <img 
                        className='w-1/2'
                        src={adventureImg} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={Jan20Img} 
                    />
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-32 lg:text-6xl px-2 pt-12 lg:px-20'
                    >Bryce Canyon National Park, Utah, Jan. 2020</div>
                </div>
                <div className='flex mt-16'>
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-24 lg:text-6xl px-2 pt-6 lg:px-12'
                    >Zion National Park, Utah, Feb. 2020</div>
                    <img 
                        className='w-1/2'
                        src={Feb20Img} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={April20Img} 
                    />
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-32 lg:text-6xl px-2 pt-12 lg:px-20'
                    >Brigham Young University, Utah, Apr. 2020</div>
                </div>
                <div className='flex mt-16'>
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-24 lg:text-6xl px-2 pt-6 lg:px-12'
                    >Nauvoo Temple, Illinois, Aug. 2020</div>
                    <img 
                        className='w-1/2'
                        src={Aug20Img} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={Dec20Img} 
                    />
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-32 lg:text-6xl px-2 pt-12 lg:px-20'
                    >Provo, Utah, Dec. 2020</div>
                </div>
                <div className='flex my-16'>
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-24 lg:text-6xl px-2 pt-6 lg:px-12'
                    >West Lafayette, Indiana, Jun. 2021</div>
                    <img 
                        className='w-1/2'
                        src={June21Img} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={July21Img} 
                    />
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-32 lg:text-6xl px-2 pt-12 lg:px-20'
                    >Red Cliff, Utah, Aug. 2021</div>
                </div>
                <div className='flex my-16'>
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-24 lg:text-6xl px-2 pt-6 lg:px-12'
                    >Chicago, Illinois, Nov. 2021</div>
                    <img 
                        className='w-1/2'
                        src={Nov21Img} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={Jan22Img} 
                    />
                    <div 
                        className='w-full shadow-2xl md:text-4xl md:pt-32 lg:text-6xl px-2 pt-12 lg:px-20'
                    >Surfside, Texas, Jan. 2022</div>
                </div>
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
