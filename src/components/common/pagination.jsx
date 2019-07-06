import React from 'react';
import './paginate.css';

const Pagination = ({ postPerPage, totalPosts, paginate }) => {

  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPosts / postPerPage); index++) {
    pageNumbers.push(index);
  }

  return (
    <div className='paginate-ul'>
      {pageNumbers.map(number => {
        return (
          <li
            key={number}
            id={number}
            onClick={() => paginate(number)}
            className='paginate-btn'
          >
            {number}
          </li>
        );
      })
      }
        </div>
  )
}

export default Pagination;