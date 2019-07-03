import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import Header from './common/Header'
import './LandingPage.css'


const LandingPage = () => {

  return (
    <div className='main-landing'>
      <div className='landing-nav'>
      <NavBar />
      </div>
      <div className='landing-header'>
      <Header />
      </div>
      <section>
        <div className='info-section'> 
            <p className='info-title'>Meet your Friend</p>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam necessitatibus doloremque velit libero architecto fuga est, 
            quaerat delectus quae? Laboriosam ipsam, nobis dignissimos 
            provident placeat fuga reprehenderit sit consectetur sequi?
            </p>
        </div>

      </section>
      <section className='landing-sales'>
        <p>Get a Pet Today</p>

      </section>
      <Footer />
    </div>
  )

}

export default LandingPage;