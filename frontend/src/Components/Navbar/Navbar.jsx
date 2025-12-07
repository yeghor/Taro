import React from 'react';
import './navBar.css'

const Navbar = () => {
  return (
    <header className="header">
      <a href='/' className='logo'>Logo</a>

      <nav className="navbar">
        <a href='/'>Home</a>
        <a href='/'>About</a>
        <a href='/'>...</a>
        <a href='/'>...</a>
      </nav>
    </ header>
  );
};

export default Navbar;
