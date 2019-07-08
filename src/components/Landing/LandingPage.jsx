import React from 'react';
import Header from '../common/Header'
import SalesCard from '../SalesCard/SalesCard';
import './LandingPage.css'
import ducksdog from '../common/img/ducksdog.jpg';
import womancat from '../common/img/womancat.jpg'


const LandingPage = () => {
    const fake = [1,2,3,4,5,6]
  return (
    <div className='main-landing'>
      <div className='first-section-landing'>
      <div className='landing-header'>
      <Header />
      </div >
      <section >
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
      </div>
      <section className='landing-sales'>
        <div className='sales-section-landing'>
        <p className='landing-sales-title'>Get a Pet Today</p>
        <div >
          <div className='sales-card'>
            {fake.map(elem => <SalesCard margin='3rem'/>)}
          </div>
          <div className='sales-btn'> <button>view more &rarr;</button></div>
        </div>
        </div>
        <div className='fam-pic'>
          <div className='fam1'>
          <img src={ducksdog} alt="ducks and dog"/>
          </div>
          <div className='fam2'>
            <p className='fam-title'>Join the Community</p>
            <p className='fam-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur cupiditate beatae! Porro, iure, itaque nobis 
              exercitationem placeat consequatur numquam illo dolore nisi distinctio, molestias ducimus doloribus suscipit veniam hic.
              exercitationem placeat consequatur numquam illo dolore nisi distinctio, molestias ducimus doloribus suscipit veniam hic
              exercitationem placeat consequatur numquam illo dolore nisi distinctio, molestias ducimus doloribus suscipit veniam hic</p>
            <button className='join-btn'>JOIN NOW</button>
          </div>
          <div className='fam2'>
            <p className='fam-title'>Care about your Pet</p>
            <p className='fam-info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil pariatur cupiditate beatae! Porro, iure, itaque nobis 
              exercitationem placeat consequatur numquam illo dolore nisi distinctio, molestias ducimus doloribus suscipit veniam hic.
              exercitationem placeat consequatur numquam illo dolore nisi distinctio, molestias ducimus doloribus suscipit veniam hic
              exercitationem placeat consequatur numquam illo dolore nisi distinctio, molestias ducimus doloribus suscipit veniam hic</p>
            <button className='join-btn'>JOIN NOW</button>
          </div>
          <div className='fam1'>
            <img src={womancat} alt="woman and cat"/>
          </div>
        </div>
      </section>
    </div>
  )

}

export default LandingPage;