import React from 'react';
import amazon_logo from '../assets/available_at_amazon_logo.png'

const Registry = () => {
    return (
        <div className='py-16 mx-8 lg:mx-24'>
            <a id="registry"/>
            <div className='text-6xl font-bold mt-16'>Registry</div>
            <a className='mt-10 p-6 w-96 bg-slate-50 inline-block rounded-xl shadow-2xl' href='https://www.amazon.com/wedding/tina-lin-zhi-hao-tsai-provo-may-2022/registry/7MSDCJH8FG3S'>
                <img className='h-10 float-left' src={amazon_logo} />
                <div className='text-4xl'>Amazon Registry</div>
            </a>
        </div>
    );
};

export default Registry;
