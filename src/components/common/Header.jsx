import React from 'react';
import './Header.css'
import tinydog from './img/tinydog.jpg'

const Header = () => {

  return (
    <div className='main-header'>
      <header>
      <img src={tinydog} alt="dogs and cats"/>
      <div className='header-title'>
        <h1>Welcome to 9pets</h1>
        <p>first 9ja pet community</p>
      </div>
      </header>
    </div>
  )
}

export default Header;