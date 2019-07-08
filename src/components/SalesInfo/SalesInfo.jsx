import React from 'react';
import './SalesInfo.css'

const SalesInfo = () => {


  return (
    <div className='sales-main'>
      <div className='sales-main1'>
        <div className='holds-sales-pics'>

        </div>
        <div className='sales-social'>
          <div className='sales-icon'>
            <span><i className="far fa-eye"></i></span>
            <span><i className="far fa-heart"></i></span>
            <span><i className="far fa-comments"></i></span>
          </div>
        </div>
        <div className='sales-info'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim odio recusandae
          incidunt eaque porro, quos et rem necessitatibus reiciendis aliquid molestiae hic
          quia exercitationem sed nemo consectetur vel ullam asperiores.
        </div>
        <div className='sales-share'>

        </div>
      </div>
      <div className='sales-contact'>
        <p className='sales-contact-title'>9pets</p>
        <p className='sales-contact-location'>Nigeria| Lagos | Enugu</p>
        <div className='sales-contact-info'>
          <p className='sales-number'><div className='sales-icon1'><i className="fas fa-mobile-alt"></i></div>Phone Number</p>
          <p className='sales-person'><div className='sales-icon1'><i className="fas fa-info-circle"></i></div>Contact Person</p>
        </div>
      </div>
    </div>
  )
}

export default SalesInfo;