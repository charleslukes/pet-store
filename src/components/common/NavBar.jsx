import React from 'react';
import './NavBar.css'

const NavBar = () => {


  return (
    <div className='main-nav'>
      <ul className='bar-titles'>
        <li className='icon'>9pets</li>
        <li>About</li>
        <li>Search Pets</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Sign in/ Register</li>
      </ul>
    </div>
  )
}

export default NavBar;