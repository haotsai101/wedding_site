import React from 'react';
import amazon_logo from '../assets/available_at_amazon_logo.png'

const RSVP = () => {
    return (
        <div className='py-16 mx-8 lg:mx-24'>
            <a id="rsvp"/>
            <div className='text-6xl font-bold mt-16'>RSVP</div>
            <iframe className='pt-16' src="https://docs.google.com/forms/d/e/1FAIpQLSeJYu2XBrGm7a5XLkZVtBO8mZiDNaHksMMshoPa7fEL15sLRQ/viewform?embedded=true" width="100%" height="750" frameborder="0" marginheight="0" marginwidth="0">loading…</iframe>
        </div>
    );
};

export default RSVP;
