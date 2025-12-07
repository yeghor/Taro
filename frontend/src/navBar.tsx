import React from 'react';

const NavbarComp = () => {
    return (
        <header className="header">
            <a href='/' className='logo'>Logo</a>

            <nav className="navbar">
                <a className='' href='/'>Home</a>
                <a className='' href='/'>About</a>
                <a className='' href='/'>...</a>
                <a className='' href='/'>...</a>
            </nav>
        </ header>
    );
};

export default NavbarComp;
