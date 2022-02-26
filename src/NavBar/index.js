import React from 'react';
import styled from 'styled-components';

export const Nav = styled.ul`
    background-color: black;
    background-image: url('https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80');
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
        <Nav className='w-screen flex justify-center z-50 h-80'>
            <NavItem href='#gallery'>Gallery</NavItem>
            <NavItem href='#invitation'>Invitation</NavItem>
            <NavItem href='#registry'>Registry</NavItem>
        </Nav>
    );
};

export default Navbar;
