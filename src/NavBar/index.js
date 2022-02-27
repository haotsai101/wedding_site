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
    const [scrollDir, setScrollDir] = useState("up");

    useEffect(() => {
        const threshold = 0;
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
            ticking = false;
            return;
            }
            setScrollDir(scrollY > lastScrollY ? "down" : "up");
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
            window.requestAnimationFrame(updateScrollDir);
            ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <Nav className={classNames('fixed w-screen z-50 h-80 transition ease-in-out duration-450',
            scrollDir === 'up' ? 'translate-y-0' : '-translate-y-full')}>
            <div className='flex justify-center items-center w-screen h-72'>
                <div>
                    <h1 className='font-caveat font-black text-6xl'>Tina & Zhihao</h1>
                    <p className='font-caveat text-2xl'>May 28th, 2022</p>
                    <p className='font-caveat text-2xl'>Provo Utah</p>
                </div>
            </div>
            <div className='absolute bottom-0 w-screen'>
                <div className='flex justify-evenly align-bottom px-16'>
                    <NavItem className='font-caveat' href='#gallery'>Gallery</NavItem>
                    <NavItem className='font-caveat' href='#invitation'>Invitation</NavItem>
                    <NavItem className='font-caveat' href='#registry'>Registry</NavItem>
                </div>
            </div>
        </Nav>
    )
};

export default Navbar;
