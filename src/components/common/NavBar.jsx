import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {


  return (
    <div className='main-nav'>
      <ul className='bar-titles'>
        <li className='icon '> <Link className='icon-link' to='/landingpage'>9pets</Link></li>
        <li><Link className='link' to='/aboutpage'>About</Link></li>
        <li><Link className='link' to='searchpage'>Search Pets</Link></li>
        <li><Link className='link' to='blogpage'>Blog</Link></li>
        <li className='style-li'><Link className='link' to='contactpage'>Contact</Link></li>
        <li className='style-li'><Link className='link' to='registerpage'>Sign in/ Register</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;