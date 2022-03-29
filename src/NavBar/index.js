import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import frame from '../assets/flower-frame.jpeg'

export const Nav = styled.div`
    background-image: url(${frame});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const NavItem = styled.a`
    text-align: center;
    padding: 0.5em 0.5em;
    text-decoration: none;
    font-size: 1rem;
    height: 2.5rem;
    background: radial-gradient(#ffffffb3, rgba(255,0,0,0));
    border-radius: 2rem;
 
    &:hover {
        color: #404040;
    }
`;

const Navbar = () => {
    const [toggled, setToggled] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;
            setToggled(scrollY > 0)
        };

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDir);
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [toggled]);

    return (
        <Nav className={classNames('fixed w-screen z-50 h-80 transition ease-in-out duration-450',
            toggled ? '-translate-y-64' : 'translate-y-0')}>
            <div className='flex justify-center items-center w-screen h-72'>
                <div>
                    <h1 className='font-black text-6xl'>Tina & Zhihao</h1>
                    <p className='text-2xl'>May 28, 2022</p>
                    <p className='text-2xl'>Provo Utah</p>
                </div>
            </div>
            <div className='absolute bottom-0 w-screen'>
                <div className='flex justify-evenly align-bottom px-16'>
                    <NavItem href='#gallery'>Gallery</NavItem>
                    <NavItem href='#invitation'>Invitation</NavItem>
                    <NavItem href='#registry'>Registry</NavItem>
                    <NavItem href='#trips'>Stories</NavItem>
                </div>
            </div>
        </Nav>
    )
};

export default Navbar;
