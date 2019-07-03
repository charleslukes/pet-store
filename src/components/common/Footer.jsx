import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <div className='footer'>
      <div className='about'>
        <div className='first'>About us</div>
        <div className='about-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias velit ex distinctio, quisquam debitis
          quidem incidunt? Voluptate labore perspiciatis, 
          blanditiis
        </div>
      </div>

      <div className='contact'>
        <div className='first'>Contact</div>
        <div><label htmlFor="phone">Phone:</label>0123456789</div>
        <div><label htmlFor="email">Email:</label>example@gmail.com</div>
      </div>
      <div className='searchBar'>
        <div className='first'>Search</div>
        <input type="text" placeholder="Search.." name="search" />
      </div>
    </div>
  )

}

export default Footer;