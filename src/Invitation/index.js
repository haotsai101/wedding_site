import React from 'react';
import roadtripImg from './../assets/roadtrip.jpeg'
import incarImg from './../assets/incar.jpeg'
import adventureImg from './../assets/adventure.jpeg'

const Invitation = () => {
        return (
        <div className='border-y-4 rounded-lg border-y-zinc-900 mt-16 mx-8 lg:mx-24'>
            <a id="invitation"/>
                <div>
                <div className='text-6xl font-bold mt-16'>Our Stories</div>
                <div className='flex mt-16'>
                    <div 
                        className='w-full shadow-2xl lg:text-6xl px-2 py-6 lg:py-24'
                    >I used to like solo trips until our first road trip together</div>
                    <img 
                        className='w-1/2'
                        src={roadtripImg} 
                    />
                </div>
                <div className='flex mt-16'>
                    <img 
                        className='w-1/2'
                        src={incarImg} 
                    />
                    <div 
                        className='w-full shadow-2xl lg:text-6xl px-2 py-12 lg:py-56'
                    >It’s so much better when you get to sing and laugh in the car with your love</div>
                </div>
                <div className='flex my-16'>
                    <div 
                        className='w-full shadow-2xl lg:text-6xl px-2 py-6 lg:py-24'
                    >“As soon as I saw you, I knew you would be an adventure of a lifetime.” —Winnie the Pooh</div>
                    <img 
                        className='w-1/2'
                        src={adventureImg} 
                    />
                </div>
            </div>
        </div>
    );
};

export default Invitation;
