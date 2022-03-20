import React, { useEffect, useState } from 'react';
import './../App.css';

const Footer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const theBigDay = '28 May 2022 10:00:00 MST'
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
        <div className='py-32 m-12 footer'>
            <div className='text-4xl font-bold '>Come Join Us In:</div>
            <div className="text-2xl ">{leading0(days)} Days</div>
            <div className="text-2xl ">{leading0(hours)} Hours</div>
            <div className="text-2xl ">{leading0(minutes)} Minutes</div>
            <div className="text-2xl ">{leading0(seconds)} Seconds</div>            
        </div>
    );
};

export default Footer;
