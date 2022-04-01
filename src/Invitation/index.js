import React, { useEffect, useState } from 'react';
import './../App.css';

const Invitation = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const theBigDay = '7 May 2022 15:00:00 EDT'
    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    };
    
    const getTimeUntil = (theBigDay) => {
        const time = Date.parse(theBigDay) - Date.parse(new Date());
        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };
    
    useEffect(() => {
        setInterval(() => getTimeUntil(theBigDay), 1000);
    
        return () => getTimeUntil(theBigDay);
    }, []);
    
    return (
        <div className='py-16 mx-8 lg:mx-24'>
            <a id="invitation"/>
            <div className='mx-4 lg:mx-8 xl:mx-20 lg:py-48 footer md:flex md:justify-evenly py-32'>
                <div>
                    <div className='text-4xl xl:text-6xl font-bold '>Come Join Us In:</div>
                    <div className="text-2xl xl:text-4xl">{leading0(days)} Days</div>
                    <div className="text-2xl xl:text-4xl">{leading0(hours)} Hours</div>
                    <div className="text-2xl xl:text-4xl">{leading0(minutes)} Minutes</div>
                    <div className="text-2xl xl:text-4xl">{leading0(seconds)} Seconds</div>            
                </div>
                <div>
                    <div className='text-4xl xl:text-6xl font-bold '>May 7, 2022</div>
                    <div className="text-2xl xl:text-4xl">3 - 5 pm, EDT</div>
                    <div className="text-2xl xl:text-4xl">1515 Ravinia Road</div>
                    <div className="text-2xl xl:text-4xl">West Lafayette, IN</div>
                </div>
            </div>
        </div>
    );
};

export default Invitation;
