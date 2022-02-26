import React from 'react';
import styled from 'styled-components';

export const Nav = styled.ul`
    background-color: #333;
    overflow: hidden;
`;

export const NavItem = styled.a`
    color: #f2f2f2;
    text-align: center;
    padding: 1em 2em;
    text-decoration: none;
    font-size: 17px;
  
    &:hover {
        background-color: #ddd;
        color: black;
    }
    
    &:active {
        background-color: #04AA6D;
        color: white;
    }
`;

const Navbar = () => {
    return (
        <Nav className='fixed w-full flex justify-center'>
            <NavItem href='#gallery'>Gallery</NavItem>
            <NavItem href='#invitation'>Invitation</NavItem>
            <NavItem href='#registry'>Registry</NavItem>
        </Nav>
    );
};

export default Navbar;
