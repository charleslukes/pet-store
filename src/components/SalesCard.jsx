import React, { useState } from 'react';
import './SalesCard.css';

const SalesCard = (props) => {
  //gets data from a state and populates it

  const initialValues = {
    image: [],
    price: ['N15000', 'N130,000', 'N5000', 'N7000', '50,000'],
    petName: ['mark', 'hart', 'scrub', 'wills', 'boggy'],
  }

  const [images] = useState();

  return (
    <div>
      <div class="card" style={{ margin: props.margin }}>
        <img src="https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzEwNC84MTkvb3JpZ2luYWwvY3V0ZS1raXR0ZW4uanBn" alt="cat"
          style={{ width: '100%' }} />
        <div class="container">
          <h4><b>John Doe</b></h4>
          <div className='container-click'>view more</div>
          <p>Cute Cat</p>
          <div className='card-sections'>
            <div className='first-section'>
              <p><i className="far fa-eye"></i></p>
              <p><i className="far fa-comments"></i></p>
            </div>
            <div className='second-section'>
              <p><i className="far fa-heart"></i></p>
              <p><i className="fas fa-calendar-week"></i></p>
            </div>
          </div>
          <div className='third-section'>
            <hr />
            <p>contains uploaded info</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesCard;