import React from 'react';
import NavBar from './common/NavBar';
import Footer from './common/Footer';
import Header from './common/Header'
import SalesCard from './SalesCard';
import './LandingPage.css'


const LandingPage = () => {
    const fake = [1,2,3,4,5,6]
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
            <p className='main-info'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quam necessitatibus doloremque velit libero architecto fuga est, 
            quaerat delectus quae? Laboriosam ipsam, nobis dignissimos 
            provident placeat fuga reprehenderit sit consectetur sequi?
            </p>
        </div>

      </section>
      <section className='landing-sales'>
        <p className='landing-sales-title'>Get a Pet Today</p>
        <div>
          <div className='sales-card'>
            {fake.map(elem => <SalesCard />)}
          </div>
          <div className='sales-btn'> <button>view more</button></div>
        </div>
      </section>
      <Footer />
    </div>
  )

}

export default LandingPage;