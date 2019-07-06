import React, {useState} from 'react';
import roftl from '../common/img/roftl.jpg';
import SalesCard from '../SalesCard';
import Pagination from '../common/pagination';
import './SearchPage.css';

const SearchPage = () => {

  const fake = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10)

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = fake.slice(indexOfFirstPost, indexOfLastPost);

  //change the posts
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className='search-page'>
      <div className='search-image'>
        <img className='top' src={roftl} alt="dog and cat playing"/>
        <div className='search-box'>
         <input type="text" name='searchbox' placeholder='Search...' />
         <button>Enter</button>
        </div>
      </div>
        <div className='search-sales'>
          {currentPosts.map(elem => <SalesCard margin='1rem'/>)}
      </div>
      <div className='search-paginate'>
      <Pagination postPerPage={postPerPage} totalPosts={fake.length} paginate={paginate}/>
      </div>
    </div>
  )
}

export default SearchPage;