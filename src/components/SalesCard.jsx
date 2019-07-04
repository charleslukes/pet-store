import React, { useState } from 'react';
import './SalesCard.css';

const SalesCard = () => {
  //gets data from a state and populates it

  const initialValues = {
    image: [],
    price: ['N15000', 'N130,000', 'N5000', 'N7000', '50,000'],
    petName: ['mark', 'hart', 'scrub', 'wills', 'boggy'],
  }

  const [images] = useState();

  return (
    <div>
      <div class="card">
        <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn" alt="cat"
          style={{ width: '100%' }} />
        <div class="container">
          <h4><b>John Doe</b></h4>
          <p>Cute Cat</p>
          <div className='card-sections'>
            <div className='first-section'>
              <p>views</p>
              <p>comments</p>
            </div>
            <div className='second-section'>
              <p>likes</p>
              <p>date</p>
            </div>
          </div>
          <div className='third-section'>
            <hr/>
            <p>contains uploaded info</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesCard;