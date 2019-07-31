import React from 'react';
import './Footer.css';

const Footer = () => {

  return (
    <footer>
      <div className='footer'>
      <div className='about'>
        <div className='first'>About us</div>
        <div className='about-text'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Molestias velit ex distinctio, quisquam debitis
        </div>
      </div>

      <div className='contact'>
        <div className='first'>Contact Us</div>
        <div><label htmlFor="phone"><i class="fas fa-phone"></i></label>0123456789</div>
        <div><label htmlFor="email"><i class="fas fa-inbox"></i></label>example@gmail.com</div>
      </div>
      <div className='searchBar'>
        <div className='first'>Search</div>
        <input type="text" placeholder="Search.." name="search" />
      </div>
      </div>
      <div className='last-foot-row'>
        <p>9Pets - All rights reserved</p>
        <ul>
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Terms and Conditions</li>
        </ul>
        <div>
          <ul>
            <li>Follow us</li>
            <li><i class="fab fa-facebook"></i></li>
            <li><i class="fab fa-twitter"></i></li>
            <li><i class="fab fa-instagram"></i></li>
          </ul>
        </div>
      </div>
    </footer>
  )

}

export default Footer;