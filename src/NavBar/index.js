import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Nav = styled.ul`
    background-color: black;
    background-image: url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80');
`;

export const NavItem = styled.a`
    //color: #ddd;
    text-align: center;
    padding: 1em 2em;
    text-decoration: none;
    font-size: 17px;
  
    &:hover {
        color: #f2f2f2;
    }
    
    &:active {
        background-color: #ddd;
        color: black;
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
        <Nav className={classNames('fixed w-screen flex justify-center z-50 h-80 transition ease-in-out duration-450',
            scrollDir === 'up' ? 'translate-y-0' : '-translate-y-full')}>
            <NavItem href='#gallery'>Gallery</NavItem>
            <NavItem href='#invitation'>Invitation</NavItem>
            <NavItem href='#registry'>Registry</NavItem>
        </Nav>
    )
};

export default Navbar;
